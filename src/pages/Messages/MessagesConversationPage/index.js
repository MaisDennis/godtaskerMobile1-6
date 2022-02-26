import React, { useState, useRef, useEffect } from 'react'
import {
  FlatList, SafeAreaView, TouchableOpacity
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { format, getDay, parseISO } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';
import firestore from '@react-native-firebase/firestore';
// import defaultAvatar from '~/assets/defaultAvatar.png';
// -----------------------------------------------------------------------------
import {
  AlignView,
  ForwardOnTopView, ForwardText,
  LineView,
  MessageBottomView, MessageContainer, MessageIcon,
  MessageListButton, MessageListItemView, MessageListView,
  MessageListItemText, MessageText, MessageTime,
  MessageView, MessageViewUser, MessageWrapper,
  ReplyOnTopView, ReplyOnTopWrapper,
  ReplyUserNameText, ReplyWorkerNameText, ReplyOnTopText,

} from './messageStyles'
import {
  Container,ConversationView,
  HrLine,
  // ParsedKeyboardAvoidingView,
  LeftBorderView,
  MarginView02, MarginView04, MarginView08,
  ReplyContainer, ReplyView,
  SendInput, SendButton, SendButtonView, SendIcon,
  SpaceView,
  TemporaryMessageContainer, TemporaryMessageView, TemporaryMessageText,
  TemporaryMessageIcon, TemporaryMessageIconView,
} from './pageStyles'
import api from '~/services/api';
import { updateMessagesRequest, updateForwardMessage } from '~/store/modules/message/actions';
// import messaging from '@react-native-firebase/messaging';

export default function MessagesConversationPage({ navigation, route }) {
  // console.log(route.params)
  const profileUserId = useSelector(state => state.user.profile.id);
  const profileUserName = useSelector(state => state.user.profile.user_name);
  const messageWorkerId = route.params.worker_id;
  const messageUserId = route.params.user_id;
  const chat_id = route.params.chat_id;
  const inverted = route.params.inverted;
  const dispatch = useDispatch();
  const [messages, setMessages] = useState([]);
  // const [defaultMessages, setDefaultMessages] = useState();

  const [firstMessage, setFirstMessage] = useState(route.params.first_message);
  const [replyValue, setReplyValue] = useState();
  const [replySender, setReplySender] = useState();
  const [value, setValue] = useState();
  const [messageDropMenu, setMessageDropMenu] = useState();
  const [toggleDropMenu, setToggleDropMenu] = useState(false);
  const [load, setLoad] = useState();
  const lastMessageRef = useRef()

  const task = route.params.userData;
  const chatId = route.params.chat_id;

  const messagesRef = firestore()
  .collection(`messages/chat/${chatId}`)

  const formattedMessageDate = fdate =>
  fdate == null
    ? ''
    : getDay(parseISO(JSON.parse(fdate))) === getDay(new Date())
        ? format(parseISO(JSON.parse(fdate)), "h:mm aaa", { locale: enUS })
        : format(parseISO(JSON.parse(fdate)), "MMM'/'dd'/'yy h:mm aaa", { locale: enUS })

  useEffect(() => {
    let mounted = true; // mounted solution: https://www.debuggr.io/react-update-unmounted-component/
    if (mounted) getMessages()
    return () => mounted = false;

  }, []);

  async function getMessages() {
    const unsubscribe = messagesRef
    .orderBy('createdAt')
    .onSnapshot((querySnapshot) => {
      const data = querySnapshot.docs.map(d => ({
        ...d.data(),
      }));
      setMessages(data.reverse())
      // setDefaultMessages(data)
    })
    return unsubscribe;
  }

  async function handleSend() {
    try {
      setLoad(true)
      let newMessage = null
      // let formattedTimeStamp = formattedMessageDate(new Date())
      const message_id = Math.floor(Math.random() * 1000000)
      if (replyValue) {
        newMessage = {
          createdAt: firestore.FieldValue.serverTimestamp(),
          forward_message: false,
          id: message_id,
          message: value,
          receiver_id: inverted ? messageUserId : messageWorkerId,
          reply_message: replyValue,
          reply_sender: replySender,
          sender: `${inverted ? "worker" : "user"}`,
          sender_name: profileUserName,
          sender_id: profileUserId,
          timestamp: JSON.stringify(new Date()),
          user_read: inverted ? false : true,
          visible: true,
          worker_read: inverted ? true : false,
        }
      } else {
        newMessage = {
          createdAt: firestore.FieldValue.serverTimestamp(),
          forward_message: false,
          id: message_id,
          message: value,
          receiver_id: inverted ? messageUserId : messageWorkerId,
          reply_message: '',
          reply_sender: '',
          sender: `${inverted ? "worker" : "user"}`,
          sender_id: profileUserId,
          sender_name: profileUserName,
          timestamp: JSON.stringify(new Date()),
          user_read: inverted ? false : true,
          visible: true,
          worker_read: inverted ? true : false,
        }
      }

      // Firebase Messaging *****
      await messagesRef
      .doc(`${message_id}`).set(newMessage)
      .then(() => {
        // console.log(firstMessage)
        if(firstMessage === true) {
          api.post('/messages', {
            user_id: messageUserId,
            worker_id: messageWorkerId,
            chat_id: chat_id,
            messaged_at: JSON.stringify(new Date()),
          });
          dispatch(updateMessagesRequest(new Date()))
          setFirstMessage(false);
          return
        }

        api.put(`/messages/${chat_id}`, {
          messaged_at: JSON.stringify(new Date()),
        })
        dispatch(updateMessagesRequest(new Date()))
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      });
      setValue();
      setReplyValue();
      setLoad(false)
    }
    catch(error) {
      console.log(error)
    }
  }

  function handleMessageDropMenu(position) {
    setMessageDropMenu(position)
    setToggleDropMenu(!toggleDropMenu)
  }

  function handleMessageReply(message, sender) {
    setReplyValue(message)
    setReplySender(sender)
    setToggleDropMenu(false)
  }

  function handleMessageForward(message) {
    setToggleDropMenu(false)
    dispatch(updateForwardMessage(message))
    navigation.goBack()
  }

  async function handleMessageDelete(messageId) {
    firestore().collection(`messages/chat/${chatId}`)
      .doc(JSON.stringify(messageId)).update({
        deleted_message: true
      })

    setToggleDropMenu(false)
  }
  // ---------------------------------------------------------------------------
  const renderItem = ({ item, index }) => (
    <AlignView key={item.id}>
      <MarginView02/>
      <LineView>
        <MessageContainer sender={item.sender} inverted={inverted}>
          <MessageWrapper>
            { !inverted
              ? (
                <>
                  { item.sender === 'user'
                    ? (<MessageTime>{formattedMessageDate(item.timestamp)}</MessageTime>)
                    : null
                  }
                </>
              )
              : (
                <>
                  { item.sender === 'worker'
                    ? (<MessageTime>{formattedMessageDate(item.timestamp)}</MessageTime>)
                    : null
                  }
                </>
              )
            }
            { !inverted
              ? (
                <>
                  { item.sender === 'user'
                    ? (
                      <MessageViewUser
                        sender={item.sender}
                        colors={['#E0EFEA', '#D0ECE3']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                      >
                        { item.reply_message && !item.removed_message && !item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <ReplyOnTopWrapper>
                                <LeftBorderView/>
                                <ReplyOnTopView>

                                  { item.reply_sender === 'worker'
                                    ? (
                                      <ReplyWorkerNameText>
                                        {item.reply_sender}

                                      </ReplyWorkerNameText>
                                    )
                                    : (
                                      <ReplyWorkerNameText>
                                        {item.reply_sender}

                                      </ReplyWorkerNameText>
                                    )
                                  }
                                  <ReplyOnTopText>{item.reply_message}</ReplyOnTopText>
                                </ReplyOnTopView>
                              </ReplyOnTopWrapper>
                            </>
                          )
                          : null
                        }
                        { item.forward_message && !item.removed_message && !item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <ForwardOnTopView>
                                <MessageIcon name='corner-down-right'/>
                                <ForwardText>Forwarded Message</ForwardText>
                              </ForwardOnTopView>
                            </>
                          )
                          : (
                            null
                          )
                        }
                        { item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <ForwardOnTopView>
                                <MessageIcon name='slash'/>
                                <ForwardText>This message was deleted</ForwardText>
                              </ForwardOnTopView>
                            </>
                          )
                          : null
                        }
                        { !item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <MessageBottomView>
                                <MessageText removedMessage={item.removed_message}>{item.message}</MessageText>
                                <TouchableOpacity
                                  onPress={() => handleMessageDropMenu(index)}
                                >
                                  <MessageIcon name='chevron-down'/>
                                </TouchableOpacity>
                              </MessageBottomView>
                            </>
                          )
                          : null

                        }
                        <MarginView04/>
                      </MessageViewUser>
                    )
                    : (
                      <MessageView
                        sender={item.sender}
                        colors={['#ddd', '#f5f5f5']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                      >
                        { item.reply_message && !item.removed_message && !item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <ReplyOnTopWrapper>
                              <LeftBorderView/>
                                <ReplyOnTopView>
                                  { item.reply_sender === 'worker'
                                    ? (
                                      <ReplyUserNameText>
                                        {item.reply_sender}
                                      </ReplyUserNameText>
                                    )
                                    : (
                                      <ReplyUserNameText>
                                        {item.reply_sender}
                                        </ReplyUserNameText>
                                    )
                                  }
                                  <ReplyOnTopText>{item.reply_message}</ReplyOnTopText>
                                </ReplyOnTopView>
                              </ReplyOnTopWrapper>
                            </>
                          )
                          : null
                        }
                        { item.forward_message && !item.removed_message && !item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <ForwardOnTopView>
                                <MessageIcon name='corner-down-right'/>
                                <ForwardText>Mens. encaminhada</ForwardText>
                              </ForwardOnTopView>
                            </>
                          )
                          : (
                            null
                          )
                        }
                        { item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <ForwardOnTopView>
                                <MessageIcon name='slash'/>
                                <ForwardText>This message was deleted</ForwardText>
                              </ForwardOnTopView>
                            </>
                          )
                          : null
                        }
                        { !item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <MessageBottomView>
                                <MessageText removedMessage={item.removed_message}>{item.message}</MessageText>
                                <TouchableOpacity
                                  onPress={() => handleMessageDropMenu(index)}
                                >
                                  <MessageIcon name='chevron-down'/>
                                </TouchableOpacity>
                              </MessageBottomView>
                            </>
                          )
                          : null

                        }
                        <MarginView04/>
                      </MessageView>
                    )
                  }
                </>
              )
              : (
                <>
                  { item.sender === 'worker'
                    ? (
                      <MessageViewUser
                        sender={item.sender}
                        colors={['#E0EFEA', '#D0ECE3']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                      >
                        { item.reply_message && !item.removed_message && !item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <ReplyOnTopWrapper>
                              <LeftBorderView/>
                                <ReplyOnTopView>

                                  { item.reply_sender === 'worker'
                                    ? (
                                      <ReplyWorkerNameText>
                                        {item.reply_sender}
                                      </ReplyWorkerNameText>
                                    )
                                    : (
                                      <ReplyWorkerNameText>
                                        {item.reply_sender}

                                      </ReplyWorkerNameText>
                                    )
                                  }
                                  <ReplyOnTopText>{item.reply_message}</ReplyOnTopText>
                                </ReplyOnTopView>
                              </ReplyOnTopWrapper>
                            </>
                          )
                          : null
                        }
                        { item.forward_message && !item.removed_message && !item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <ForwardOnTopView>
                                <MessageIcon name='corner-down-right'/>
                                <ForwardText>Mens. encaminhada</ForwardText>
                              </ForwardOnTopView>
                            </>
                          )
                          : (
                            null
                          )
                        }
                        { item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <ForwardOnTopView>
                                <MessageIcon name='slash'/>
                                <ForwardText>This message was deleted</ForwardText>
                              </ForwardOnTopView>
                            </>
                          )
                          : null
                        }
                        { !item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <MessageBottomView>
                                <MessageText removedMessage={item.removed_message}>{item.message}</MessageText>
                                <TouchableOpacity
                                  onPress={() => handleMessageDropMenu(index)}
                                >
                                  <MessageIcon name='chevron-down'/>
                                </TouchableOpacity>
                              </MessageBottomView>
                            </>
                          )
                          : null

                        }
                        <MarginView04/>
                      </MessageViewUser>
                    )
                    : (
                      <MessageView
                        sender={item.sender}
                        colors={['#f5f5f5', '#ddd']}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 0, y: 1 }}
                      >
                        { item.reply_message && !item.removed_message
                          ? (
                            <>
                              <MarginView04/>
                              <ReplyOnTopWrapper>
                              <LeftBorderView/>
                                <ReplyOnTopView>
                                  { item.reply_sender === 'worker'
                                    ? (
                                      <ReplyUserNameText>
                                        {item.sender_name}
                                      </ReplyUserNameText>
                                    )
                                    : (
                                      <ReplyUserNameText>
                                        {item.reply_sender}
                                      </ReplyUserNameText>
                                    )
                                  }
                                  <ReplyOnTopText>{item.reply_message}</ReplyOnTopText>
                                </ReplyOnTopView>
                              </ReplyOnTopWrapper>
                            </>
                          )
                          : null
                        }
                        { item.forward_message && !item.removed_message
                          ? (
                            <>
                              <MarginView04/>
                              <ForwardOnTopView>
                                <MessageIcon name='corner-down-right'/>
                                <ForwardText>Mens. encaminhada</ForwardText>
                              </ForwardOnTopView>
                            </>
                          )
                          : (
                            null
                          )
                        }
                        { item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <ForwardOnTopView>
                                <MessageIcon name='slash'/>
                                <ForwardText>This message was deleted</ForwardText>
                              </ForwardOnTopView>
                            </>
                          )
                          : null
                        }
                        { !item.deleted_message
                          ? (
                            <>
                              <MarginView04/>
                              <MessageBottomView>
                                <MessageText removedMessage={item.removed_message}>{item.message}</MessageText>
                                <TouchableOpacity
                                  onPress={() => handleMessageDropMenu(index)}
                                >
                                  <MessageIcon name='chevron-down'/>
                                </TouchableOpacity>
                              </MessageBottomView>
                            </>
                          )
                          : null

                        }
                        <MarginView04/>
                      </MessageView>
                    )
                  }
                </>

              )
            }
            { !inverted
              ? (
                <>
                  { item.sender === 'worker'
                    ? (<MessageTime>{formattedMessageDate(item.timestamp)}</MessageTime>)
                    : null
                  }
                </>
              )
              : (
                <>
                  { item.sender === 'user'
                    ? (<MessageTime>{formattedMessageDate(item.timestamp)}</MessageTime>)
                    : null
                  }
                </>
              )
            }
          </MessageWrapper>

          { (messageDropMenu === index) && (toggleDropMenu === true) && (
            <>
              <MarginView04/>
              <MessageListView>
                <MessageListButton
                  onPress={() => handleMessageReply(item.message, item.sender_name)}
                >
                  <MessageListItemView>
                    <MessageListItemText>Reply</MessageListItemText>
                  </MessageListItemView>
                </MessageListButton>
                <MessageListButton
                  onPress={() => handleMessageForward(item.message)}
                >
                  <MessageListItemView>
                    <MessageListItemText>Forward</MessageListItemText>
                  </MessageListItemView>
                </MessageListButton>
                { !inverted && item.sender === 'user'
                  ? (
                    <MessageListButton
                    onPress={() => handleMessageDelete(item.id)}
                  >
                    <MessageListItemView>
                      <MessageListItemText>Delete</MessageListItemText>
                    </MessageListItemView>
                  </MessageListButton>
                  )
                  : null
                }
                { inverted && item.sender === 'worker'
                  ? (
                    <MessageListButton
                    onPress={() => handleMessageDelete(item.id)}
                  >
                    <MessageListItemView>
                      <MessageListItemText>Delete</MessageListItemText>
                    </MessageListItemView>
                  </MessageListButton>
                  )
                  : null
                }

              </MessageListView>
            </>
          )}
        </MessageContainer>
      </LineView>
      <MarginView02/>
    </AlignView>
  );
  // ---------------------------------------------------------------------------
  return (
    <SafeAreaView>
      <Container>
        <ConversationView
          behavior={Platform.OS === "ios" ? "padding" : null}
          keyboardVerticalOffset = {Platform.OS === "ios" ? "80" : null}
        >
          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
            ref={lastMessageRef}
            inverted
            // onContentSizeChange={() => lastMessageRef.current.scrollToEnd()}
            // onLayout={() => lastMessageRef.current.scrollToEnd()}
          />
          <HrLine/>
          <ReplyContainer>
            { replyValue && (
              <TemporaryMessageContainer>
                <TemporaryMessageView>
                  <LeftBorderView/>
                  <TemporaryMessageText
                  numberOfLines={1}
                  >{replyValue}</TemporaryMessageText>
                </TemporaryMessageView>

                {/* <TemporaryMessageIconView> */}
                  <TouchableOpacity onPress={() => setReplyValue()}>
                    <TemporaryMessageIcon name='x-circle'/>
                  </TouchableOpacity>
                {/* </TemporaryMessageIconView> */}
              </TemporaryMessageContainer>
            )}
            <ReplyView>
              <SendInput
                autoCorrect={false}
                autoCapitalize="none"
                enablesReturnKeyAutomatically
                keyboardType="default"
                multiline
                onChangeText={setValue}
                placeholder="Message"
                returnKeyType="send"
                value={value}
              />
              {/* keep "if else" below */}
              { value
                ? (
                  <SendButtonView onPress={handleSend} disabled={load}>
                    <SendButton>
                        <SendIcon name="send"/>
                    </SendButton>
                  </SendButtonView>
                )
                : (
                  <SpaceView/>
                )
              }
            </ReplyView>
          </ReplyContainer>
        </ConversationView>
      </Container>
    </SafeAreaView>
  )
}
