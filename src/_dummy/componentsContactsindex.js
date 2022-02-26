import React, {  useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { TouchableOpacity, Text } from 'react-native'
// -----------------------------------------------------------------------------
import {
  Body, ButtonsView, BottomTabView, ButtonsText,
  Container, ContactText, ContactsIcon,
  Image, ImageBackgroundView,
  OthersView,
  TabView,
  TextBio, TextFirstName, TextFollowedBy,
  TextLastName, TextNameView, TextWorkerName, TextView,
  UserInfoView,
} from './styles'
import { updateContacts } from '~/store/modules/contact/actions';
import api from '~/services/api';


export default function Contacts({ navigation, data }) {
  const userId = useSelector( state => state.user.profile.id)
  const [toggleContact, setToggleContact] = useState();
  const [workerData, setWorkerData] = useState();
  const dispatch = useDispatch();

  useEffect(() => {
    getPhoto(data.phonenumber)
  }, [updateContacts])

  async function getPhoto(phonenumber) {
    const worker = await api.get('workers/individual', {
      params: {phonenumber: phonenumber},
    })
    setWorkerData(worker.data)
    return worker
  }

  function handleToggleContact() {
    setToggleContact(!toggleContact)
  }

  function handleContactTasks() {
    navigation.navigate('ContactTasks', {
      id: data.worker_id,
      first_name: data.first_name,
      last_name: data.last_name,
      worker_name: data.worker_name,
      department: data.department,
      phonenumber: data.phonenumber,
    })
    setToggleContact(false)
  }

  function handleEditContact() {
    navigation.navigate('ContactEdit', {
      id: data.worker_id,
      first_name: data.first_name,
      last_name: data.last_name,
      worker_name: data.worker_name,
      department: data.department,
      phonenumber: data.phonenumber,
    });
    setToggleContact(false)
  }

  async function handleRemoveContact() {
    const phonenumber = data.phonenumber
    // console.log(phonenumber)
    await api.put(`/users/${userId}/remove-contact`, {
      phonenumber: phonenumber,
    })
    dispatch(updateContacts(new Date()))
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      {/* <TouchableOpacity onPress={handleToggleContact}> */}
      <Body>
        <UserInfoView>
          { workerData === undefined || workerData.avatar === null
                    ? (
                      <ImageBackgroundView>
                        <Image/>
                      </ImageBackgroundView>
                    )
                    : (
                      <ImageBackgroundView>
                        <Image source={{ uri: workerData.avatar.url }}/>
                      </ImageBackgroundView>
                    )
                  }
          <TextView>
            <TextWorkerName>{data.worker_name}</TextWorkerName>
            <TextNameView>
              <TextFirstName>{data.first_name}</TextFirstName>
              <TextLastName>{data.last_name}</TextLastName>
            </TextNameView>
            <TextBio
              numberOfLines={1}
            >Accountant, Tax Specialist, humanitarian movement coordinator</TextBio>
            <TextFollowedBy>Followed by nina_ + 5 more</TextFollowedBy>
          </TextView>

        </UserInfoView>
      {/* <OthersView>
        { !toggleContact &&
          <ContactsIcon name="more-horizontal"/>
        }

      </OthersView> */}
      </Body>
      {/* </TouchableOpacity> */}
      { toggleContact && (
        <BottomTabView>
          <TabView/>
          <ButtonsView>
            <TouchableOpacity key={`1`} onPress={handleContactTasks}>
              <ButtonsText>tarefas</ButtonsText>
            </TouchableOpacity>
            <TouchableOpacity key={`2`} onPress={handleEditContact}>
              <ButtonsText>editar</ButtonsText>
            </TouchableOpacity>
            <TouchableOpacity key={`3`} onPress={handleRemoveContact}>
              <ButtonsText>remover</ButtonsText>
            </TouchableOpacity>
          </ButtonsView>
        </BottomTabView>
      )

      }

    </Container>
  )
}
