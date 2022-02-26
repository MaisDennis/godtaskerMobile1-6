
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
  /* align-items: center; */
  width: 100%;
  background-color: #44cc22;
`;

export const LabelText = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #666;
  margin: 12px 4px;
`;

export const SubTaskTitleView = styled.View`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  width: 100%;
  background-color: #4433ee;
`;

export const AddSubTaskIcon = styled(Icon)`
  font-size: 18px;
  font-weight: normal;
  color: #111;
  margin: 4px;
`;

export const AddSubTaskButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  /* justify-content: space-between; */
  align-items: center;
  height: 100%;
  width: 50%;
  background-color: #666;
`;
