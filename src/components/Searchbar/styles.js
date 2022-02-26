
import styled from 'styled-components/native';

const primaryFont = 'OpenSans-Bold';
const secondaryFont = 'OpenSans-Regular';

export const Container = styled.View`
  height: 100%;
  width: 100%;
  /* background-color: #ee3; */
`;

export const SearchBarTextInput = styled.TextInput`
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  height: 70%;
  width: 70%;
  border: 1px;
  border-color: #ccc;
  border-radius: 4px;
  padding: 4px 12px;
  margin: 0 auto;
  background-color: #eee;
`;
