import styled from 'styled-components/native';
import { KeyboardAvoidingView, ScrollView, TouchableOpacity } from 'react-native'
import DatePicker from 'react-native-date-picker' // https://github.com/henninghall/react-native-date-picker
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const primaryFont = 'OpenSans-Bold';
const secondaryFont = 'OpenSans-Regular';

export const AlignCheckBoxView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  width: 100%;
  /* background-color: #ee4; */
`;

export const ButtonView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  border-radius: 4px;
  margin: 10px auto;
  padding: 0 16px;
  background-color: #403F4C;
  /* background-color: #ee4; */
`;

export const ButtonInvertedView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 100%;
  border-radius: 4px;
  border: 2px;
  border-color: #403F4C;
  margin: 10px auto 8px;
  padding: 0 16px;
  /* background-color: #009966; */
`;

export const ButtonText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '15px' : '13px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  color: #fff;
`;

export const ButtonInvertedText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '15px' : '13px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  /* font-weight: bold; */
  color: #403F4C;
`;

export const CheckBoxWrapper = styled.ScrollView`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  padding: 12px;
  border-radius: 8px;
  /* border: 1px solid #ccc; */
  background-color: #fff;
  /* background-color: #ee3; */
`;
export const CheckBoxView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 80%;
`;

export const Container = styled.SafeAreaView`
  display: flex;
  height: 100%;
  background-color: ${Platform.OS === 'ios' ? '#ddd' : '#f5f5f5'};
  /* background-color: #4433ee; */
`;

export const DateOptionsView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 4px;
  border-width: 1px;
  border-color: #ccc;
  padding: 12px 4px;
  background-color: #eee;

`;
export const DateOptions = styled(DatePicker)`
  width: 100%;
  height: 120px;
  margin: 0;
  /* background-color: #f5f; */
`;

export const DescriptionSpan = styled.Text`
  font-weight: normal;
  font-size: 14px;
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  text-align: justify;
  line-height: 20px;
  margin: auto 4px;
  color: #222;
`;

export const FormScrollView = styled.ScrollView`
  display: flex;
  width: 100%;
  padding: 12px 0;
  background-color: #fff;
  /* background-color: #f00; */
`;

export const HrLine = styled.View`
  width: 90%;
  border-width: 0.5px;
  border-color: #ddd;
  margin: 0px auto;
`;

export const Input = styled.TextInput`
  display: flex;
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  min-height: ${Platform.OS === 'ios' ? '44px' : '44px'};
  height: auto;
  width: 100%;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  line-height: ${Platform.OS === 'ios' ? '22px' : '18px'};
  border-radius: 4px;
  border-width: 1px;
  border-color: #ccc;
  padding: ${Platform.OS === 'ios' ? '8px 12px' : '4px 12px'};
  color: #1B2432;
  background-color: #eee;
`;

export const IosKeyboardAvoidingView = styled(KeyboardAvoidingView)`

`;

export const ItemWrapperView = styled.View`
  width: 80%;
  height: auto;
  /* background-color: #3ee; */
`;

export const LabelText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  margin-right: 8px;
  color: #1B2432;
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

export const ModalView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  height: auto;
  width: 100%;
  margin-bottom: 12px;
  /* padding: 12px; */
  align-items: flex-start;
  /* background-color: #ff0; */
`;

export const RadioButtonTag = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: auto;
  margin: 0 8px;
  /* background-color: #999; */
`;
export const RadioButtonTagConfirmPhoto = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 20%;
  height: auto;
  margin: 0 8px;
  /* background-color: #999; */
`;

export const RadioButtonLabel = styled.Text`
  max-width: 100%;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
`;

export const RadioButtonLabelText = styled.Text`
  max-width: 100%;
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  color: #1B2432;
`;

export const RadioButtonOuter = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 16px;
  height: 16px;
  border-radius: 16px;
  border-width: 1px;
  border-color: #ccc;
  margin-top: 8px;
  background-color: #eee;

`;
export const RadioButtonInner0 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 0 ? '#1B2432' : '#eee'};
`;
export const RadioButtonInner1 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 1 ? '#1B2432' : '#eee'};
`;
export const RadioButtonInner2 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 2 ? '#1B2432' : '#eee'};
`;
export const RadioButtonInner3 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 3 ? '#1B2432' : '#eee'};
`;
export const RadioButtonInner4 = styled.View`
  width: 12px;
  height: 12px;
  border-radius: 12px;
  background-color: ${props => props.switch === 4 ? '#1B2432' : '#eee'};
`;

export const RadioButtonView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
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
  width: 100%;
  border-radius: 4px;
  margin: 10px auto 40px;
  padding: 0 16px;
  background-color: #18A0FB;
`;
export const SubmitButtonText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '15px' : '13px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  font-weight: bold;
  color: #fff;
`;

export const SubTaskButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 50%;
  /* background-color: #666; */
`;

export const SubTaskButtonView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 32px;
  width: 100%;
  /* background-color: #44ccee; */
`;

export const SubTaskCancelIcon = styled(Icon)`
  height: auto;
  width: auto;
  font-size: 20px;
  font-weight: normal;
  margin: auto;
  color: #AE1919;
  /* background-color: #111; */
`;

export const SubTaskEditIcon = styled(Icon)`
  height: auto;
  width: auto;
  font-size: 18px;
  font-weight: normal;
  margin: auto;
  color: #1B2432;
  /* background-color: #111; */
`;

export const SubTaskInput = styled.TextInput`
  display: flex;
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  min-height: ${Platform.OS === 'ios' ? '44px' : '44px'};
  height: auto;
  width: 100%;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  line-height: ${Platform.OS === 'ios' ? '22px' : '18px'};
  border-radius: 4px;
  border-width: 1px;
  border-color: #ccc;
  padding: ${Platform.OS === 'ios' ? '8px 12px' : '4px 12px'};
  background-color: #eee;

`;

export const SubTaskLabelText = styled.Text`
  width: 10%;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  color: #1B2432;
  /* margin: 4px; */
`;

export const SubTaskLeftView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 75%;
  /* background-color: #f5f; */
`;

export const SubTaskRightView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 25%;
  /* background-color: #ee4; */
`;

export const SubTaskTag = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 100%;
  /* background-color: #44ccee; */
`;

export const SubTaskText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  line-height: ${Platform.OS === 'ios' ? '20px' : '18px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  width: 90%;
  color: #1B2432;
  /* background-color: #f5f; */
`;

export const SubTaskWeigeText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  line-height: ${Platform.OS === 'ios' ? '20px' : '18px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  width: auto;
  color: #1B2432;
  /* background-color: #4433ee; */
`;

export const SubTaskWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 100%;
  border-radius: 8px;
  padding: 0 8px;
  /* background-color: #7ee; */
`;

export const SubTaskView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  width: 100%;
  /* background-color: #22ee; */
`;

export const TitleText = styled.Text`
  font-weight: 600;
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};

  color: #1B2432;
`;

export const WeigeView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: auto;
  width: 100%;
  /* background-color: #f00; */
`;

export const WeigeTagView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 32px;
  width: 100%;
  padding: 0 12px;
  /* background-color: #999; */
`;

export const WeigeText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  margin-right: 8px;
  color: #1B2432;
  /* background-color: #f00; */
`;
