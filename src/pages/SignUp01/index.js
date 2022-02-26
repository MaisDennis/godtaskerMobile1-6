import React, { useRef, useState } from 'react';
import { Alert } from 'react-native'
import { object, string, number, date, InferType, setLocale } from 'yup';
import auth from '@react-native-firebase/auth';
// -----------------------------------------------------------------------------
import Background from '~/components/Background';
import logo from '~/assets/detective/detective_remake02.png'
import godtaskerFont from '~/assets/detective/font_remake02.png';
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
  OtpDigit, OtpView,
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
import api from '~/services/api';
// -----------------------------------------------------------------------------
export default function SignUp01({ navigation }) {

  const [userName, setUserName] = useState();
  const [phonenumber, setPhonenumber] = useState('');
  const [email, setEmail] = useState();
  const [birthDate, setBirthDate] = useState();
  const [secureText, setSecureText] = useState(true);

  const [confirm, setConfirm] = useState(false);
  const [code, setCode] = useState('');
  const [digit1, setDigit1] = useState();
  const [digit2, setDigit2] = useState();
  const [digit3, setDigit3] = useState();
  const [digit4, setDigit4] = useState();
  const [digit5, setDigit5] = useState();
  const [digit6, setDigit6] = useState();
  const digit1Ref = useRef();
  const digit2Ref = useRef();
  const digit3Ref = useRef();
  const digit4Ref = useRef();
  const digit5Ref = useRef();
  const digit6Ref = useRef();

  const [userCheck, setUserCheck] = useState();
  const [emailCheck, setEmailCheck] = useState();
  const [phonenumberCheck, setPhonenumberCheck] = useState();
  const placeHolderColor = '#999';

  const schema = object().shape({
    // phonenumber: string()
    // .()
    // .required(),
    Username: string().max(20).required(),
  });

  // https://github.com/jquense/yup
  setLocale({
    mixed: {
      default: 'Invalid input',
      required: 'Please insert a(n) ${path}',
    },
    string: {
      max: 'Username must have less than ${max} characters',
      email: 'Must be a valid e-mail',
    },
  });

  function handleSecureText() {
    setSecureText(!secureText)
  }

  async function handleNext() {
    const countryCode = '+'+'55'
    const unmaskedPhonenumber = phonenumber.replace(/[()\s-]/g, '')
    setPhonenumber(unmaskedPhonenumber)
    const parsedPhonenumber = countryCode+unmaskedPhonenumber;
    // const parsedPhonenumber = '+5511983495853
    console.log(parsedPhonenumber)
    try {
      const parsedUser = await schema.validate(
        {
          Username: userName,
          phoneumber: parsedPhonenumber,
          // email: email,
        },
        { strict: true },
      )
    } catch (err) {
        Alert.alert(
        err.errors[0],
        '',
        [{ style: "default" }],
        { cancelable: true },
      );
    }

    const userResponse = await api.get('/users/usercheck', {
      params:
      {
        username: userName,
        phonenumber: parsedPhonenumber,
        // email
      }
    })
    console.log(userResponse.data)
    setUserCheck(userResponse.data.user)
    // setEmailCheck(userResponse.data.email)
    setPhonenumberCheck(userResponse.data.phonenumber)
    if (userResponse.data.user === true) return
    if (userResponse.data.phonenumber === true) return

    try {
      const confirmation = await auth().signInWithPhoneNumber(parsedPhonenumber);
      setConfirm(confirmation);
      Alert.alert('Código enviado por SMS!')
    }
    catch (error) {
      console.log(error)
    }
  }

  function handleDigit1(text) {
    setDigit1(text)
    if(text=='') return
    digit2Ref.current.focus()
    console.log(digit1)
  }

  function handleDigit2(text) {
    setDigit2(text)
    if(text=='') return
    digit3Ref.current.focus()
    console.log(digit2)
  }

  function handleDigit3(text) {
    setDigit3(text)
    if(text=='') return
    digit4Ref.current.focus()
    console.log(digit3)
  }

  function handleDigit4(text) {
    setDigit4(text)
    if(text=='') return
    digit5Ref.current.focus()
    console.log(digit4)
  }

  function handleDigit5(text) {
    setDigit5(text)
    if(text=='') return
    digit6Ref.current.focus()
    console.log(digit5)
  }

  async function handleDigit6(text) {
    setDigit6(text)
    if(text=='') return
    console.log(digit6)
  }

  function handleErase() {
    setDigit1(); setDigit2(); setDigit3();
    setDigit4(); setDigit5(); setDigit6();
    digit1Ref.current.focus()

  }

  async function confirmCode() {
    const fullCode=digit1+digit2+digit3+digit4+digit5+digit6
    // console.log(fullCode)
    try {
      const unmaskedCode = fullCode
      console.log(unmaskedCode)
      const response = await confirm.confirm(fullCode);
      const countryCode = '+'+'55'
      const unmaskedPhonenumber = phonenumber.replace(/[()\s-]/g, '')
      const parsedPhonenumber = countryCode+unmaskedPhonenumber;
      console.log(unmaskedPhonenumber)
      navigation.navigate('SignUp02',
      {
        username: userName,
        parsedPhonenumber: parsedPhonenumber,
      })
    } catch (error) {
      Alert.alert('The code does not match. Please check.')
    }

  }
  // -----------------------------------------------------------------------------
  return (
    <Background>
      <Container>
        <Form contentContainerStyle={{ alignItems: 'center' }}>
        { !confirm
          ? (
            <Wrapper>
              <IconView>
                <AllIcon name='user'/>
              </IconView>
              <FormInput
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Username"
                placeholderTextColor={placeHolderColor}
                returnKeyType="next"
                value={userName}
                onChangeText={setUserName}
              />
              {
                userCheck
                ? (<LabelText>This Username already exists</LabelText>)
                : null
              }
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
                value={phonenumber}
                onChangeText={setPhonenumber}
                placeholderTextColor={'#999'}
              />
              {
                phonenumberCheck
                ? (<LabelText>This Phonenumber already exists</LabelText>)
                : null
              }
              {/* <FormInput
                keboardType="email-address"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="e-mail"
                placeholderTextColor={placeHolderColor}
                value={email}
                onChangeText={setEmail}
              />
              {
                emailCheck
                ? (<LabelText>This e-mail already exists</LabelText>)
                : null
              } */}
            <SubmitButton onPress={handleNext}>
              <ButtonText>Next</ButtonText>
            </SubmitButton>
          </Wrapper>
          )
          : (
            <>
            <Wrapper>
              <Title>Please insert Code</Title>
              <OtpView>
                <OtpDigit
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit1}
                  onChangeText={text => handleDigit1(text)}
                  ref={digit1Ref}
                  autoFocus={true}
                  clearTextOnFocus={true}
                />
                <OtpDigit
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit2}
                  onChangeText={text => handleDigit2(text)}
                  ref={digit2Ref}
                  clearTextOnFocus={true}
                />
                <OtpDigit
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit3}
                  onChangeText={text => handleDigit3(text)}
                  ref={digit3Ref}
                  clearTextOnFocus={true}
                />
                <OtpDigit
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit4}
                  onChangeText={text => handleDigit4(text)}
                  ref={digit4Ref}
                  clearTextOnFocus={true}
                />
                <OtpDigit
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit5}
                  onChangeText={text => handleDigit5(text)}
                  ref={digit5Ref}
                  clearTextOnFocus={true}
                />
                <OtpDigit
                  keyboardType="number-pad"
                  maxLength={1}
                  value={digit6}
                  onChangeText={text => handleDigit6(text)}
                  ref={digit6Ref}
                  clearTextOnFocus={true}
                />
              </OtpView>
              <SubmitButton title="Confirm Code" onPress={() => confirmCode()}>
                <ButtonText>Confirmar</ButtonText>
              </SubmitButton>
              {/* <GeneralButton title="Confirm Code" onPress={() => handleErase()}>
                <GeneralButtonText>Apagar</GeneralButtonText>
              </GeneralButton> */}
            </Wrapper>
          </>
          )}

        </Form>
      </Container>
    </Background>
  )
}
