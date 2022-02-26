import styled from 'styled-components/native';
import { TouchableOpacity, TextInput, Text, Image, KeyboardAvoidingView, ScrollView } from 'react-native';
import Button from '~/components/Button';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather'

export const AlignView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding: 0 24px;
  /* background-color: #f5f5f5; */
`;

export const Container = styled.SafeAreaView`
  height: 100%;
  background-color: ${Platform.OS === 'ios' ? '#ddd' : '#f5f5f5'};
`;

export const Header = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 42px;
width: 100%;
background-color: #f5f5f5;
`;

export const HeaderImage = styled.Image`
  height: 32px;
  width: 96px;
  margin: 0 16px;
  /* background: #f00; */
`;

export const NextIcon = styled(Icon)`
  padding: 0 16px;
  color: #18A0FB;
  /* background-color: #f00; */
`;

export const SubHrView = styled.View`
  height: 0;
  width: 100%;
  margin-left: 20%;
  border-width: 0.5px;
  border-color: #ccc;
`;

export const SettingsImageView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 20%;
  margin: 0;
  /* background-color: #f5f5; */
`;
export const SettingsImage = styled(Icon)`

`;

export const SettingsLink = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 20%;
  height: 100%;
  /* background-color: #e55; */

`;

export const SettingsItemText = styled.Text`
  width: 60%;

  /* background-color: #ee3; */
`;

export const SettingsMenuView = styled.View`
display: flex;
flex-direction: column;
height: auto;
background-color: #fff;
/* background-color: #4433ee; */
`;
export const SettingsItemView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 48px;

background-color: #fff;
`;
export const SettignsLeftView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 50%;
  /* background-color: #3f3; */
`;
export const SettingsRightView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: auto;
  /* background-color: #f00; */
`;
export const SpaceView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 30%;
  background-color: #f5f5f5;
/* background-color: #f5f; */
`;

export const UserProfileView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
/* height: 66px; */
height: 80px;
padding: 0 16px;
background-color: #f5f5f5;
/* background-color: #f00; */
`;
export const UserImage = styled.Image`
  height: 48px;
  width: 48px;
  border-radius: 48px;
  background-color: #fff;
`;
export const UserImageBackgroundView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 52px;
  border-radius: 52px;
  border-width: 1px;
  border-color: #999;
  background-color: #fff;
`;
export const UserInfoView = styled.View`
display: flex;
flex-direction: column;
width: 90%;
padding: 0 12px;
/* background-color: #4433ee; */
`;
export const UserText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  padding: 4px 0;
`;
export const UserAboutText = styled.Text`
  font-size: 12px;
  color: #666;
`;
