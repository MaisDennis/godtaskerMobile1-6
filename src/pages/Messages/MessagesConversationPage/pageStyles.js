import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const primaryFont = 'OpenSans-Bold';
const secondaryFont = 'OpenSans-Regular';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${Platform.OS === 'ios' ? '#ddd' : '#f5f5f5'};
  /* background-color: #F5F5; */
`;
export const ConversationView = styled(KeyboardAvoidingView)`
display: flex;
flex-direction: column;
height: 100%;
width: 100%;
overflow: scroll;
/* background-color: #4433ee; */
`;

export const LeftBorderView = styled.View`
  left: 0;
  height: 100%;
  width: 2px;
  margin-right: 8px;
  background-color: #1B2432;

`;

export const HrLine = styled.View`
  width: 100%;
  border-width: 0.5px;
  border-color: #ddd;
  margin: 0px auto;
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

export const ReplyContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin: 0;
  /* background-color: #f00; */
`;

export const ReplyView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 0 8px;
  background-color: #fff;
`;

export const SendInput = styled.TextInput`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  line-height: ${Platform.OS === 'ios' ? '22px' : '18px'};
  height: auto;
  min-height: 32px;
  width: 80%;
  border-radius: 32px;
  border-width: 1px;
  border-color: #ccc;
  margin: 8px 0;
  padding: ${Platform.OS === 'ios' ? '8px 12px' : '4px 12px'};
  color: #1B2432;
  background-color: #eee;
`;

export const SendButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border: 1px solid #fff;
  border-radius: 40px;
  margin: 0;
  background-color: #18A0FB;
`;


export const SendButtonView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border-radius: 36px;
  border: 1px solid #1B2432;
  margin: 0;
  /* background-color: #4ee; */
`;

export const SendIcon = styled(Icon)`
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  color: #fff;
`;

export const SpaceView = styled.View`
  height: 32px;
  width: 32px;
  border-radius: 32px;
`;

export const TemporaryMessageContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 100%;
  padding: 8px;
  background-color: #fff;
  /* background-color: ${Platform.OS === 'ios' ? '#ddd' : '#f5f5f5'}; */
  /* background-color: #f5f; */
`;
export const TemporaryMessageView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: auto;
  /* background-color: #f00; */
`;
export const TemporaryMessageText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '13px' : '11px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  text-align: left;
  width: 90%;
  color: #1B2432;
`;

export const TemporaryMessageIcon = styled(Icon)`
  font-size: 24px;
  color: #f64C75;
  background-color: #fff;
`;
export const TemporaryMessageIconView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 10%;
  /* background-color: #999; */
`;
