import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// -----------------------------------------------------------------------------
import {
  AddIcon,
  Container,
  Header, HeaderImage, HeaderTabView, HeaderTouchable,
  List,
  SearchBarTextInput, SpaceView,
  Title,
  UpperTabSelectedView, UpperTabSelectedText,
  UpperTabView, UpperTabText,
} from './styles'
import Contacts from '~/components/Contacts'
import logo from '~/assets/detective/detective_remake.png'
import api from '~/services/api';

export default function ContactsPage({ navigation }) {
  const contacts_update = useSelector( state => state.contact.profile)
  const [contacts, setContacts] = useState([]);
  const [inputState, setInputState] = useState('');
  const [listState, setListState] = useState(1);

  useEffect(() => {
    loadWorkers('');
  }, [contacts_update]);

  // function handleCreateContact() {
  //   navigation.navigate('ContactCreate')
  // }

  async function loadWorkers(input) {
    setInputState(input)
    const response = await api.get('/workers', {
      params: {
        nameFilter: `${input}`,
      }
    })
    setContacts(response.data)
    setListState(1);
  }

  function handleClubs() {
    // setListState(2);
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <Header>
       <SpaceView>
          <HeaderImage
            source={logo}
          />
        </SpaceView>

        <SearchBarTextInput
          placeholder='Search'
          onChangeText={(input) => loadWorkers(input)}
          returnKeyType='search'
          value={inputState}
        />
        <HeaderTouchable onPress={() => loadWorkers('')}>
          <AddIcon name='refresh-cw' size={20}/>
        </HeaderTouchable>
      </Header>
      { contacts == ''
        ? (
          <Title>Let's Search!</Title>
        )
        : (
          <List
            data={contacts}
            keyExtractor={item => String(item.email)}
            renderItem={({ item }) => (
              <Contacts
                key={item.email}
                data={item}
                navigation={navigation}
              />
              // <SafeAreaView
              //   key={item.phonenumber}
              //   data={item}
              // ><Text>{item.phonenumber}</Text></SafeAreaView>
            )}
          />
        )
      }
    </Container>
  )
}
