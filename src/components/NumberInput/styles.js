import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Feather';

const primaryFont = 'OpenSans-Bold';
const secondaryFont = 'OpenSans-Regular';

export const Container = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 30px;
  width: 110px;
  border-radius: 8px;
  background-color: #fff;
  /* background: #F5F5; */
`;

export const MinusButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
  width: 32px;
  border-radius: 24px;
  background: #403F4C;
`;
export const PlusButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 24px;
  width: 32px;
  border-radius: 24px;
  background: #403F4C;

`;
export const Input = styled.Text`
  text-align: center;
  font-size: 14px;
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  height: 30px;
  width: 30px;
  color: #1B2432;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  background: #eee;
`;
export const NumberIcon = styled(Icon)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: auto;
  font-size: 20px;
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  font-weight: bold;
  margin: auto;
  color: #fff;
/* background: #4433ee; */
`;
