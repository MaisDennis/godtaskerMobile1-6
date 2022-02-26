import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background-color: ${Platform.OS === 'ios' ? '#ddd' : '#f5f5f5'};
`;

export const CameraButton = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 44px;
  width: 44px;
  border-radius: 44px;
  border: 1px solid #fff;
  /* padding: 12px; */
  /* margin: auto; */
  background-color: #4433ee;
`;

export const CameraButtonBackground = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  border-radius: 48px;
  border: 4px solid #4433ee;
  padding: 12px;
  margin: auto;
  background-color: #4433ee;
`;

export const CameraReverseButton = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
align-items: center;
height: auto;
width: auto;
border-radius: 40px;
/* border: 4px solid #fff; */
/* padding: 12px; */
margin: 0 auto;
/* background-color: #58595B; */

`;

export const CameraRollButton = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
align-items: center;
height: auto;
width: auto;
border-radius: 40px;
/* border: 4px solid #fff; */
margin: 0 auto;
/* background-color: #58595B; */

`;

export const FlashButton = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
position: absolute;
top: 10%;
left: 4%;
height: 40px;
width: 40px;
opacity: 0.8;
border-radius: 40px;
/* border: 4px solid #fff; */
/* padding: 12px; */
margin: 0 auto;
background-color: #666;

`;
export const FooterView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10%;
  width: 100%;
  /* opacity: .9; */

  background: #f5f5f5;
`;

export const StyledRNCamera = styled(RNCamera)`
  /* top: 40px; */
  height: 82%;
  width: 100%;
`;

export const StyledScrollView = styled.ScrollView`

`;

export const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 8%;
  width: 100%;
  /* padding: 24px 0; */
  background-color: #E7EEFF;
`;

export const TaskName = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #334466;
  /* background: #ff5f; */
  margin: 0 4px;
`;


