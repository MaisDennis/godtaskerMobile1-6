import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRawValue } from 'react-native-masked-text'
// -----------------------------------------------------------------------------
import { signInRequest } from '~/store/modules/worker/actions';
import Background from '~/components/Background';
import logo from '~/assets/detective/detectiveBlack.png';
import godtaskerFont from '~/assets/detective/godtaskerFontPlainGreySmall.png';
import {
  Container, ImageLogo, ImageGodtaskerFont,
  Title, Div1, Div2, FormUser,
  FormWorker, FormInputUserEmail, FormInputWorkerId,
  SubmitButton, ButtonText, FormInputUserPassword,
  FormInputWorkerPassword, PhoneMask, StyledScrollView
} from './styles';
// -----------------------------------------------------------------------------
export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const [workerPhoneNumber, setWorkerPhoneNumber] = useState('');
  const [workerPassword, setWorkerPassword] = useState('');
  const [passwordFocus, setPasswordFocus] = useState(false);
  const loading = useSelector(state => state.worker.loading);
  const signed = useSelector(state => state.worker.signed);

  function handleSubmit() {
    const unmaskedWorkerPhoneNumber = (
      maskedPhoneNumber => maskedPhoneNumber.replace(/[()\s-]/g, '')
    )
    dispatch(
      signInRequest(
        unmaskedWorkerPhoneNumber(workerPhoneNumber), workerPassword
      )
    );
  }

  function handlePasswordFocus() {
    setPasswordFocus(true)
  }

  if (signed) {
    navigation.navigate('Home')
  }
  // -----------------------------------------------------------------------------
  return (
    <Background>
      <Container>
        <StyledScrollView>
          <ImageLogo source={logo} />
          <ImageGodtaskerFont source={godtaskerFont} />
          <Div1>
            <Div2>
              <Title>Funcionários</Title>
              <FormWorker>
                <PhoneMask
                  type={'cel-phone'}
                  options={
                    {
                      maskType: 'BRL',
                      withDDD: true,
                      dddMask: '(99) ',
                    }
                  }
                  placeholder="Número de Whatsapp"
                  returnKeyType="next"
                  value={workerPhoneNumber}
                  onChangeText={
                    setWorkerPhoneNumber
                  }
                  placeholderTextColor={'#999'}
                  onSubmitEditing={handlePasswordFocus}
                />
                <FormInputWorkerPassword
                  icon="unlock"
                  placeholder="Senha"
                  returnKeyType="send"
                  onSubmitEditing={handleSubmit}
                  value={workerPassword}
                  onChangeText={setWorkerPassword}
                  placeholderTextColor={'#999'}
                  focus={passwordFocus}
                />

                <SubmitButton loading={loading} onPress={handleSubmit}>
                  <ButtonText>Entrar</ButtonText>
                </SubmitButton>
              </FormWorker>
            </Div2>
          </Div1>
          </StyledScrollView>
      </Container>
    </Background>
  );
}
