import React, { useState, useEffect } from 'react'
// import { DatePickerModal } from 'react-native-paper-dates';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, StyleSheet } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import Modal from 'react-native-modal';
import { parseISO, isBefore , isSameHour, subHours, addMinutes, format } from 'date-fns';
// -----------------------------------------------------------------------------
import {
  AlignCheckBoxView,
  CheckBoxWrapper, CheckBoxView, Container,
  DateOptionsView, DateOptions, DescriptionSpan,
  FormScrollView,
  HrLine,
  Input, IosKeyboardAvoidingView, ItemWrapperView,
  LabelText,
  MarginView02, MarginView04, MarginView08, ModalView,
  RadioButtonView, RadioButtonTag, RadioButtonTagConfirmPhoto,
  RadioButtonLabel, RadioButtonOuter, RadioButtonInner0,
  RadioButtonInner1, RadioButtonInner2, RadioButtonInner3,
  RadioButtonInner4, RadioButtonLabelText,
  SubTaskButton, SubTaskButtonView, SubTaskCancelIcon,
  SubTaskEditIcon, SubTaskInput, SubTaskLabelText,
  SubTaskLeftView, SubTaskRightView,
  SubTaskTag, SubTaskText,
  SubTaskWeigeText, SubTaskWrapper, SubTaskView,
  WeigeView, WeigeTagView, WeigeText,
} from './styles'
import NumberInput from '~/components/NumberInput'
import { updateTasks } from '~/store/modules/task/actions';
import api from '~/services/api';
import Button from '~/components/Button';
// -----------------------------------------------------------------------------
export default function TaskCreatePage({ navigation }) {
  const dispatch = useDispatch();
  const userId = useSelector( state => state.user.profile.id)

  const [name, setName] = useState("");
  const [description, setDescription] = useState();
  const [prior, setPrior] = useState(4);
  const [confirmPhoto, setConfirmPhoto] = useState(1);
  const [startDate, setStartDate] = useState(new Date());
  const [dueDate, setDueDate] = useState(new Date());
  const [contacts, setContacts] = useState([]);
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [toggleModal, setToggleModal] = useState(false);
  const [toggleDates, setToggleDates] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [subTaskList, setSubTaskList] = useState([]);
  const [editSubTaskIndex, setEditSubTaskIndex] = useState();
  const [addSubTaskInputValue, setAddSubTaskInputValue] = useState();
  const [addWeigeInputValue, setAddWeigeInputValue] = useState(1);
  const [editSubTaskInputValue, setEditSubTaskInputValue] = useState();
  const [editWeigeInputValue, setEditWeigeInputValue] = useState(1);
  const [subTaskToggleEdit, setSubTaskToggleEdit] = useState(false);
  const [date, setDate] = useState();
  const [open, setOpen] = useState(false);
  const [sameHourCheck, setSameHourCheck] = useState(false)
  const [urgent, setUrgent] = useState(4); // leave for now to not have error upon submit
  const [complex, setComplex] = useState(4); // leave for now to not have error upon submit

  // functions for Date Picker
  const onDismissSingle = React.useCallback(() => {
    setOpen(false);
  }, [setOpen]);

  const onConfirmSingle = React.useCallback(
    (params) => {
      setOpen(false);
      setDate(params.date);
    },
    [setOpen, setDate]
  );

  useEffect(() => {
    loadContacts(userId);
  }, [ userId ])

  async function loadContacts(userID) {
    const response = await api.get(`/users/${userID}/following`, {
      params: {
        nameFilter: ``,
      }
    })

    const checkedList = response.data
    checkedList.forEach(c => {
      c.checked = false;
    });
    setContacts(checkedList)
  }

  let editedWorkers = [];
  async function handletoggleCheckBox(value, position) {
    setToggleCheckBox(!toggleCheckBox) // this distoggles the checkbox
    editedWorkers = contacts;
    const editedWorker = editedWorkers.find(
      (e, index) => index === position
    );
    editedWorker.checked = value;
    editedWorkers[position] = editedWorker;
    setContacts(editedWorkers);
    return
  }

  function handleToggleModal() {
    setToggleModal(!toggleModal)
  }

  function handleToggleDates() {
    setToggleDates(!toggleDates)
  }

  function handleAddSubTask() {
    if (addSubTaskInputValue === undefined) return;

    let editedSubTaskList = subTaskList
    const sub_task_id = Math.floor(Math.random() * 1000000)
    editedSubTaskList.push({
      id: sub_task_id,
      description: addSubTaskInputValue,
      weige: addWeigeInputValue,
      complete: false,
      user_read: true,
      worker_read: false,
    })
    setSubTaskList(editedSubTaskList);
    setAddSubTaskInputValue();
    // navigation.navigate('TaskCreate');
    // dispatch(updateTasks(new Date()))
  }

  function handleOpenEditSubTask(position) {
    setEditSubTaskIndex(position)
    setSubTaskToggleEdit(!subTaskToggleEdit)
    setEditSubTaskInputValue(subTaskList[position].description)
    setEditWeigeInputValue(subTaskList[position].weige)
  }

  function handleEditSubTask(position) {
    let editedSubTaskList = subTaskList.map((s, index) => {
      if (index === position) {
        s.description = editSubTaskInputValue;
        s.weige = editWeigeInputValue;
      }
      return s;
    })
    setSubTaskList(editedSubTaskList)
    setEditSubTaskIndex(null);
    setSubTaskToggleEdit(false);
  }

  function handleDeleteSubTask(position) {
    let editedSubTaskList = subTaskList;
    editedSubTaskList.splice(position, 1);
    setSubTaskList(editedSubTaskList);
  }

  function weigeToPercentage(subTasks) {
    let weigeSum = 0;
    for(let i = 0; i < subTasks.length; i++) {
      weigeSum += parseFloat(subTasks[i].weige)
    }

    for(let i = 0; i < subTasks.length; i++) {
      subTasks[i].weige_percentage = (
        Math.round((parseFloat(subTasks[i].weige) / weigeSum)*1000)/10
      )
    }
    return weigeSum;
  }

  async function createTasks(c) {
    weigeToPercentage(subTaskList)
    let subTaskCount = subTaskList.length
    let pointsVariable = 100
    if (subTaskCount >= 6 ) {
      pointsVariable = pointsVariable + 100
    } else if (subTaskCount > 0 && subTaskCount <= 5) {
      pointsVariable = pointsVariable + (subTaskCount * 20)
    }

    await api.post('/tasks', [
      {
        name: name,
        description: description,
        sub_task_list: subTaskList,
        task_attributes: [prior, urgent, complex],
        status: {
          "status": 1,
          "comment": new Date(),
        },
        points: pointsVariable,
        confirm_photo: confirmPhoto,
        start_date: startDate,
        due_date: dueDate,
        messaged_at: new Date(),
        workeremail: c.email,
      }, userId
    ]);
    dispatch(updateTasks(new Date()))
  }

  function handleSubmit() {
    let countChecked = 0;
    contacts.map(c => {
      if(c.checked == true) {
        countChecked += 1
      }
    })
    if (countChecked === 0) {
      Alert.alert(
        'Please choose a person',
        'Use the "Following List" button and select who(m) the task will be sent to',
        [{ style: "default" }],
        { cancelable: true },
      );
      return
    }
    if (name === '') {
      Alert.alert(
        'Please insert a Title',
        '',
        [{ style: "default" }],
        { cancelable: true },
      )
      return
    }
    if (isBefore(startDate, subHours(new Date(), 1))) {
      Alert.alert(
        'Start Date is in the past',
        'Start Date cannot be set before 1 hour prior to now',
        [{ style: "default" }],
        { cancelable: true },
      )
      return
    }
    if (isBefore(dueDate, startDate)) {
      Alert.alert(
        'Due Date is before Start Date',
        'The Due Date & Time must be set after the Start Date & Time',
        [{ style: "default" }],
        { cancelable: true },
      )
      return
    }
    if (!sameHourCheck && isSameHour(dueDate, new Date())) {
      Alert.alert(
        'Due Date is set within the next hour',
        'Are you sure this is OK?',
        [{ style: "default" }],
        { cancelable: true },
      )
      setSameHourCheck(true)
      return
    }

    try {
      contacts.map(c => {
        if(c.checked == true) {
          createTasks(c)
          return c;
        }
      })
      Alert.alert(
        'Success!',
        'Task Registered',
        [{ style: "default" }],
        { cancelable: true },
      )
    } catch(error) {
      setSubmitError(true)
      Alert.alert(
        'Error: Task not registered',
        'Please try again',
        [{ style: "default" }],
        { cancelable: true },
      )
    }
    navigation.goBack()
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <IosKeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        keyboardVerticalOffset = {Platform.OS === "ios" ? "70" : null}
      >
        <FormScrollView contentContainerStyle={{ alignItems: 'center'}}>
          <MarginView08/>
          <ItemWrapperView>
            <LabelText>Title:</LabelText>
            <MarginView04/>
            <Input
              enablesReturnKeyAutomatically
              multiline
              value={name}
              onChangeText={setName}
              placeholder="Wash the car"
            />
          </ItemWrapperView>
          <MarginView08/>
          <ItemWrapperView>
            <LabelText>Send to:</LabelText>
            <MarginView04/>
            <Button text={'secondary'} onPress={handleToggleModal}>
              Following List
            </Button>
          </ItemWrapperView>
          <MarginView08/>
          <ItemWrapperView>
            <LabelText>Sub-item:</LabelText>
            <MarginView04/>
            <SubTaskView>
                <SubTaskInput
                  enablesReturnKeyAutomatically
                  multiline
                  numberOfLines={6}
                  onChangeText={setAddSubTaskInputValue}
                  placeholder="1. Use soap..."
                  textBreakStrategy="highQuality"
                  value={addSubTaskInputValue}
                />
                <MarginView08/>
                <WeigeView>
                  <WeigeText>Sub-item weige:</WeigeText>
                  <NumberInput
                    numberInputValue={addWeigeInputValue}
                    setNumberInputValue={setAddWeigeInputValue}
                  />
                </WeigeView>
                <MarginView08/>
                <WeigeView>
                  <Button small={true} text={'secondary'} onPress={handleAddSubTask}>Add sub-item</Button>
                </WeigeView>
            </SubTaskView>
          </ItemWrapperView>
          <MarginView08/>

          <ItemWrapperView>
            {subTaskList != ''
              ? (
                <>
                  <LabelText>Sub-item List:</LabelText>
                  <MarginView04/>
                </>
              )
              : null
            }
            { subTaskList.map((s, index) => (
              <SubTaskView key={index}>
                {
                  subTaskToggleEdit && (editSubTaskIndex === index)
                  ? (
                    <>
                      <SubTaskWrapper>
                        <SubTaskLeftView>
                          <SubTaskTag>
                            <SubTaskLabelText>{index+1}.</SubTaskLabelText>
                            <SubTaskText>{s.description}</SubTaskText>
                          </SubTaskTag>
                        </SubTaskLeftView>

                        <SubTaskRightView>
                          <SubTaskButtonView>
                            <SubTaskButton onPress={() => handleEditSubTask(index)}>
                              <SubTaskEditIcon name="edit-2"/>
                            </SubTaskButton>
                            <SubTaskButton onPress={() => handleDeleteSubTask(index)}>
                              <SubTaskCancelIcon name="x-circle"/>
                            </SubTaskButton>
                          </SubTaskButtonView>
                          <SubTaskTag>
                            <WeigeTagView>
                              <WeigeText>Weige:</WeigeText>
                              <SubTaskWeigeText>{s.weige}</SubTaskWeigeText>
                            </WeigeTagView>
                          </SubTaskTag>
                        </SubTaskRightView>
                      </SubTaskWrapper>

                      <SubTaskInput
                        enablesReturnKeyAutomatically
                        multiline
                        numberOfLines={1}
                        onChangeText={setEditSubTaskInputValue}
                        value={editSubTaskInputValue}
                      />
                      <WeigeView>
                        <WeigeText>Sub-item weige:</WeigeText>
                        <NumberInput
                          numberInputValue={editWeigeInputValue}
                          setNumberInputValue={setEditWeigeInputValue}
                        />
                      </WeigeView>
                      {/* ----------- */}
                      <MarginView04/>
                      <HrLine/>
                      <MarginView04/>
                      {/* ----------- */}
                    </>
                  )
                  : (
                    <>
                      <SubTaskWrapper>

                        <SubTaskLeftView>
                          <SubTaskTag>
                            <SubTaskLabelText>{index+1}.</SubTaskLabelText>
                            <SubTaskText>{s.description}</SubTaskText>
                          </SubTaskTag>
                        </SubTaskLeftView>

                        <SubTaskRightView>
                          <SubTaskButtonView>
                            <SubTaskButton onPress={() => handleOpenEditSubTask(index)}>
                              <SubTaskEditIcon name="edit-2"/>
                            </SubTaskButton>
                            <SubTaskButton onPress={() => handleDeleteSubTask(index)}>
                              <SubTaskCancelIcon name="x-circle"/>
                            </SubTaskButton>
                          </SubTaskButtonView>
                          <SubTaskTag>
                            <WeigeTagView>
                              <WeigeText>Weige:</WeigeText>
                              <SubTaskWeigeText>{s.weige}</SubTaskWeigeText>
                            </WeigeTagView>
                          </SubTaskTag>
                        </SubTaskRightView>
                      </SubTaskWrapper>
                      {/* ----------- */}
                      <MarginView04/>
                      <HrLine/>
                      <MarginView04/>
                      {/* ----------- */}
                    </>
                  )
                }
              </SubTaskView>
            ))}

          </ItemWrapperView>
          <MarginView08/>
          <ItemWrapperView>
            <LabelText>Start & Due Dates:</LabelText>
            <MarginView04/>
            <WeigeView>
                <Button
                  onPress={handleToggleDates}
                  text={'secondary'}
                  uppercase={false}
                  mode="outlined"
                >
                  Pick Dates
                </Button>
            </WeigeView>
          </ItemWrapperView>
          <MarginView08/>
          <ItemWrapperView>
            <LabelText>Priority:</LabelText>
            <MarginView04/>
            <RadioButtonView>
              <RadioButtonTag onPress={() => setPrior(1)}>
                <RadioButtonLabel>Low</RadioButtonLabel>
                <RadioButtonOuter>
                  <RadioButtonInner1 switch={prior}/>
                </RadioButtonOuter>
              </RadioButtonTag>
              <RadioButtonTag onPress={() => setPrior(2)}>
                <RadioButtonLabel>Medium</RadioButtonLabel>
                <RadioButtonOuter>
                  <RadioButtonInner2 switch={prior}/>
                </RadioButtonOuter>
              </RadioButtonTag>
              <RadioButtonTag onPress={() => setPrior(3)}>
                <RadioButtonLabel>High</RadioButtonLabel>
                <RadioButtonOuter>
                  <RadioButtonInner3 switch={prior}/>
                </RadioButtonOuter>
              </RadioButtonTag>
              <RadioButtonTag onPress={() => setPrior(4)}>
                <RadioButtonLabel>n/a</RadioButtonLabel>
                <RadioButtonOuter>
                  <RadioButtonInner4 switch={prior}/>
                </RadioButtonOuter>
              </RadioButtonTag>
            </RadioButtonView>
          </ItemWrapperView>
          <MarginView08/>
          <ItemWrapperView>
            <RadioButtonLabelText>Confirm with photo?</RadioButtonLabelText>
            <MarginView04/>
            <RadioButtonView>
              <RadioButtonTagConfirmPhoto onPress={() => setConfirmPhoto(1)}>
                <RadioButtonLabel>Yes</RadioButtonLabel>
                <RadioButtonOuter>
                  <RadioButtonInner1 switch={confirmPhoto}/>
                </RadioButtonOuter>
              </RadioButtonTagConfirmPhoto>
              <RadioButtonTagConfirmPhoto onPress={() => setConfirmPhoto(0)}>
                <RadioButtonLabel>No</RadioButtonLabel>
                <RadioButtonOuter>
                  <RadioButtonInner0 switch={confirmPhoto}/>
                </RadioButtonOuter>
              </RadioButtonTagConfirmPhoto>
            </RadioButtonView>
          </ItemWrapperView>
          <MarginView08/>
          <ItemWrapperView>
            <LabelText>Other Comments:</LabelText>
            <MarginView04/>
            <Input
              enablesReturnKeyAutomatically
              multiline
              numberOfLines={4}
              onChangeText={setDescription}
              placeholder="Don't forget to wax"
              value={description}
            />
          </ItemWrapperView>
          <MarginView04/>
          {/* ----------- */}
          <MarginView04/>
          <HrLine/>
          <MarginView04/>
          {/* ----------- */}

          <ItemWrapperView>
            <Button type={'submit'} onPress={handleSubmit}>
              Send
            </Button>
          </ItemWrapperView>
          <MarginView08/>
          <MarginView08/>
          <MarginView08/>

          <Modal isVisible={toggleDates}>
            <ModalView>
              <CheckBoxWrapper>
              <MarginView04/>
              <LabelText>Start Date:</LabelText>
              <MarginView04/>
              <DateOptionsView>
                <DateOptions
                  mode={'datetime'}
                  date={startDate}
                  onDateChange={setStartDate}
                  locale='en'
                  // is24hourSource='locale'
                  androidVariant="nativeAndroid"
                  textColor="#1B2432"
                  textSize="20"
                  minimumDate={new Date()}
                />
              </DateOptionsView>
              <MarginView08/>
              <LabelText>Due Date:</LabelText>
              <MarginView04/>
              <DateOptionsView>
                <DateOptions
                  date={dueDate}
                  onDateChange={setDueDate}
                  locale='en'
                  // is24hourSource='locale'
                  androidVariant="nativeAndroid"
                  textColor="#1B2432"
                  textSize="20"
                  minimumDate={new Date()}
                />
              </DateOptionsView>
              <MarginView04/>
              {/* ----------- */}
              <MarginView04/>
              <HrLine/>
              <MarginView04/>
              {/* ----------- */}
              <Button onPress={handleToggleDates}>
                OK
              </Button>
              <MarginView04/>
              </CheckBoxWrapper>
            </ModalView>
          </Modal>


          <Modal isVisible={toggleModal}>
            { submitError
              ? (
                <ModalView>
                  {/* <Text>Error</Text> */}
                </ModalView>
              )
              : (
                <ModalView>
                  <CheckBoxWrapper>
                    <MarginView04/>
                    <LabelText>Following List:</LabelText>
                    <MarginView04/>
                    { contacts.map((c, index) => (
                      <AlignCheckBoxView key={index}>
                        <CheckBoxView>
                          <CheckBox
                            disabled={false}
                            // value={editedWorkers[index]}
                            value={c.checked}
                            onValueChange={
                              (newValue) => handletoggleCheckBox(newValue, index)
                            }
                          />
                          <DescriptionSpan type="check-box">{c.worker_name}</DescriptionSpan>
                        </CheckBoxView>
                      </AlignCheckBoxView>
                    ))}
                    {/* ----------- */}
                    <MarginView04/>
                    <HrLine/>
                    <MarginView04/>
                    {/* ----------- */}
                    <Button onPress={handleToggleModal}>
                      OK
                    </Button>
                    <MarginView04/>
                  </CheckBoxWrapper>
                </ModalView>
              )
            }
          </Modal>
        </FormScrollView>
      </IosKeyboardAvoidingView>
    </Container>
  )
}
