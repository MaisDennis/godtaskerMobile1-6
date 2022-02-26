import React, { useRef, useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
// import * as Yup from 'yup';
// -----------------------------------------------------------------------------

import {
  AlignView, AllIcon,
  ButtonText,
  CheckBoxWrapper,
  Container,
  EyeButton, EyeIcon,
  ForgotPasswordLink, ForgotPasswordText, Form, FormInput,
  FormInputWorkerPassword, FormWorker,
  IconView, ImageLogo, ImageGodtaskerFont,
  Label,
  MarginView02, MarginView04, MarginView08, ModalButtonView, ModalView,
  PhoneMask,
  SubmitButton, SignUpButton, SignUpErrorText, SignUpText, StyledScrollView,
  Title,
  Wrapper,
} from '../SignIn/styles';
import Button from '~/components/Button'
import { signUpRequest, signUpToggleOut, signOut } from '~/store/modules/auth/actions';
// -----------------------------------------------------------------------------
export default function SignUp(
  {
    // navigation
    // route
  }
) {
  const dispatch = useDispatch();
  const signedUp = useSelector(state => state.auth.signedup);

  const [userName, setUserName] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const [email, setEmail] = useState();
  const [signUpError, setSignUpError] = useState();
  const [secureText, setSecureText] = useState(true);

  const placeHolderColor = '#999';

  function handleSubmit() {
    // if (!userName) {
    //   Alert.alert(
    //     'Please complete username',
    //     'Your username is unique to you in Godtasker',
    //     [{ style: "default" }],
    //     { cancelable: true },
    //   );
    //   return;
    // }

    try {
      const response = dispatch(signUpRequest(
        userName, password,
        email,
        // navigation,
      ));
    }
    catch (error) {
      Alert.alert(
        'Error in data',
        `${error}`
      )
    }
  }

  if (signedUp) {
    // navigation.navigate('SignIn');
    // dispatch(signUpToggleOut());
  }

  function handleUser() {
    // auth()
    //   .signOut()
    //   .then(() => console.log('User signed out!'));

    auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.emailVerified;
        const signed = user.signed
        console.log(signed)
        // ...
      } else {
        // User is signed out
        // ...
      }
    })
  }

  function handleSecureText() {
    setSecureText(!secureText)
  }
  // -----------------------------------------------------------------------------
  return (
    <Container>
      <Form contentContainerStyle={{ alignItems: 'center' }}>
        <Wrapper>
          <MarginView08/>
          <MarginView08/>
          <MarginView08/>
          <MarginView08/>
          <MarginView08/>
          <MarginView08/>
          <IconView>
            <AllIcon name='user'/>
          </IconView>
          <MarginView04/>
          <FormInput
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Username"
            placeholderTextColor={placeHolderColor}
            returnKeyType="next"
            value={userName}
            onChangeText={setUserName}
          />
          <MarginView04/>
          <FormInput
            keboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="e-mail"
            placeholderTextColor={placeHolderColor}
            value={email}
            onChangeText={setEmail}
          />
          <MarginView08/>
          <MarginView04/>
          <IconView>
            <AllIcon name='unlock'/>
            <EyeButton onPress={handleSecureText}>
              {secureText
                ? (<EyeIcon name='eye'/>)
                : (<EyeIcon name='eye-off'/>)
              }
            </EyeButton>
          </IconView>
          <MarginView08/>
        <FormInput
          secureTextEntry = {secureText}
          autoCapitalize="none"
          placeholder="Password"
          placeholderTextColor={placeHolderColor}
          returnKeyType="send"
          value={password}
          onChangeText={setPassword}
        />
        <MarginView04/>
        <FormInput
          secureTextEntry = {secureText}
          autoCapitalize="none"
          placeholder="Confirm password"
          placeholderTextColor={placeHolderColor}
          returnKeyType="send"
          onSubmitEditing={handleSubmit}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        {signUpError && (
          <>
            <MarginView04/>
            <SignUpErrorText>{signUpError}</SignUpErrorText>
          </>
        )}
        <MarginView08/>
        <Button
          type={'submit'}
          onPress={handleSubmit}>
          Submit
        </Button>
        </Wrapper>
      </Form>
    </Container>

  );
}
