import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { View, Text, Image, Linking, TextInput, KeyboardAvoidingView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
// import whatsappIcon from '../../assets/whatsapplogo3.png';

// -----------------------------------------------------------------------------
import api from '~/services/api';
// import {
//   Container, Form, TitleView, TaskName, TaskDescriptionView,
//   TaskDescriptionText, FormInput, SubmitButton, SubmitButtonText, WhatsappButton,
//   WhatsappImage, WhatsappLabelText, List,
// } from './styles';
// -----------------------------------------------------------------------------
export default function Message({ navigation, route }) {
  const idRef = useRef();
  const [content, setContent] = useState('');
  const id = useSelector(state => state.worker.workerData.id);
  const worker_name = useSelector( state => state.worker.workerData.name)
  const userId = useSelector( state => state.worker.workerData.user_id)
  const { task_id, user_id, taskName, taskDescription, taskUserPhonenumber } = route.params;

  async function handleMessage() {
    await api.post(`messages/mobile/${task_id}`, {
      worker_id: id,
      worker_name,
      user_id,
      message_worker: content,
    });
    navigation.navigate('Dashboard');
  }

  function handleLinkToWhatsapp() {
    // console.tron.log(taskUserPhonenumber)
    content
    ? Linking.openURL(`whatsapp://send?text=${content}&phone=55${taskUserPhonenumber}`)
    : Linking.openURL(`whatsapp://send?phone=55${taskUserPhonenumber}`)
  }
  // -----------------------------------------------------------------------------
  return (
    <>
      <Container>

          <TitleView>
            <Icon name="clipboard" size={20} style={{ color: '#222'}}/>
            <TaskName>{taskName}</TaskName>
          </TitleView>

          <Form>
            <TaskDescriptionView>
              <TaskDescriptionText>
                {taskDescription}
              </TaskDescriptionText>
            </TaskDescriptionView>
            <FormInput
              icon="edit-3"
              keyboardType="default"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="Mensagem aqui."
              placeholderTextColor="#c8c2c0"
              multiline
              ref={idRef}
              returnKeyType="send"
              value={content}
              onChangeText={setContent}
            />
            <SubmitButton onPress={handleMessage}>
              <SubmitButtonText>Enviar</SubmitButtonText>
              {/* <Icon name='mail' size={20} color='#fff'/> */}
            </SubmitButton>
            <WhatsappLabelText>Ou entrar em contato pelo Whatsapp:</WhatsappLabelText>
            <WhatsappButton onPress={handleLinkToWhatsapp}>
              <WhatsappImage source={whatsappIcon} color='#fff'/>
            </WhatsappButton>
          </Form>

      </Container>
    </>
  );
}
