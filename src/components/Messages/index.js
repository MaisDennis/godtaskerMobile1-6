import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { format, parseISO, getDay } from 'date-fns';
import { ptBR, enUS } from 'date-fns/locale';
import firestore from '@react-native-firebase/firestore';
import defaultAvatar from '~/assets/defaultAvatar.png';
// -----------------------------------------------------------------------------
import {
  BodyView, BodyWrapper,
  Container,
  LastMessageView, LastMessageText, LastMessageTimeView, LastMessageTimeText,
  LeftMessageView,
  MarginView02, MarginView04, MarginView08, MessageIcon,
  RightView,
  TitleView, TitleText,
  UnreadMessageCountText, UserImage, UserImageBackground,
} from '../Tasks/styles';
import { updateForwardMessage, updateChatInfo } from '~/store/modules/message/actions';
import api from '~/services/api';

export default function Messages({ data, navigation }) {
  const dispatch = useDispatch();
  const forwardValue = useSelector(state => state.message.forward_message.message);
  const updatedMessage = useSelector(state => state.message.profile)
  const profileUserId = useSelector(state => state.user.profile.id)
  const [resetConversation, setResetConversation] = useState();
  const [messageBell, setMessageBell] = useState();
  const [lastMessage, setLastMessage] = useState();
  const [lastMessageTime, setLastMessageTime] = useState();

  const user_id = data.user_id;
  const worker_id = data.worker_id;
  const chat_id = data.chat_id;
  const userData = data.user.id === profileUserId ? data.user : data.worker;
  const workerData = data.user.id === profileUserId ? data.worker : data.user;
  const user_name = userData.user_name;
  const worker_name = workerData.worker_name;
  const worker_photo = workerData.avatar;

  const userIsWorker = profileUserId === worker_id;

  const messagesRef = firestore().collection(`messages/chat/${chat_id}`)

  const formattedMessageDate = fdate =>
  fdate == null
    ? ''
    : getDay(parseISO(JSON.parse(fdate))) === getDay(new Date())
        ? format(parseISO(JSON.parse(fdate)), "'Today'   h:mm aaa", { locale: enUS })
        : format(parseISO(JSON.parse(fdate)), "MMM'/'dd'/'yy   h:mm aaa", { locale: enUS })

  useEffect(() => {
    getMessages()
  }, [updatedMessage])

  async function getMessages() {
    const unsubscribe = messagesRef
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map(d => ({
          ...d.data(),
        }));
        setMessageBell(data)
        let messagesLength = data.length

        const last_message = data[0]
          ? data[messagesLength-1].message
          : null
        setLastMessage(last_message)

        const last_message_time = data[0]
          ? data[messagesLength-1].timestamp
          : null

        setLastMessageTime(formattedMessageDate(last_message_time))


      })
      return unsubscribe;
  }

  async function handleMessageConversation() {
    const response = await api.get('/messages', {
      params: {
        user_id: profileUserId,
        worker_id: userIsWorker ? user_id : worker_id,
      },
    })

    messagesRef
      .orderBy('createdAt')
      .get().then(resp => {
        // console.log(resp.docs)
        resp.forEach(doc => {
          doc.ref.update({worker_read: true})
        })
      })

    let newMessage = null
    let editedMessages = messageBell;

    if (forwardValue) {
      const message_id = Math.floor(Math.random() * 1000000)
      newMessage = {
        createdAt: firestore.FieldValue.serverTimestamp(),
        forward_message: true,
        id: message_id,
        message: forwardValue,
        receiver_id: response.data.inverted ? user_id : worker_id,
        reply_message: '',
        reply_sender: '',
        sender: `${response.data.inverted ? "worker" : "user"}`,
        timestamp: new Date(),
        user_read: response.data.inverted ? false : true,
        visible: true,
        worker_read: response.data.inverted ? true : false,
      }

      await messagesRef
      .doc(`${message_id}`).set(newMessage)
      .catch((error) => {
        console.log("Error writing document: ", error);
      });


      dispatch(updateForwardMessage(null));
    }

    if(response.data.inverted) {
      navigation.navigate('MessagesConversationPage', {
        // id: data.id,
        user_id: worker_id,
        user_name: worker_name,
        userData: workerData,
        worker_id: user_id,
        worker_name: user_name,
        workerData: userData,
        avatar: userData.avatar,
        chat_id: chat_id,
        inverted: response.data.inverted,
      });

      dispatch(updateChatInfo(workerData, userData, response.data.inverted,));
      return
    }

    navigation.navigate('MessagesConversationPage', {
      // id: data.id,
      user_id: user_id,
      user_name: user_name,
      userData: userData,
      worker_id: worker_id,
      worker_name: worker_name,
      workerData: workerData,
      chat_id: chat_id,
      avatar: worker_photo,
      inverted: response.data.inverted,
    });

    dispatch(updateChatInfo(userData, workerData, response.data.inverted));
    setResetConversation();
    setMessageBell(0)
  }

  const hasUnread = (array) => {
    try {
      let sum = 0;
      for(let i = 0; i < array.length; i++) {
        if(array[i].worker_read === false) {
          sum += 1
        }
      }
      return sum
    }
    catch(error) { return }
  }

  const hasUnreadUser = (array) => {
    try {
      let sum = 0;
      for(let i = 0; i < array.length; i++) {
        if(array[i].user_read === false) {
          sum += 1
        }
      }
      return sum
    }
    catch(error) { return }
  }
  // ---------------------------------------------------------------------------
  return (
    <>
      <Container
        taskConditionIndex={1}
        onPress={handleMessageConversation}
      >
        <LeftMessageView>
            { workerData === undefined || workerData.avatar === null
              ? (
                <UserImageBackground>
                  <UserImage source={defaultAvatar}/>
                </UserImageBackground>

              )
              : (
                <UserImageBackground>
                  <UserImage source={{ uri: workerData.avatar.url }}/>
                </UserImageBackground>
              )
            }
        </LeftMessageView>

        <BodyView>
          <BodyWrapper>
            <MarginView04/>
            <TitleView>
              { userIsWorker
                ? (
                  <TitleText>
                    {workerData.user_name ? workerData.user_name : userData.user_name}
                  </TitleText>
                )
                : (
                  <TitleText>
                    {workerData.worker_name}
                  </TitleText>
                )
              }
            </TitleView>
            <MarginView02/>

            <LastMessageView
              // colors={['#eee', '#eee']}
              // start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }}
              // style={{ width: `${statusResult}%`}}
            >
              { lastMessage && (
                <LastMessageText numberOfLines={2}>{lastMessage}</LastMessageText>
              )}
            </LastMessageView>
            <MarginView04/>
          </BodyWrapper>
        </BodyView>

        <RightView>
          <MarginView02/>
          <LastMessageTimeView>
            { lastMessageTime
              ? (
                  <LastMessageTimeText
                    numberOfLines={2}
                  >
                    {lastMessageTime}
                  </LastMessageTimeText>
                )
              : null
            }
          </LastMessageTimeView>

          {(userIsWorker)
            ? ((hasUnread(messageBell) === 0)
              ? (
                null
              )
              : (
                <>
                  <MessageIcon name="message-square">
                    <UnreadMessageCountText>{hasUnread(messageBell)}</UnreadMessageCountText>
                  </MessageIcon>
                </>
              )
            )
            : ((hasUnreadUser(messageBell) === 0)
              ? (
                null
              )
              : (
                <>
                  <MessageIcon name="message-circle">
                    <UnreadMessageCountText>{hasUnreadUser(messageBell)}</UnreadMessageCountText>
                  </MessageIcon>
                </>
              )
            )
          }
          <MarginView02/>
        </RightView>
      </Container>
    </>
  )
}
