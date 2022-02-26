import {
  KeyboardAvoidingView, Platform, SafeAreaView,
  ScrollView,
  TouchableOpacity, TextInput } from 'react-native';
import styled from 'styled-components/native';
import { TextInputMask as InputMask } from 'react-native-masked-text'
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------
import Input from '~/components/Input';
import Button from '~/components/Button';
// -----------------------------------------------------------------------------
const primaryFont = 'OpenSans-Bold';
const secondaryFont = 'OpenSans-Regular';

export const AlignView = styled(KeyboardAvoidingView)`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
overflow: scroll;
/* background-color: #444; */
`;

export const AllIcon = styled(Icon)`
  font-size: 16px;
  color: #1B2432;
  /* background-color: #44ccee; */
`;

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  height: auto;
  width: 100%;
  /* background-color: #fe2; */
`;

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: #fff;
  /* background-color: #ee3; */
`;

export const EyeButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
  height: auto;
  padding: 4px;
  border-radius: 8px;
  border-width: 2px;
  border-color: #18A0FB;
  /* background-color: #fff; */
`;

export const EyeIcon = styled(Icon)`
  font-size: 18px;
  /* margin: 16px 0 4px; */
  color: #18A0FB;
  /* background-color: #44ccee; */
`;

export const ForgotPasswordLink = styled(TouchableOpacity)`
`;

export const ForgotPasswordText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  text-align: center;
  text-decoration: underline;
  width: auto;
  color: #1B2432;
`;

export const Form = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  /* background-color: #4433ee; */

`;

export const FormInput = styled.TextInput`
  font-family: ${secondaryFont};
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border-width: 1px;
  border-color: #ccc;
  margin: 0 auto;
  padding-left: 12px;
  color: #1B2432;
  background-color: #eee;
  /* background: #c4ce3b; */
`;

export const FormWorker = styled.View`
  width: 100%;
  height: auto;
  margin: 0 0 16px;
  /* background: #c4ce3b; */
`;

export const HrLine = styled.View`
  width: 90%;
  border-width: 0.5px;
  border-color: #ddd;
  margin: 0px auto;
`;

export const IconView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height:auto;
  /* background: #c4ce3b; */
`;

export const ImageLogo = styled.Image`
  width: 75px;
  height: 70px;
  margin: 24px auto 8px;
`;

export const ImageGodtaskerFont = styled.Image`
  width: 210px;
  height: 38px;
  margin: 0 auto;
`;

export const Label = styled.Text`
font-size: ${Platform.OS === 'ios' ? '18px' : '16px'};
font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
width: auto;
text-align: center;
color: #1B2432;
/* background: #999; */
`;

export const MarginView02 = styled.View`
  width: 100%;
  margin: 2px 0;
`;

export const MarginView04 = styled.View`
  width: 100%;
  margin: 4px 0;
`;

export const MarginView08 = styled.View`
  width: 100%;
  margin: 8px 0;
`;

export const ModalLabel = styled.Text`
font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
width: auto;
text-align: center;
color: #1B2432;
/* background: #999; */
`;

export const ModalView = styled.View`
  height: auto;
  width: 100%;
  border-radius: 8px;
  margin: 0 auto;

  background-color: #fff;
  /* background-color: #ff0; */
`;

export const ModalWrapper = styled.View`
  height: auto;
  width: 90%;
  margin: 0 auto;
  /* background-color: #ff0; */
`;

export const SubmitButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 80%;
  border-radius: 8px;
  margin: 8px auto 0;
  background-color: #1B2432;
`;

export const SignUpButton = styled(Button)`
  height: 44px;
  width: 80%;
  border-radius: 8px;
  padding: 0 16px;
  margin-top: 8px;
  background-color: #18A0FB;
`;

export const SignUpErrorText = styled.Text`
  color: #f64C75;
  font-weight: bold;
  font-size: 16px;
`;

export const SignUpText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  font-weight: bold;
  color: #fff;
  /* color: #44ccee; */

`;

export const StyledScrollView = styled.ScrollView`
/* background: #F5F; */
`;

export const Title = styled.Text`
font-size: ${Platform.OS === 'ios' ? '18px' : '16px'};
font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
/* max-width: 64%; */
max-width: 80%;
text-align: center;
margin: 16px auto;
/* background: #999; */
color: #1B2432;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 80%;
  min-width: 320px;
  margin: 0 auto;
  /* background-color: #f5f; */
`;
