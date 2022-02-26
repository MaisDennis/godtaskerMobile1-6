import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'


export const BioText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  line-height: ${Platform.OS === 'ios' ? '20px' : '18px'};
  margin: 4px 8px;
  /* background-color: #4433ee; */
`;

export const BlockLarge = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  border-radius: 8px;
  border-width: 1px;
  border-color: #1B2432;
  margin-bottom: 32px;
  padding: 8px;

  /* background-color: #f5f5f5; */
  /* background-color: #4ee; */
`;

export const Container = styled.SafeAreaView`
  height: auto;
  /* padding: 12px 0; */
  /* background-color: #fff; */
  background-color: ${Platform.OS === 'ios' ? '#ddd' : '#f5f5f5'};
`;

export const ContentView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  margin: 0;
  /* background-color: #f5f5f5; */
  /* background-color: #f5f; */
`;

export const FirstNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 8px;
`;

export const FollowButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 28px;
  border-radius: 16px;
  margin: 4px 0;
  background-color: #18A0FB;
  /* background-color: #4433ee; */
`;

export const FollowText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  color: #fff;
`;

export const FollowingButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 28px;
  border-radius: 16px;
  border-width: 2px;
  border-color: #18A0FB;
  margin: 4px 0;
  background-color: #fff;

`;

export const FollowingText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  color: #18A0FB;
`;

export const FollowersView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  margin: 0px 8px;
  /* background-color: #f5f5f5; */
  /* background-color: #f5f; */
`;

export const FollowersWrapper = styled.View`
    display: flex;
  flex-direction: row;
  align-items: center;
`;

export const FormScrollView = styled.ScrollView`
  height: auto;
  width: 100%;
  /* margin: 12px 0; */
  background-color: #fff;
  /* background-color: #f5f; */
`;

export const HeaderTabView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-end;
/* width: 95%; */
height: auto;
/* padding: 4px 0; */
margin: 8px 16px;
background-color: #fff;
/* background-color: #f5f; */
`;

export const Iicon = styled(Icon)`
  color: #18A0FB;
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  margin: 0;
  color: #1B2432;
  /* background-color: #4433ee; */
`;

export const LabelBold = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  text-align: center;
  margin: 2px 4px;
  color: #1B2432;
  /* background-color: #4433ee; */
`;

export const LabelBold2 = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  text-align: center;
  margin: 2px 4px;
  color: #1B2432;
  /* background-color: #4433ee; */
`;

export const LabelNormal = styled.Text`
  text-align: center;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  margin: 4px 0;
  color: #1B2432;
  /* background-color: #4ee; */
`;

export const List = styled.FlatList.attrs({
  showsVerticalScrollIndicator: true,
  contentContainerStyle: { padding: 0, margin: 0 },
})`
  height: 100%;
`;

export const MessageButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 28px;
  border-radius: 16px;
  margin: auto 20px;
  background-color: #fff;
  /* background-color: #4433ee; */
`;

export const MessageIcon = styled(Icon)`
  font-size: 21px;
  color: #18A0FB;
`;

export const SocialMediaText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '13px' : '11px'};
  line-height: 18px;
  padding: 4px;
  /* background-color: #4ee; */
`;

export const SocialMediaView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 40%;
  margin: 8px;
  /* background-color: #f5f5f5; */
    /* background-color: #fee; */
`;

export const SocialMediaWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 90%;
  margin: 4px 0;
  /* background-color: #f5f5f5; */
    /* background-color: #f00; */
`;

export const StatusView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 90%;
  margin: 4px 0;
  /* background-color: #f5f5f5; */
  /* background-color: #f00; */
`;

export const UserInfoView = styled.View`
display: flex;
flex-direction: column;
width: auto;
padding: 0 12px;
/* background-color: #4433ee; */
`;

export const UserNameText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '18px' : '16px'};
  font-weight: bold;
  margin: auto 8px;
  color: #18A0FB;
`;

export const UserProfileView = styled.View`
display: flex;
flex-direction: row;
align-items: center;
/* justify-content: space-between; */
height: auto;
width: auto;
margin: 0 20px;
/* background-color: #f5f5f5; */
/* background-color: #f00; */
`;

export const UserImage = styled.Image`
  height: 70px;
  width: 70px;
  border-radius: 70px;
  border-width: 1px;
  border-color: #fff;
  background-color: #f5f5f5;
`;

export const UserImageBackgroundView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 74px;
  width: 74px;
  border-radius: 74px;
  border-width: 2px;
  border-color: #18A0FB;
  background-color: #18A0FB;
`;

export const UserView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 100%;
  background-color: #fff;
  margin: 8px 16px 4px;
  /* background-color: #999; */
`;
