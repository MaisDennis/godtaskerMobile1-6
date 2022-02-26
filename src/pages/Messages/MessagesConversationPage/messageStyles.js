import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import {
  KeyboardAvoidingView,
  SafeAreaView, TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const primaryFont = 'OpenSans-Bold';
const secondaryFont = 'OpenSans-Regular';

export const AlignView = styled.View`
display: flex;
flex-direction: column;
width: 100%;
/* background-color: #FFFEE9; */
background-color: #fff;
`;

export const ForwardOnTopView = styled.View`
  display: flex;
  flex-direction: row;
  height: auto;
  margin: 0 4px;
  /* background-color: #f00; */
`;
export const ForwardText = styled.Text`
  font-style: italic;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  padding: 0 4px;
  color: #666;
`;

export const LineView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
margin: 0 12px;
/* background-color: #4433ee; */
`;

export const MessageBottomView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: auto;
  margin: 0 4px;
  /* background-color: #ee3; */
`;

export const MessageContainer = styled.View`
  display: flex;
  flex-direction: column;
  align-items: ${ props => props.inverted === true
    ? (
      (props.sender === 'worker') ? 'flex-end' : 'flex-start'
    )
    : (
      (props.sender === 'worker') ? 'flex-start' : 'flex-end'
    )
  };
  width: 100%;
  margin: 0;
  /* background-color: #44cc33; */
`;

export const MessageIcon = styled(Icon)`
font-size: 16px;
margin-left: 8px;
color: #666;
`;

export const MessageListButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  height: 24px;
  margin: 0 4px;
  /* background-color: #f44; */
`;

export const MessageListItemText = styled.Text`
font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
margin: 0 auto;
color: #18A0FB;
`;

export const MessageListItemView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  border-radius: 32px;
  padding: 0 12px;
  border-width: 1px;
  border-color: #18A0FB;
  background-color: #fff;
`;

export const MessageListView = styled.View`
  display: flex;
  flex-direction: row;
  /* background-color: #44cc; */
`;

export const MessageText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  font-style: ${
    props => props.removedMessage ? 'italic' : 'normal'
  };
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  color: ${
    props => props.removedMessage ? '#666' : '#1B2432'
  };
  max-width: 93%;
  padding: 0 4px;
  /* background-color: #666; */
`;

export const MessageTime = styled.Text`
font-size: ${Platform.OS === 'ios' ? '11px' : '9px'};
font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
max-width: 190px;
width: auto;
margin: 4px;
color: #666;
/* background-color: #4ee; */
`;

export const MessageView = styled(LinearGradient)`
display: flex;
flex-direction: column;
max-width: 80%;
border: 0.5px;
border-color: #eee;
border-radius: 12px;
/* background-color: #4ee; */
`;

export const MessageViewUser = styled(LinearGradient)`
display: flex;
flex-direction: column;
max-width: 80%;
border: 0.5px;
border-color: #eee;
border-radius: 12px;
/* background-color: #4ee; */
`;

export const MessageWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  /* background-color: #4ee; */
`;

export const ReplyOnTopView = styled.View`
display: flex;
flex-direction: column;
align-self: center;
width: auto;
/* background-color: #4433ee; */
`;

export const ReplyOnTopWrapper = styled.View`
display: flex;
flex-direction: row;
height: auto;
margin: 0 12px;
/* background-color: #4433ee; */
`;

export const ReplyUserNameText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  color: #19AE7C;
  color: #334466;
`;

export const ReplyWorkerNameText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  color: #334466;
`;

export const ReplyOnTopText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
`;




