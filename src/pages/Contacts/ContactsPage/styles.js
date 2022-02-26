import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'

export const AddIcon = styled(Icon)`
font-weight: 700;
margin: 0 auto;
color: #18A0FB;
`;

export const Container = styled.SafeAreaView`
  height: 100%;
  /* background-color: ${Platform.OS === 'ios' ? '#ddd' : '#f5f5f5'}; */
  /* background: #4433ee; */
`;

export const Header = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 42px; /* maintain in px. */
/* width: 100%; */
background-color: #fff;
/* background-color: #f5f; */
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
padding: 4px 0;
background-color: #fff;
/* background-color: #f5f; */
`;

export const HeaderTouchable = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:  flex-end;
  width: 15%;
  /* background-color: #f5f; */
`;


export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: { padding: 0, margin: 0 },
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
  font-size: 12px;
  color: #999;
  margin: 12px auto 0;
`;

export const UpperTabSelectedView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 40%;
  border-radius: 16px;
  margin: 4px auto;
  background-color: #1B2432;
`;
export const UpperTabSelectedText = styled.Text`
  font-size: 12px;
  font-weight: 700;
  color: #fff;
`;

export const UpperTabView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 28px;
  width: 40%;
  /* border-width: 1px; */
  /* border-style: solid; */
  /* border-color: #ccc; */
  /* border-radius: 16px; */
  margin: 0 auto;
  /* background-color: #f5f; */
`;
export const UpperTabText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-weight: 700;
  color: #1B2432;
`;
