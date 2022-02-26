import React, { useState, useRef, useEffect } from 'react'
import {
  FlatList, KeyboardAvoidingView, SafeAreaView, TouchableOpacity
} from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import firestore from '@react-native-firebase/firestore';
// -----------------------------------------------------------------------------
import {
  AlignView,
  BodyView,
  Container, ConversationView,
  ForwardText, ForwardOnTopView,
  Header, HrDivider, HrLine,
  Image, ImageBackgroundView,
  LineView,
  MessageText, MessageContainer,
  MessageWrapper, MessageListView, MessageListItemView,
  MessageListItemText, MessageListButton, MessageTime, MessageIcon,
  MessageBottomView, MessageView, MessageViewUser,
  // ParsedKeyboardAvoidingView,
  ReplyContainer, ReplyView, ReplyOnTopView, ReplyNameText, ReplyOnTopText,
  SendInput, SendButton, SendButtonView,
  SendIcon, SpaceView,
  SenderView, SenderText, SenderAboutText,
  TemporaryMessageContainer, TemporaryMessageView, TemporaryMessageText,
  TemporaryMessageIcon, TemporaryMessageIconView,
} from './styles'
import api from '~/services/api';
import { updateMessagesRequest, updateForwardMessage } from '~/store/modules/message/actions';
// import messaging from '@react-native-firebase/messaging';

export default function MessagesConversationPage({ navigation, route }) {
  const userId = useSelector(state => state.user.profile.id);
  const messageWorkerId = route.params.worker_id;
  const messageUserId = route.params.user_id;
  const first_message = route.params.first_message;
  const chat_id = route.params.chat_id;
  const inverted = route.params.inverted;

  // const first_message = 'OK'
  const userIsWorker = userId === messageWorkerId;

  const dispatch = useDispatch();

  // const [messages, setMessages] = useState(route.params.messages);
  // const [defaultMessages, setDefaultMessages] = useState(route.params.messages);
  const [messages, setMessages] = useState([]);
  const [defaultMessages, setDefaultMessages] = useState();

  const [replyValue, setReplyValue] = useState();
  const [replySender, setReplySender] = useState();
  const [value, setValue] = useState();
  const [messageDropMenu, setMessageDropMenu] = useState();
  const [toggleDropMenu, setToggleDropMenu] = useState(false);
  const [workerData, setWorkerData] = useState();
  const [load, setLoad] = useState();
  const lastMessageRef = useRef()

  const messageId = route.params.message_id;

  const task = route.params;
  // const worker_phonenumber = route.params.worker_phonenumber

  const chatId = route.params.chat_id;

  const messagesRef = firestore()
    // .collection(`messages/task/${task.id}`)
    .collection(`messages/chat/${chatId}`)

  const formattedMessageDate = fdate =>
  fdate == null
    ? ''
    : format(fdate, "dd'/'MMM'/'yyyy HH:mm", { locale: ptBR });

  useEffect(() => {
    // getPhoto(worker_phonenumber)
    // setMessages(route.params.messages)
    getMessages()
  }, []);

  function getMessages() {
    // const response = await api.get(`messages/${task.message_id}`)
    // setMessages(response.data.messages)
    // setDefaultMessages(response.data.messages)

    const unsubscribe = messagesRef
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map(d => ({
          ...d.data(),
        }));
        // console.log(data)
        setMessages(data)
        setDefaultMessages(data)
        // lastMessageRef.current.scrollToEnd({ animated: false })
      })
      return unsubscribe;
  }

  // async function getPhoto(phonenumber) {
  //   const worker = await api.get('workers/individual', {
  //     params: {phonenumber: phonenumber},
  //   })
  //   setWorkerData(worker.data)
  // }

  async function handleSend() {
    try {
      setLoad(true)
      let newMessage = null
      let formattedTimeStamp = formattedMessageDate(new Date())
      const message_id = Math.floor(Math.random() * 1000000)
      // const message_id = messages.length
      if (replyValue) {
        newMessage = {
          id: message_id,
          message: value,
          sender: `${userIsWorker ? "worker" : "user"}`,
          user_read: userIsWorker ? false : true,
          worker_read: userIsWorker ? true : false,
          timestamp: formattedTimeStamp,
          reply_message: replyValue,
          reply_sender: replySender,
          forward_message: false,
          visible: true,
          createdAt: firestore.FieldValue.serverTimestamp(),
        }
      } else {
        newMessage = {
          id: message_id,
          message: value,
          sender: `${inverted ? "worker" : "user"}`,
          user_read: inverted ? false : true,
          worker_read: inverted ? true : false,
          timestamp: formattedTimeStamp,
          reply_message: '',
          reply_sender: '',
          forward_message: false,
          visible: true,
          createdAt: firestore.FieldValue.serverTimestamp(),
        }
      }
      // Firebase Messaging *****
      await messagesRef
      .doc(`${message_id}`).set(newMessage)
      .then(() => {


        if(first_message === true) {
          api.post('/messages', {
            user_id: messageUserId,
            worker_id: messageWorkerId,
            chat_id: chat_id,
          });
          return
        }



        // if (userIsWorker) {
        //   api.put(`messages/${messageId}/worker`, {
        //     messages: newMessage,
        //     task_id: task.id,
        //     task_name: task.name,
        //     user_id: messageUserId,
        //     user_name: user.user_name,
        //     worker_id: messageWorkerId,
        //   });
        // } else {
        //   api.put(`messages/${messageId}/user`, {
        //     messages: newMessage,
        //     task_id: task.id,
        //     task_name: task.name,
        //     user_id: messageUserId,
        //     user_name: user.user_name,
        //   });
        // }
      })
      .catch((error) => {
        console.log("Error writing document: ", error);
      });

      // await api.put(`tasks/${task.id}`, {
      //   messaged_at: new Date(),
      // })

      // setValue();
      // setReplyValue();
      // lastMessageRef.current.scrollToEnd();
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

  // update with firebase!!!
  async function handleMessageDelete(position) {
    const editedTaskMessages = task.messages;
    editedTaskMessages[position].removed_message = editedTaskMessages[position].message;
    editedTaskMessages[position].message = 'mensagem removida'
    await api.put(`tasks/${task.id}`, {
      messages:  editedTaskMessages
    });
    setToggleDropMenu(false)
  }
  // ---------------------------------------------------------------------------
  const renderItem = ({ item, index }) => (
    <AlignView key={item.id} sender={item.sender}>
      <LineView>
        <MessageContainer sender={item.sender}>
          <MessageWrapper>
            { inverted && (
              <MessageTime>{item.timestamp}</MessageTime>
            )}
            { item.sender === 'user'
              ? (
                <MessageViewUser
                  sender={item.sender}
                  // colors={['#2EFFFF', '#FC56FF']}
                  colors={['#fff', '#FC56FF']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                >
                  { item.reply_message && !item.removed_message
                    ? (
                      <ReplyOnTopView>
                        { item.reply_sender === 'worker'
                          ? (
                            <ReplyNameText>{task.worker_name}</ReplyNameText>
                          )
                          : (
                            <ReplyNameText>{task.user_name}</ReplyNameText>
                          )
                        }
                        <ReplyOnTopText>{item.reply_message}</ReplyOnTopText>
                      </ReplyOnTopView>
                    )
                    : null
                  }
                  { item.forward_message && !item.removed_message
                    ? (
                      <ForwardOnTopView>
                        <MessageIcon name='corner-down-right'/>
                        <ForwardText>Mens. encaminhada</ForwardText>
                      </ForwardOnTopView>
                    )
                    : (
                      null
                    )
                  }

                  <MessageBottomView>
                    <MessageText removedMessage={item.removed_message}>{item.message}</MessageText>
                    <TouchableOpacity
                      onPress={() => handleMessageDropMenu(index)}
                    >
                      <MessageIcon name='chevron-down'/>
                    </TouchableOpacity>
                  </MessageBottomView>
                </MessageViewUser>
              )
              : (
                <MessageView
                  sender={item.sender}
                  // colors={['#FBFF2E', '#4BFF2E']}
                  colors={['#fff', '#4BFF2E']}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 0, y: 1 }}
                >
                  { item.reply_message && !item.removed_message
                    ? (
                      <ReplyOnTopView>
                        { item.reply_sender === 'worker'
                          ? (
                            <ReplyNameText>{task.worker_name}</ReplyNameText>
                          )
                          : (
                            <ReplyNameText>{task.user_name}</ReplyNameText>
                          )
                        }
                        <ReplyOnTopText>{item.reply_message}</ReplyOnTopText>
                      </ReplyOnTopView>
                    )
                    : null
                  }
                  { item.forward_message && !item.removed_message
                    ? (
                      <ForwardOnTopView>
                        <MessageIcon name='corner-down-right'/>
                        <ForwardText>Mens. encaminhada</ForwardText>
                      </ForwardOnTopView>
                    )
                    : (
                      null
                    )
                  }
                  <MessageBottomView>
                    <MessageText removedMessage={item.removed_message}>{item.message}</MessageText>
                    <TouchableOpacity
                      onPress={() => handleMessageDropMenu(index)}
                    >
                      <MessageIcon name='chevron-down'/>
                    </TouchableOpacity>
                  </MessageBottomView>
                </MessageView>
              )
            }

            { !inverted && (
              <MessageTime>{item.timestamp}</MessageTime>
            )}
          </MessageWrapper>


          { (messageDropMenu === index) && (toggleDropMenu === true) && (
            <MessageListView>
              <MessageListButton
                onPress={() => handleMessageReply(item.message, item.sender)}
              >
                <MessageListItemView>
                  <MessageListItemText>Responder</MessageListItemText>
                </MessageListItemView>
              </MessageListButton>
              <MessageListButton
                onPress={() => handleMessageForward(item.message)}
              >
                <MessageListItemView>
                  <MessageListItemText>Encaminhar</MessageListItemText>
                </MessageListItemView>
              </MessageListButton>
              <MessageListButton
                onPress={() => handleMessageDelete(index)}
              >
                <MessageListItemView>
                  <MessageListItemText>Deletar</MessageListItemText>
                </MessageListItemView>
              </MessageListButton>
            </MessageListView>
          )}
        </MessageContainer>
      </LineView>
      <HrLine/>
    </AlignView>
  );
  // ---------------------------------------------------------------------------
  return (
    <SafeAreaView>
      <Container>
        <Header userIsWorker={userIsWorker}>
          <BodyView>
              { route.params === undefined || route.params.avatar === null
                ? (
                  <ImageBackgroundView userIsWorker={userIsWorker}>
                    <Image/>
                  </ImageBackgroundView>
                )
                : (
                  <ImageBackgroundView userIsWorker={userIsWorker}>
                    <Image
                      source={{ uri: route.params.avatar.url }}
                    />
                  </ImageBackgroundView>
                )
              }
            <SenderView>
              <SenderText numberOfLines={1}>{route.params.user_name}</SenderText>
              <SenderAboutText numberOfLines={1}>
                { route.params.bio
                  ? route.params.bio
                  : 'Seja a mudança que queira nesse mundo! Lorem Ipsum Lorem Ipsum Lorem Ipsum'
                }
              </SenderAboutText>
            </SenderView>
          </BodyView>
        </Header>
        <HrDivider/>
        <ConversationView>
          <FlatList
            data={messages}
            renderItem={renderItem}
            keyExtractor={item => String(item.id)}
            ref={lastMessageRef}
            // initialScrollIndex={2}
            // getItemLayout={(data, index) => (
            //   {length: 50, offset: 50 * index, index, animation: false}
            // )}
          />
          <ReplyContainer>
            { replyValue && (
              <TemporaryMessageContainer>
                <TemporaryMessageView>
                  <TemporaryMessageText>{replyValue}</TemporaryMessageText>
                </TemporaryMessageView>

                <TemporaryMessageIconView>
                  <TouchableOpacity onPress={() => setReplyValue()}>
                    <TemporaryMessageIcon name='x-circle'/>
                  </TouchableOpacity>
                </TemporaryMessageIconView>
              </TemporaryMessageContainer>
            )}
            <HrDivider/>
            <ReplyView>
              <SendInput
                  keyboardType="default"
                  autoCorrect={false}
                  autoCapitalize="none"
                  multiline
                  enablesReturnKeyAutomatically
                  returnKeyType="send"
                  value={value}
                  onChangeText={setValue}
                  placeholder="Write your message"
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

        {/* <ParsedKeyboardAvoidingView
          // keyboardVerticalOffset={10}
          // behavior={Platform.OS === "ios" ? "padding" : "height"}
          // behavior="height"
          behavior="position"
          // behavior='padding'
        > */}
        {/* </ParsedKeyboardAvoidingView> */}
      </Container>
    </SafeAreaView>
  )
}
