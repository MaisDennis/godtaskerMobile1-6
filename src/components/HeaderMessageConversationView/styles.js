import styled from 'styled-components/native';

const primaryFont = 'OpenSans-Bold';
const secondaryFont = 'OpenSans-Regular';

export const AlignView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* width: 40%; */
  height: 100%;
  background-color: #fff;
  /* background: #4433ee; */
`;

export const HeaderContainer = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* justify-content: space-between; */
  width: 100%;
  height: 100%;
  padding: 0 32px;
  /* background-color: #ee3; */
`;

export const HeaderText = styled.Text`
  color: #222;
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  font-weight: bold;
  margin-left: 16px;
  padding: 2px;
  /* background: #000; */
`;

export const HeaderImage = styled.Image`
  height: 40px;
  width: 40px;
  border-radius: 40px;
  /* margin: 0 auto; */
  /* background: #f00; */
`;

export const HeaderImageBackgroundView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 44px;
  border-width: 1px;
  border-color: #18A0FB;
  /* background-color: #4ee; */
`;
