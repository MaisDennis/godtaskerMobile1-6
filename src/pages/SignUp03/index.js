import React, { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
import { updateProfileRequest } from '~/store/modules/user/actions';
import api from '~/services/api';
// -----------------------------------------------------------------------------
export default function SignUp03({ navigation, route }) {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.profile);

  const [secureText, setSecureText] = useState(true);
  const [confirm, setConfirm] = useState(false);
  const [code, setCode] = useState('');

  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  // const userName = data.username;
  // const password = data.password;
  const parsedPhonenumber = user.phonenumber;
  const placeHolderColor = '#999';

  function handleSecureText() {
    setSecureText(!secureText)
  }

  async function handleSubmit() {
    try {
      dispatch(updateProfileRequest({
        first_name: firstName,
        last_name: lastName,
        phonenumber: parsedPhonenumber,
      }));
      // navigation.goBack();
      console.log('dispatch profile OK')
    }
    catch {
      console.log('error in first_name, last_name')
    }
  }
  // -----------------------------------------------------------------------------
  return (
    <Background>
      <Container>
        <Form contentContainerStyle={{ alignItems: 'center' }}>
          <Wrapper>
            <IconView>
              <AllIcon name='user'/>
            </IconView>
            <Title>Please fill in your name</Title>
            <FormInput
              autoCorrect={false}
              placeholder="Name"
              placeholderTextColor={placeHolderColor}
              returnKeyType="next"
              value={firstName}
              onChangeText={setFirstName}
            />
            <FormInput
              autoCorrect={false}
              placeholder="Lastname"
              placeholderTextColor={placeHolderColor}
              returnKeyType="next"
              value={lastName}
              onChangeText={setLastName}
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
