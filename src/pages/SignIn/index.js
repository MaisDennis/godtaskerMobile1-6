import React, { useState, useRef } from 'react';
import { Alert, SafeAreaView } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import auth, { sendEmailVerification, getAuth } from '@react-native-firebase/auth';
import Modal from 'react-native-modal';
// -----------------------------------------------------------------------------
import { signInRequest } from '~/store/modules/auth/actions';
import logo from '~/assets/detective/detective_remake02.png'
import godtaskerFont from '~/assets/detective/font_remake02.png';
import {
  AlignView,
  ButtonWrapper,
  Container,
  EyeButton, EyeIcon,
  ForgotPasswordLink, ForgotPasswordText, FormInput, FormWorker,
  HrLine,
  IconView, ImageLogo, ImageGodtaskerFont,
  Label,
  MarginView02, MarginView04, MarginView08, ModalLabel, ModalView, ModalWrapper,
  PhoneMask,
  SubmitButton, SignUpButton, SignUpText, StyledScrollView,
  Title,
  Wrapper,
} from './styles';
import Button from '~/components/Button'
// -----------------------------------------------------------------------------
export default function SignIn({ navigation }) {
  const dispatch = useDispatch();
  const [email, setEmail] = useState();
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState();
  const [phonenumber, setPhonenumber] = useState('');
  const [password, setPassword] = useState();
  const [resendConfirmationEmail, setResendConfirmationEmail] = useState();
  const [resendConfirmationPassword, setResendConfirmationPassword] = useState();
  const [secureText, setSecureText] = useState(true);
  const [toggleForgotPassword, setToggleForgotPassword] = useState(false);
  const [toggleResendConfirmation, setToggleResendConfirmation] = useState(false);

  const loading = useSelector(state => state.auth.loading);
  const signed = useSelector(state => state.auth.signed);
  const passwordRef = useRef();

  async function handleSubmit() {
    if(email == null || '') {
      Alert.alert('Please fill in email')
      return
    }

    if(password == null || '') {
      Alert.alert('Please fill in password')
      return
    } else {

    }

    await auth().signInWithEmailAndPassword(email, password)
      .then(function(user) {
        console.log(user)
      })
      .catch(function(error) {
        // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            Alert.alert('Wrong password. Try "Forgot Password"');
          } else if (errorCode === 'auth/user-not-found') {
            Alert.alert('User Not Found.');
          } else if (errorCode === 'auth/invalid-email') {
            Alert.alert('Invalid e-mail format');
          } else {
            Alert.alert('Error occurred')
            console.log(error)
          }
      })

    await auth().onAuthStateChanged((user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const emailVerified = user.emailVerified;
        const uid = user.uid;
        console.log(user)
        if (emailVerified) {
          dispatch(
            signInRequest(
              email,
              password
            )
          );
        } else {
          Alert.alert('User email is not verified')
        }
        // ...
      } else {
        // User is signed out

        // ...
      }
    })
  }

  function handleToggleForgotPassword() {
    setToggleForgotPassword(!toggleForgotPassword)
  }

  function handleForgotPassword() {
    auth().sendPasswordResetEmail(
      forgotPasswordEmail)
      .then(function() {
        // Password reset email sent.
        Alert.alert(`Password reset email sent to ${forgotPasswordEmail}`)
      })
      .catch(function(error) {
        // Error occurred. Inspect error.code.
        Alert.alert(`Error occurred`)
        console.log('Error occurred. Inspect error.code.')
      });
  }

  function handleToggleResendConfirmation() {
    setToggleResendConfirmation(!toggleResendConfirmation)
  }

  function handleSignUp() {
    navigation.navigate('SignUp')
  }

  async function handleResendConfirmation() {
    if(email == null || '') {
      Alert.alert('Please fill in email')
      return
    }

    if(resendConfirmationPassword == null || '') {
      Alert.alert('Please fill in password')
      return
    }

    auth().signInWithEmailAndPassword(
      email,
      resendConfirmationPassword
    )
      .then(function(user) {
        if (user.user.emailVerified !== true) {
          user.user.sendEmailVerification();
          Alert.alert(`e-mail sent to ${user.user.email}`)
        }
        else {
          Alert.alert('user already verified')
          setToggleResendConfirmation(!toggleResendConfirmation)
        }
      })
      .catch(function(error) {
        // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          if (errorCode === 'auth/wrong-password') {
            Alert.alert('Wrong password. Try "Forgot Password"');
          } else if (errorCode === 'auth/user-not-found') {
            Alert.alert('User Not Found.');
          } else if (errorCode === 'auth/invalid-email') {
            Alert.alert('Invalid e-mail format');
          } else {
            Alert.alert('Error occurred')
            console.log(error)
          }
      })
  }

  function handleSecureText() {
    setSecureText(!secureText)
  }

  if (signed) {
    navigation.navigate('Home')
  }
  // -----------------------------------------------------------------------------
  return (
    <SafeAreaView>
      <Container>
        <AlignView
          behavior={Platform.OS === "ios" ? "padding" : "position"}
          keyboardVerticalOffset = {Platform.OS === "ios" ? "100" : null }
        >
          <ImageLogo source={logo} />

          <ImageGodtaskerFont source={godtaskerFont} />

          <Title>Delegate tasks to anyone in a clear and organized way</Title>
          <Wrapper>
            <IconView>
            <EyeButton onPress={handleSecureText}>
                {secureText
                  ? (<EyeIcon name='eye'/>)
                  : (<EyeIcon name='eye-off'/>)
                }
            </EyeButton>
            </IconView>
            <Label>Sign In</Label>
            <MarginView04/>
            <FormWorker
                // behavior={Platform.OS === "ios" ? "padding" : null}
                // keyboardVerticalOffset = {Platform.OS === "ios" ? "100" : null }
            >
              <FormInput
                keboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="e-mail"
                // placeholderTextColor={placeHolderColor}
                value={email}
                onChangeText={setEmail}
              />
              <MarginView04/>
              <FormInput
                // icon="unlock"
                secureTextEntry={secureText}
                placeholder="Your password"
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                value={password}
                onChangeText={setPassword}
                // ref={passwordRef}
              />
              <MarginView08/>
              <Button
                type={'inverted'}
                loading={loading}
                onPress={handleSubmit}
              >
                Login
              </Button>
              <MarginView08/>
              <ForgotPasswordLink
                onPress={handleToggleForgotPassword}
              >
                <ForgotPasswordText>Forgot Password</ForgotPasswordText>
              </ForgotPasswordLink>
            </FormWorker>
            <Label>or</Label>
            <MarginView04/>
            <Button
            type={'submit'}
            onPress={handleSignUp}
          >
            Sign Up
          </Button>
          <MarginView08/>
          <ForgotPasswordLink
                onPress={handleToggleResendConfirmation}
              >
                <ForgotPasswordText>
                  Resend e-mail Confirmation
                </ForgotPasswordText>
              </ForgotPasswordLink>
          </Wrapper>
          <MarginView08/>

  {/* ------------------------------------------------------------------------ */}
        <Modal isVisible={toggleForgotPassword}>
          <ModalView>
            <ModalWrapper>
            <MarginView08/>
            <ModalLabel>Send "Forgot password" e-mail</ModalLabel>
            <MarginView04/>
            <FormInput
              keboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="e-mail"
              // placeholderTextColor={placeHolderColor}
              value={forgotPasswordEmail}
              onChangeText={setForgotPasswordEmail}
            />
            {/* ----------- */}
            <MarginView04/>
            <HrLine/>
            <MarginView04/>
            {/* ----------- */}
            <ButtonWrapper>
            <Button
              type={'submit'}
              small={true}
              onPress={() => handleForgotPassword()}
            >
              Send
            </Button>
            <Button
              type={'inverted'}
              small={true}
              onPress={handleToggleForgotPassword}
            >
              Back
            </Button>
            </ButtonWrapper>
            <MarginView08/>
            <MarginView08/>
            </ModalWrapper>
          </ModalView>
        </Modal>

        <Modal isVisible={toggleResendConfirmation}>
          <ModalView>
          <ModalWrapper>
            <MarginView08/>
            <ModalLabel>Re-Send confirmation</ModalLabel>
            <MarginView04/>
            <FormInput
              keboardType="email-address"
              autoCorrect={false}
              autoCapitalize="none"
              placeholder="e-mail"
              // placeholderTextColor={placeHolderColor}
              // value={resendConfirmationEmail}
              // onChangeText={setResendConfirmationEmail}
              returnKeyType="next"
              value={email}
              onChangeText={setEmail}
            />
            <MarginView04/>
            <FormInput
              // icon="unlock"
              secureTextEntry={true}
              placeholder="Your password"
              placeholderTextColor={'#666'}
              returnKeyType="send"
              onSubmitEditing={handleSubmit}
              value={resendConfirmationPassword}
              onChangeText={setResendConfirmationPassword}
              // ref={passwordRef}
            />
            {/* ----------- */}
            <MarginView04/>
            <HrLine/>
            <MarginView04/>
            {/* ----------- */}
            <ButtonWrapper>
            <Button
              type={'submit'}
              small={true}
              onPress={() => handleResendConfirmation()}
            >
              Send
            </Button>
            <Button
              type={'inverted'}
              small={true}
              onPress={handleToggleResendConfirmation}
            >
              Back
            </Button>
            </ButtonWrapper>
            <MarginView08/>
            <MarginView08/>
            </ModalWrapper>
          </ModalView>
        </Modal>
        </AlignView>
      </Container>
    </SafeAreaView>
  );
}
