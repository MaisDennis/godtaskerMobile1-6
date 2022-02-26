import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
// -----------------------------------------------------------------------------
const primaryFont = 'OpenSans-Bold';
const secondaryFont = 'OpenSans-Regular';

export const ButtonWrapper = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: ${props => props.small == true ? '108px' : '100%'};
  border-radius: 4px;
  margin: 0 auto;
`;

export const ButtonText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '15px' : '13px'};
  font-weight: bold;
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
`;

export const Container = styled.View`
  height: auto;
  width: auto;
  margin: 0 auto;
  /* background-color: #f5f; */
`;
