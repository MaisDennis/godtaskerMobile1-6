import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import Button from '~/components/Button';
import { TouchableOpacity } from 'react-native'

export const Body = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* height: 66px; */
  width: 100%;
  /* background: #F5F5; */
`;

export const Container = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  margin: 2px 0 0;
  padding: 0;
  background: #fff;
  /* background: #F5F5; */
`;

export const Image = styled.Image`
  height: 50px;
  width: 50px;
  border-radius: 50px;
  border-width: 1px;
  border-color: #fff;
  background-color: #f5f5f5;

`;
export const ImageBackgroundView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 52px;
  border-radius: 52px;
  border-width: 1px;
  border-color: #334466;
  background-color: #fff;
`;

export const TextBio = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-weight: normal;
  margin: 2px 4px;
  color: #666;
  /* background-color: #ee3; */
`;

export const TextFirstName = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  font-weight: bold;
  margin-right: 4px;
  color: #1B2432;
`;

export const TextLastName = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  font-weight: bold;
  color: #1B2432;
`;

export const TextNameView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const TextFollowedBy = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '13px'};
  font-weight: normal;
  color: #666;
`;

export const TextWorkerName = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  font-weight: bold;
  margin: 2px 0;
  color: #18A0FB;
  color: #334466;
`;

export const TextPoints = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '13px' : '11px'};
  font-weight: normal;
  margin: 0px 4px;
  color: #18A0FB;
  color: #334466;
`;

export const TextView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 16px;
`;

export const UserInfoView = styled.View`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  height: 100%;
  width: 100%;
  padding: 0 12px;
  /* background-color: #4433ee; */
`;
