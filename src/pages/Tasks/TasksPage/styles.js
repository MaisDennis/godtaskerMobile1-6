import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'

export const AddIcon = styled(FeatherIcon)`
font-weight: 700;
margin: 0 auto;
color: #18A0FB;
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
height: 42px; /* maintain in px. */
background-color: #fff;
/* background-color: #f00; */
`;
export const HeaderImage = styled.Image`
height: 30px;
width: 32px;
margin: 0 16px;
/* background: #f00; */
`;
export const HeaderTabView = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
width: 100%;
height: auto;
padding: 2px 0;
background-color: #fff;
/* background-color: #f5f; */
`;
export const HeaderTouchable = styled(TouchableOpacity)`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
width: 15%;
/* background-color: #f5f; */
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 0 },
})`
  height: 100%;
`;

export const SearchBarTextInput = styled.TextInput`
  height: 70%;
  width: 70%;
  border: 1px;
  border-color: #ccc;
  border-radius: 4px;
  padding: 4px 12px;
  margin: 0 auto;
  background-color: #eee;
`;

export const SpaceView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 15%;
  /* background-color: #f5f; */
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  color: #999;
  margin: 12px auto 0;
  /* background-color: #4433ee; */
`;
export const TitleNumber = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  color: #999;
  margin: 0 auto 0;
  /* background-color: #4433ee; */
`;

export const UpperTabView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 33%;
  /* background-color: #f5f; */
`;
export const UpperTabText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-weight: bold;
  color: #ccc;
`;

export const UpperTabSelectedBarView = styled.View`
  position: absolute;
  top: 100%;
  height: 4px;
  width: 100%;
  background-color: #1B2432;
`;

export const UpperTabSelectedView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 33%;
`;

export const UpperTabSelectedText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-weight: bold;
  color: #1B2432;
`;

// export const UpperTabView = styled(TouchableOpacity)`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   height: 28px;
//   width: 25%;
//   border-width: 1px;
//   border-style: solid;
//   border-color: #ccc;
//   border-radius: 16px;
//   margin: 4px auto;
//   background-color: #fff;
// `;
// export const UpperTabText = styled.Text`
//   font-size: 12px;
//   font-weight: bold;
//   color: #ccc;
// `;

// export const UpperTabSelectedView = styled(TouchableOpacity)`
//   display: flex;
//   flex-direction: row;
//   align-items: center;
//   justify-content: center;
//   height: 28px;
//   width: 25%;
//   border-radius: 16px;
//   margin: 4px auto;
//   background-color: #1B2432;
// `;
// export const UpperTabSelectedText = styled.Text`
//   font-size: 12px;
//   font-weight: 700;
//   color: #fff;
// `;
