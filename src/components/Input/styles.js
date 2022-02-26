import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather'
// -----------------------------------------------------------------------------
export const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  width: 90%;
  padding-left: 4px;
  margin: 8px 0;
  border-radius: 4px;
  color: #666;
  background-color: rgba(0,0,0,0.5);
`;
export const TInput = styled.TextInput.attrs({
  placeholderTextColor: '#ccc',
})`
  padding-left: 12px;
  color: #fff;
`;

export const AllIcon = styled(Icon)`
  font-size: 16px;
  padding-left: 8px;
  color: #ccc;
`;
