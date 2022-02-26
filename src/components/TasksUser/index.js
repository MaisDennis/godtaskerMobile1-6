/* eslint-disable react/prop-types */
import React, { useEffect, useState, useMemo } from 'react';
import { StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-native-modal';
import { format, parseISO } from 'date-fns';
import CheckBox from '@react-native-community/checkbox'; //https://github.com/react-native-checkbox/react-native-checkbox
import firestore from '@react-native-firebase/firestore';
import { enUS, pt} from 'date-fns/locale/pt';
// -----------------------------------------------------------------------------
import {
  AcceptButtonView,
  ButtonWrapper,
  AlignDetailsView, AlignCheckBoxView,
  BackButton,
  BodyView, BodyWrapper, ButtonView, BottomHeaderView,
  BellIcon, ButtonText,
  CenterView, CheckBoxView, Container,
  DescriptionView, DescriptionBorderView, DescriptionSpan,
  DatesAndButtonView, DueTimeView, DueTime,
  FormScrollView,
  HrLine,
  IconsView,
  Image, ImageView, ImageWrapper, InnerStatusView,
  Label, LabelInitiated, LabelEnded, LeftUserView,
  MarginView02, MarginView04, MarginView08, ModalView, ModalText,
  NameText,
  OuterStatusView,
  RightView,
  StartTimeView, StartTime,
  TagView, TitleView, TaskIcon, TitleIcon,
  TitleUserText, TitleTextModal, TaskAttributesView,
  ToText, ToWorkerView,
  UnreadMessageCountText, UserImage, UserImageBackground,
} from '../Tasks/styles';
import { updateTasks } from '~/store/modules/task/actions';
import { updateChatInfo } from '~/store/modules/message/actions';
import defaultAvatar from '~/assets/defaultAvatar.png';
import Button from '~/components/Button'
import ButtonForIcon from '~/components/ButtonForIcon'
import api from '~/services/api';
// -----------------------------------------------------------------------------
const taskAttributesArray = [ 'Low', 'Medium', 'High', '-']
const styles = StyleSheet.create({
  shadowProp: {
      shadowColor: '#666',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
})
const formattedDate = fdate =>
  fdate == null
    ? '-'
    : format(parseISO(fdate), "MMM'/'dd'/'yyyy", { locale: enUS });

const formattedDateTime = fdate =>
  fdate == null
    ? '-'
    : format(parseISO(fdate), "MMM'/'dd'/'yyyy HH:mm", { locale: enUS });

export default function TaskUser({ data, navigation, taskConditionIndex }) {
  // console.log(data)
  const dispatch = useDispatch();
  const updated_tasks = useSelector( state => state.task.tasks)

  const user_id = data.user.id;
  const worker_id = data.worker.id;

  const workerData = data.worker;
  const userData = data.user;
  const dueDate = parseISO(data.due_date);
  const endDate = parseISO(data.end_date);
  const subTasks = data.sub_task_list;
  const points = data.points;
  const subPoints = points - 100;
  const confirmPhoto = data.confirm_photo;

  const [toggleTask, setToggleTask] = useState();
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [toggleDeleteModal, setToggleDeleteModal] = useState();
  const [statusResult, setStatusResult] = useState(0);
  const [messageBell, setMessageBell] = useState();

  useEffect (() => {
    // handleStatus()
    handleMessageBell()
    setStatusResult(handleStatus())
    // console.log(data)

  //   fetch('https://extreme-ip-lookup.com/json/')
  //   .then( res => res.json())
  //   .then(response => {
  //    console.log("Country is : ", response);
  //  })
  //  .catch((data, status) => {
  //    console.log('Request failed:', data);
  //  });
  }, [ updated_tasks ])

  useMemo(() => {
    handleStatus()
  }, [updated_tasks]);

  async function handleMessageBell() {
    // const response = await api.get(`messages/${data.message_id}`)
    // setMessageBell(response.data.messages)

    const unsubscribe = firestore()
      .collection(`messages/task/${data.id}`)
      .orderBy('createdAt')
      .onSnapshot((querySnapshot) => {
        try {
          const data = querySnapshot.docs.map(d => ({
            ...d.data(),
          }));
          // console.log(data)
          // lastMessageRef.current.scrollToEnd({ animated: false })
          setMessageBell(data)
        }
        catch {
          console.log('Error from querySnapshot')
        }

      })
    return unsubscribe;

  }

  function handleStatus() {
    let weige = 0;
    subTasks.map(s => {
      if(s.complete === true) {
        weige = weige + s.weige_percentage
      }
    })
    return Math.round(weige);
  }

  const pastDueDate = () => {
    let flag = false;
    new Date() > dueDate ? flag = true : flag = false
    return flag
  }

  const endPastDueDate = () => {
    let flag = false;
    endDate > dueDate ? flag = true : flag = false
    return flag
  }

  async function updateBell(editedSubTaskList) {
    try {
      await api.put(`tasks/${data.id}`, {
        sub_task_list: editedSubTaskList
      })
    }
    catch(error) {
      console.log('error in put tasks/:id')
    }
  }

  function handleToggleTask() {
    setToggleTask(!toggleTask)
    if(hasUnread(data.sub_task_list) !== 0) {
      const editedSubTaskList = data.sub_task_list
      editedSubTaskList.map(e => {
        e.user_read = true
      })
      updateBell(editedSubTaskList)
    }
    return
  }

  async function handleMessageConversation() {
    setToggleTask(!toggleTask)
    const response = await api.get('/messages', {
      params: {
        user_id: user_id,
        worker_id: worker_id,
      },
    })
    const messageData = response.data
    // console.log(response.data)
    if(response.data.message === null) {
      const chat_id = Math.floor(Math.random() * 1000000)
      navigation.navigate('MessagesConversationPage', {
        // id: data.id,
        user_id: user_id,
        user_name: userData.user_name,
        userData: userData,
        worker_id: worker_id,
        worker_name: workerData.worker_name,
        workerData: workerData,
        chat_id: chat_id,
        avatar: workerData.avatar,
        first_message: true,
      });
      dispatch(updateChatInfo(userData, workerData));
      return
    }

    navigation.navigate('MessagesConversationPage', {
      // id: data.id,
      user_id: userData.id,
      user_name: userData.user_name,
      userData: userData,
      worker_id: workerData.id,
      worker_name: workerData.worker_name,
      workerData: workerData,
      avatar: workerData.avatar,
      chat_id: response.data.message.chat_id,
      inverted: response.data.inverted,
    });
    dispatch(updateChatInfo(userData, workerData));
  }

  function handleEditTask() {
    setToggleTask(!toggleTask)
    navigation.navigate('TaskEdit', {
      id: data.id,
      name: data.name,
      description: data.description,
      sub_task_list: data.sub_task_list,
      task_attributes: data.task_attributes,
      start_date: data.start_date,
      due_date: data.due_date,
      worker: data.worker,
    });
  }

  function handleReviveTask() {
    api.put(`tasks/${data.id}/revive`, {
      status: {
        "status": 1,
        "comment": `Task Revived: ${data.name}`,
      }
    });
    setToggleTask(!toggleTask)
    dispatch(updateTasks(new Date()));
  }

  function handleCancelTask() {
    // api.delete(`tasks/${data.id}`);
    api.put(`tasks/${data.id}/cancel`, {
      status: {
        "status": 3,
        "comment": `Task Canceled: ${data.name}`,
      }
    })
    setToggleTask(!toggleTask)
    dispatch(updateTasks(new Date()));
  }

  function handleToggleDeleteModal() {
    console.log(`Why`)
    setToggleDeleteModal(!toggleDeleteModal)
  }

  function handleDeleteTask() {
    api.delete(`tasks/${data.id}`);
    setToggleTask(!toggleTask)
    dispatch(updateTasks(new Date()));
  }

  function handleScoreTask() {
    setToggleTask(!toggleTask)
  }

  const hasUnread = (array) => {
    try {
      let sum = 0;
      for(let i = 0; i < array.length; i++) {
        if(array[i].user_read === false) {
          sum += 1
        }
      }
      return sum
    } catch(error) {
      return
    }
  }
  // -----------------------------------------------------------------------------
  return (
    <Container
      taskConditionIndex={taskConditionIndex}
      onPress={handleToggleTask}
      >
      <LeftUserView>
        { workerData === undefined || workerData.avatar === null
          ? (
            <UserImage source={defaultAvatar}/>
          )
          : (
            <UserImageBackground>
              <UserImage source={{ uri: workerData.avatar.url }}/>
            </UserImageBackground>
          )
        }
      </LeftUserView>

      <BodyView>
        <BodyWrapper>
          <MarginView04/>
          <TitleView>
            <TitleUserText numberOfLines={2}>{data.name}</TitleUserText>
          </TitleView>
          <MarginView04/>

          <ToWorkerView>
            <TitleIcon name="coffee"/>
            <ToText numberOfLines={1}>{data.user.user_name}</ToText>
            <TitleIcon name="briefcase"/>
            <NameText numberOfLines={1}>{data.worker.worker_name}</NameText>
          </ToWorkerView>

          <DatesAndButtonView>
            <TagView>
              { data.initiated_at
                ? (
                  <LabelInitiated>Started</LabelInitiated>
                )
                : (
                  <Label>Sent</Label>
                )
              }
            </TagView>
            <TagView>
              { data.end_date
                ? (
                  <>
                    <LabelEnded pastDueDate={pastDueDate()}>Ended:</LabelEnded>
                    <DueTimeView pastDueDate={endPastDueDate()}>
                      <DueTime>{formattedDate(data.end_date)}</DueTime>
                    </DueTimeView>
                  </>
                )
                : (
                  <>
                    <Label>Due:</Label>
                    <DueTimeView pastDueDate={pastDueDate()}>
                      <DueTime>{formattedDate(data.due_date)}</DueTime>
                    </DueTimeView>
                  </>
                )
              }
            </TagView>
          </DatesAndButtonView>

          <BottomHeaderView>
            <OuterStatusView>
              <InnerStatusView
                statusResult={statusResult}
                colors={['#ffdd33', '#ff892e']}
                start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }}
                style={{ width: `${statusResult}%`}}
              ></InnerStatusView>
            </OuterStatusView>
            {/* <StartTime>{statusResult}%</StartTime> */}
            <StartTime>{Math.round(statusResult*(subPoints)/100)+100}/{points}</StartTime>
          </BottomHeaderView>
          <MarginView04/>
        </BodyWrapper>
      </BodyView>

      <RightView>
        { (hasUnread(data.sub_task_list) === 0)
          ? (
            null
          )
          : (
            <BellIcon name="bell">
              <UnreadMessageCountText>{hasUnread(data.sub_task_list)}</UnreadMessageCountText>
            </BellIcon>
          )
        }
        { (hasUnread(messageBell) === 0)
          ? (
            null
          )
          : (
            <BellIcon name="message-square">
              <UnreadMessageCountText>{hasUnread(messageBell)}</UnreadMessageCountText>
            </BellIcon>
          )
        }
      </RightView>
{/* ------------------------------------------------------------------------ */}
      <Modal isVisible={toggleTask}>
        {/* <ModalView> */}
          <FormScrollView>

            <MarginView08/>
            <CenterView>
              <TitleIcon name="clipboard"/>
              <TitleTextModal>{data.name}</TitleTextModal>
            </CenterView>
            <MarginView08/>

            <DescriptionView>
              <Label>Sub-items</Label>
              <MarginView04/>
              { data.sub_task_list.map((s, index) => (
                <AlignCheckBoxView key={index}>
                  <CheckBoxView>
                      <CheckBox
                        disabled={true}
                        value={s.complete}
                      />
                      <DescriptionSpan>{s.weige_percentage}%</DescriptionSpan>
                      <DescriptionSpan type="check-box">{s.description}</DescriptionSpan>
                  </CheckBoxView>
                </AlignCheckBoxView>
              ))}
            </DescriptionView>
            {/* ----------- */}
            <MarginView04/>
            <HrLine/>
            <MarginView04/>
            {/* ----------- */}
            <AlignDetailsView>
              <TagView>
                <Label>Start Date:</Label>
                { data.initiated_at
                  ? (
                    <>
                      <StartTimeView>
                        <StartTime>{formattedDate(data.initiated_at)}</StartTime>
                      </StartTimeView>
                    </>
                  )
                  : (
                    <>

                      <StartTimeView initiated={data.initiated_at}>
                        <StartTime>{formattedDate(data.start_date)}</StartTime>
                      </StartTimeView>
                    </>
                  )
                }
              </TagView>
              <TagView>
                <Label>Due Date & Time:</Label>
                { data.end_date !== null
                  ? (
                    <DueTimeView style={{backgroundColor:'#f5f5f5'}}>
                      <DueTime>{formattedDateTime(data.due_date)}</DueTime>
                    </DueTimeView>
                  )
                  : (
                    <DueTimeView pastDueDate={pastDueDate()}>
                      <DueTime>{formattedDateTime(data.due_date)}</DueTime>
                    </DueTimeView>
                  )
                }
              </TagView>
              { data.end_date !== null &&
                (
                  <TagView>
                    <Label>Ending Time:</Label>
                    <DueTimeView pastDueDate={endPastDueDate()}>
                      <DueTime>{formattedDateTime(data.end_date)}</DueTime>
                    </DueTimeView>
                  </TagView>
                )
              }
              <TagView>
                <Label>Priority:</Label>
                <TaskAttributesView taskAttributes={data.task_attributes[0]-1}>
                  <DueTime>{taskAttributesArray[JSON.stringify(data.task_attributes[0]-1)]}</DueTime>
                </TaskAttributesView>
              </TagView>
              <TagView>
                <Label>Confirmation with photograph?</Label>
                { confirmPhoto
                  ? (
                    <ToText>Yes</ToText>
                  )
                  : (
                    <ToText>No</ToText>
                  )

                }
              </TagView>
            </AlignDetailsView>
            {/* ----------- */}
            <MarginView04/>
            <HrLine/>
            <MarginView04/>
            {/* ----------- */}
            { data.description
              ? (
                <>
                  <DescriptionView>
                    <Label>Comments:</Label>
                      <DescriptionSpan>{data.description}</DescriptionSpan>
                  </DescriptionView>
                  {/* ----------- */}
                  <MarginView04/>
                  <HrLine/>
                  <MarginView04/>
                  {/* ----------- */}
                </>
              )
              : null
            }
            <>

              <IconsView>
                <ButtonForIcon onPress={handleMessageConversation}>
                  <TaskIcon name="message-square"/>
                </ButtonForIcon>
                { taskConditionIndex === 1
                  ? (
                    <ButtonForIcon onPress={handleEditTask}>
                      <TaskIcon name="edit"/>
                    </ButtonForIcon>
                  )
                  : (
                    null
                  )
                }
                { taskConditionIndex === 2
                  ? (
                    <ButtonForIcon onPress={handleToggleDeleteModal}>
                      <TaskIcon name="trash-2" />
                    </ButtonForIcon>
                  )
                  : (
                    null
                  )
                }
                { taskConditionIndex === 3
                  ? (
                    <ButtonForIcon onPress={handleReviveTask}>
                      <TaskIcon name="activity"/>
                    </ButtonForIcon>
                  )
                  : (
                    null
                  )
                }
                { taskConditionIndex === 1
                  ? (
                    <ButtonForIcon onPress={handleCancelTask}>
                      <TaskIcon name="x-octagon"/>
                    </ButtonForIcon>
                  )
                  : (
                    null
                  )
                }
                { taskConditionIndex === 3
                  ? (
                    <ButtonForIcon onPress={handleToggleDeleteModal}>
                      <TaskIcon
                        name="trash-2"
                      />
                    </ButtonForIcon>
                  )
                  : (
                    null
                  )
                }
              </IconsView>
            </>
            {/* ----------- */}
            <MarginView04/>
            <HrLine/>
            <MarginView04/>
            {/* ----------- */}
            { data.signature &&
              <>
                <ImageWrapper>
                  <Label>Confirmation Photo:</Label>
                  <MarginView04/>
                  <ImageView>
                    <Image source={{ uri: data.signature.url }}/>
                  </ImageView>
                </ImageWrapper>
                {/* ----------- */}
                <MarginView04/>
                <HrLine/>
                <MarginView04/>
                {/* ----------- */}
              </>
            }
            <MarginView04/>
            <DescriptionView>
                <Button
                  small={true}
                  onPress={handleToggleTask}
                >
                  Back
                </Button>
            </DescriptionView>
            <MarginView08/>
          </FormScrollView>
        {/* </ModalView> */}
        <Modal isVisible={toggleDeleteModal}>
          <ModalView>
            <MarginView08/>
            <AcceptButtonView>
              <ModalText>Permanently delete this task?</ModalText>
              <MarginView04/>
              <ButtonWrapper>
                <Button type={'submit'} small={true} onPress={handleDeleteTask}>
                  Yes
                </Button>
                <Button type={'inverted'} small={true} onPress={() => setToggleDeleteModal(!toggleDeleteModal)}>
                  Back
                </Button>
              </ButtonWrapper>
            </AcceptButtonView>
            <MarginView08/>
            <MarginView04/>
          </ModalView>
        </Modal>
      </Modal>
    </Container>
  );
}
