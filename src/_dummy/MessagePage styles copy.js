import styled from 'styled-components/native';
import { TextInput, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import Button from '~/components/Button';
import { RectButton } from 'react-native-gesture-handler';

// export const Container = styled.SafeAreaView`
//   top: 5px;
//   margin: 0 auto;
//   width: 90%;
//   border-radius: 4px;
//   background: #fff;
//   flex-direction: column;
//   align-items: center;
//   justify-content: space-between;
//   padding: 2px;
//   height: auto;
//   /* background: #ff5f; */
// `;

// export const Container = styled.SafeAreaView`
//   top: 5px;
//   margin: 0 auto;
//   width: 90%;
//   background: #fff;
//   flex: 1;
//   justify-content: center;
//   align-items: center;
//   padding: 2px;
//   height: auto;
//   /* background: #ff5f; */
//  `;

export const Container = styled.ScrollView.attrs({
})`
  top: 5px;
  margin: 0 auto;
  width: 90%;
  height: 800px;
  background: #fff;
  flex: 1;
  padding: 0;
  /* background: #ff5f; */
`;

export const StyledKeyboardAvoiding = styled.KeyboardAvoidingView.attrs({
  enabled: Platform.OS === 'ios',
  behavior: 'position',
})`
  /* background: #58595B; */
  width: 100%;
  height: 150%;
`;

export const Form = styled.View`
  top: 0;
  width: 100%;
  height: 150%;
  margin: 0;
  /* background: #ff5f; */
`;

export const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  margin: 14px auto;
  /* background: #ff5f; */
`;

export const TaskName = styled.Text`
  font-weight: bold;
  font-size: 16px;
  margin: auto 4px;
  /* background: #ff5f; */
`;

export const TaskDescriptionView = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  border: 2px;
  border-color: #222;
  align-items: center;
  width: 90%;
  padding: 4px;
  background: #F5F5F5;
  border-radius: 4px;
  align-self: center;
  margin-bottom: 14px;
  /* background: #ff5f; */
`;

export const TaskDescriptionText = styled.Text`
  color: #222;
  font-weight: normal;
  font-size: 14px;
  margin: 2px;
  text-align: justify;
  line-height: 20px;
  margin: 4px;
  /* background: #ff5f; */
`;

export const FormInput = styled(TextInput)`
  top: 0;
  margin: 0 auto;
  height: 150px;
  width: 90%;
  text-align: justify;
  padding: 8px;
  background: #fff;
  border: 1px solid #DDDDDD;
  border-radius: 4px;
  color: #222;
  /* background: #ff5f; */
`;

export const SubmitButton = styled(Button)`
  margin-top: 15px;
  background: #58595B;
  width: 90%;
`;

export const WhatsappButton = styled(Button)`
  margin: 15px auto 200px;
  background: #00ff00;
  width: 90%;
`;

export const SubmitButtonText = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  line-height: 20px;
  /* background: #beef69; */
  width: 90%;
`;

export const WhatsappLabelText = styled(Text)`
  color: #222;
  font-weight: normal;
  font-size: 14px;
  margin: 15px auto 0;
  text-align: center;
  line-height: 20px;
  /* background: #beef69; */
  width: 90%;
`;

export const WhatsappImage = styled(Image)`
height: 20px;
width: 20px;
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 30 },
})`
  height: 150%;
`;




