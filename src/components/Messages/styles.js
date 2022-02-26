
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export const AlignView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  /* background-color: #73a6c4; */

`;

export const BodyView = styled.View`
display: flex;
flex-direction: row;
/* justify-content: space-around; */
height: 100%;
width: 80%;
/* background-color: #4433ee; */
`;

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 1px 0px;
  background: #fff;
  /* background: #F5F5; */
`;

export const Image = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 48px;
  background-color: #f5f5f5;
`;

export const LastMessageText = styled.Text`
  font-weight: 400;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  padding: 4px;
  /* background-color: #f5f5; */
`;

export const LastMessageTimeText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '11px' : '9px'};
  /* font-weight: bold; */
  color: #666;
`;

export const LastMessageTimeView = styled.View`
`;

export const LastMessageView = styled(LinearGradient)`
min-height: 48px;
padding: 4px;
margin-right: 8px;
border-radius: 12px;
/* background-color: #ddd; */
`;

export const LeftDoubleView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
height: 100%;
width: 20%;
/* background-color: #334466; */
/* background-color: #E7EEFF; */
`;

export const LeftView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
height: 100%;
width: 20%;
/* background-color: #009966; */
/* background-color: #f0fff0; */
/* background: ${props => props.colorProp == true ? '#334466' : '#73c479'}; */
`;

export const MainView = styled.View`
display: flex;
flex-direction: column;
height: 100%;
width: 80%;
padding: 8px;
/* background-color: #ee3; */
`;

export const MessageIcon = styled(Icon)`
font-size: 21px;
color: #000;
color: #18A0FB;
padding-top: 12px;
`;

export const RightView = styled.View`
display: flex;
flex-direction: row;
/* justify-content: space-between; */
align-items: center;
width: 20%;
/* padding: 0 4px; */
/* background-color: #f00; */
`;

export const SenderText = styled.Text`
  font-weight: 700;
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  color: #18A0FB;
  padding: 4px;
`;

export const TitleView = styled.View``;


export const UnreadMessageCountView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
  width: 24px;
  margin: 0;
  border-radius: 24px;
  border-width: 1px;
  border-color: #ccc;
  /* background-color: #fff; */
`;

export const UnreadMessageCountText = styled.Text`
  font-size: 12px;
  margin: auto;
  /* background-color: #f00; */
`;

export const WorkerImageBackgroundView = styled.View`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 52px;
  border-radius: 52px;
  border-width: 1px;
  border-color: #334466;
  border-color: #18A0FB;
  background-color: #fff;
`;
