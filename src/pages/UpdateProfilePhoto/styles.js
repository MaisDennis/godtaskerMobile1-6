import styled from 'styled-components/native';
import Button from '~/components/Button';
import { ScrollView, TouchableOpacity } from 'react-native';
import { RNCamera } from 'react-native-camera';
import Icon from 'react-native-vector-icons/Feather';

export const StyledRNCamera = styled(RNCamera)`
  /* top: 40px; */
  height: 80%;
  width: 100%;
`;

export const StyledScrollView = styled.ScrollView`

`;

export const Container = styled.SafeAreaView`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;
  background: #f5f5f5;
`;

export const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10%;
  width: auto;
  /* background: #ff5f; */
`;

// export const CameraView = styled.View`
//   position: relative;
//   height: auto;
//   width: 100%;
//   margin: 0;
//   display: flex;
//   align-items: center;
//   /* background: #F5F5; */
// `;
export const FooterView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 10%;
  width: 100%;
  /* opacity: .9; */

  background: #222;
`;


export const TaskName = styled.Text`
  font-weight: bold;
  font-size: 16px;
  /* background: #ff5f; */
  margin: 0 4px;
`;

export const CameraButton = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
align-items: center;
height: auto;
width: auto;
border-radius: 40px;
border: 4px solid #fff;
padding: 12px;
margin: auto;
background-color: #58595B;
/* background-color: #58595B; */
`;

export const FlashButton = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
align-items: center;
position: absolute;
top: 12%;
left: 5%;
height: auto;
width: auto;
border-radius: 40px;
/* border: 4px solid #fff; */
/* padding: 12px; */
margin: 0 auto;
/* background-color: #58595B; */
/* background-color: #58595B; */
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
/* background-color: #58595B; */
`;
