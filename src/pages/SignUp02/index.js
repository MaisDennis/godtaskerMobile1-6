import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
// -----------------------------------------------------------------------------
import Background from '~/components/Background';
import logo from '~/assets/detective/detective_remake02.png'
import godtaskerFont from '~/assets/detective/font_remake02.png';
import auth from '@react-native-firebase/auth';
import {
  AllIcon,
  ButtonText,
  Container,
  EyeButton, EyeIcon,
  Form, FormInput,
  GenderDiv,
  IconView,
  LabelText,
  // ImageGodtaskerFont, ImageLogo,
  OtpMask,
  PhoneMask,
  RadioButtonView, RadioButtonTag,
  RadioButtonLabel, RadioButtonOuter, RadioButtonInner0,
  RadioButtonInner1, RadioButtonInner2, RadioButtonInner3,
  RadioButtonInner4, RadioButtonLabelText,
  SignUpErrorText,
  SubmitButton,
  Title,
  Wrapper,
} from '~/pages/SignUp/styles'
import { signUpRequest, signInRequest } from '~/store/modules/auth/actions';
import phonenumber from '../../store/modules/phonenumber/reducer';
import Message from '../../_dummy/MessagePage index copy';
// -----------------------------------------------------------------------------
export default function SignUp02({ navigation, route }) {
  const dispatch = useDispatch();
  const [secureText, setSecureText] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const [code, setCode] = useState('');

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [passwordHint, setPasswordHint] = useState();

  const signed = useSelector(state => state.auth.signed);

  const data = route.params;
  const userName = data.username;
  const parsedPhonenumber = data.parsedPhonenumber;
  // const userName = 'test21';
  // const password = '123123';
  // const parsedPhonenumber = '+5521912341234';
  const placeHolderColor = '#999';

  function handleSecureText() {
    setSecureText(!secureText)
  }

  async function handleSubmit() {
    const user_name = userName;
    const phonenumber = parsedPhonenumber;
    const hint = passwordHint;

    try {
      dispatch(signUpRequest(
        user_name, password, hint, phonenumber
      ));
    }
    catch (error) {
      Alert.alert(
        'Error in data',
        `${error}`
      )
    }
    // finally {
    //   dispatch(signInRequest(phonenumber, password))
    // }
  }


  if (signed) {
    navigation.navigate('Home')
  }
  // -----------------------------------------------------------------------------
  return (
    <Background>
      <Container>
        <Form contentContainerStyle={{ alignItems: 'center' }}>
          <Wrapper>
            <Title>Please insert Password</Title>
            <IconView>
              <AllIcon name='user'/>
            </IconView>

            <FormInput
            secureTextEntry = {secureText}
            autoCapitalize="none"
            placeholder="Password"
            placeholderTextColor={placeHolderColor}
            returnKeyType="next"
            value={password}
            onChangeText={setPassword}
          />
          <FormInput
            secureTextEntry = {secureText}
            autoCapitalize="none"
            placeholder="Confirm password"
            placeholderTextColor={placeHolderColor}
            returnKeyType="next"
            onSubmitEditing={handleSubmit}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
          />
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Hint"
            placeholderTextColor={placeHolderColor}
            returnKeyType="next"
            value={passwordHint}
            onChangeText={setPasswordHint}
              />
            <SubmitButton onPress={handleSubmit}>
              <ButtonText>Submit</ButtonText>
            </SubmitButton>
          </Wrapper>
        </Form>
      </Container>
    </Background>
  )
}
