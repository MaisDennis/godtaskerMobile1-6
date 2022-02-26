import { Platform, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native';
import styled from 'styled-components/native';
import { TextInputMask as InputMask } from 'react-native-masked-text'
import Icon from 'react-native-vector-icons/Feather';
// -----------------------------------------------------------------------------

export const AllIcon = styled(Icon)`
  font-size: 16px;
  color: #1B2432;
  /* background-color: #44ccee; */
`;

export const ButtonText = styled.Text`
font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
font-weight: bold;
/* background: #999; */
color: #fff;
`;
// export const Container = styled.KeyboardAvoidingView.attrs({
//   enabled: Platform.OS === 'ios',
//   behavior: 'height',
// })`
//   width: 100%;
//   /* background-color: #44ee33; */
// `;

export const Container = styled(SafeAreaView)`
  /* background-color: #44ee33; */
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
  background-color: #fff;
`;

export const EyeIcon = styled(Icon)`
  font-size: 18px;
  /* margin: 16px 0 4px; */
  color: #18A0FB;
  /* background-color: #44ccee; */
`;

export const Form = styled.ScrollView`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: #fff;
  /* background-color: #4433ee; */

`;

export const FormInput = styled.TextInput`
  height: 44px;
  width: 80%;
  border-radius: 4px;
  border-width: 1px;
  border-color: #ccc;
  margin: 8px auto;
  margin: 8px auto;
  padding-left: 12px;
  color: #1B2432;
  background-color: #eee;
  /* background: #c4ce3b; */
`;

export const GenderDiv = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  width: 80%;
  height: auto;
  margin: 16px 0 4px;
  /* background-color: #4433ee; */
`;

export const HrLine = styled.View`
  height: 0;
  border: .5px solid #ddd;
  width: 50%;
  margin: 12px 0;
`;

export const IconView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 80%;
  height:auto;
  margin: 16px 0 8px;
  /* background: #c4ce3b; */
`;

export const ImageLogo = styled.Image`
  width: 148px;
  height: 148px;
  margin: auto;
`;

export const ImageGodtaskerFont = styled.Image`
  width: 240px;
  height: 80px;
  margin: auto;
`;

export const OtpMask = styled(InputMask)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-align: center;
  font-size: 21px;
  height: 56px;
  width: 40%;
  padding: 0 12px;
  border-radius: 4px;
  border: 1px solid #666;
  margin: 16px auto;
  color: #000;
  background-color: #f5f5f5;
`;

export const OtpDigit = styled.TextInput`
  height: 56px;
  width: 15%;
  text-align: center;
  margin: 0;
  border: 1px solid #999;
  border-radius: 4px;
  color: #222;
  background-color: #fff;
`;

export const OtpView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  margin: 16px auto;
  /* background-color: #f5f; */
`;

export const PhoneMask = styled(InputMask)`
  height: 44px;
  width: 80%;
  border-width: 1px;
  border-color: #1B2432;
  border-radius: 8px;
  margin: 8px auto;
  padding-left: 12px;
  color: #1B2432;
  background-color: #ddd;
  /* background: #c4ce3b; */
`;

export const RadioButtonTag = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: auto;
  margin: 12px auto;
  /* background-color: #999; */
`;

export const RadioButtonLabel = styled.Text`
  max-width: 100%;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  /* font-size: 14px; */
  font-weight: normal;

`;
export const RadioButtonLabelText = styled.Text`
  max-width: 100%;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  /* font-size: 14px; */
  font-weight: normal;
  color: #1B2432;
  margin: 4px;
`;

export const RadioButtonOuter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border-width: 0.5px;
  border-color: #1B2432;
  margin-top: 8px;
  background-color: #ddd;

`;
export const RadioButtonInner1 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 'feminino' ? '#1B2432' : '#fff'};
`;
export const RadioButtonInner2 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 'masculino' ? '#1B2432' : '#fff'};
`;
export const RadioButtonInner3 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 'alien' ? '#1B2432' : '#fff'};
`;
export const RadioButtonInner4 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 'outro' ? '#1B2432' : '#fff'};
`;

export const RadioButtonView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  /* background-color: #4ee; */
`;

export const SubmitButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 80%;
  border-radius: 4px;
  margin: 16px;
  background-color: #1B2432;
`;

export const SignUpErrorText = styled.Text`
  color: #f64C75;
  font-weight: bold;
  font-size: 16px;
`;

export const Title = styled.Text`
  max-width: 80%;
  font-weight: bold;
  font-size: 20px;
  text-align: center;
`;

export const Wrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  min-width: 320px;
  /* border-radius: 4px; */
  padding-bottom: 24px;
  /* margin: 24px auto; */
  background-color: #fff;
`;
