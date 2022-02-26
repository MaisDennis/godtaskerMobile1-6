import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather'
import { TouchableOpacity } from 'react-native'

const primaryFont = 'OpenSans-Bold';
const secondaryFont = 'OpenSans-Regular';

export const AddIcon = styled(Icon)`
font-weight: 700;
/* margin: 0 16px; */
color: #18A0FB;
`;

export const BannerImage = styled.Image`
  height: 60%;
  /* width: 100px; */
  width: 142px;
  margin: 0 auto;
  /* background: #f00; */
`;

export const BannerView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 50%;
  border-radius: 4px;
  padding: 0 12px;
  margin: 0 auto;
  /* background-color: #ee3; */

`;

export const BioText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  line-height: ${Platform.OS === 'ios' ? '20px' : '18px'};
  margin: 4px 8px;
`;

export const BlockLarge = styled.View`
  display: flex;
  flex-direction: column;
  height: auto;
  width: 100%;
  /* border-radius: 4px;
  border-width: 1px;
  border-color: #1B2432; */
  /* padding: 8px; */
  margin: 0;
  /* background-color: #4ee; */
`;

export const BlockLargeBoss = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  width: 100%;
  border-radius: 4px;
  border-width: 2px;
  border-color: #009966;
  margin: 0;
  padding: 8px 0;
  /* background-color: #f5f5f5; */
  /* background-color: #4ee; */
`;

export const BlockLargeWorker = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  width: 100%;
  border-radius: 4px;
  border-width: 2px;
  border-color: #334466;
  margin: 0;
  padding: 8px 0;
  /* background-color: #f5f5f5; */
  /* background-color: #f00; */
`;

export const BlockSegment = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  margin: 8px auto;
  /* padding: 8px; */

  /* background-color: #f5f5f5; */
  /* background-color: #ee3; */
`;

export const BlockSmallBoss = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  border-radius: 4px;
  border-width: 2px;
  border-color: #009966;
  margin: 0px;
  padding: 8px 0;
  /* background-color: #f5f5f5; */
  /* background-color: #ee2; */
`;

export const BlockSmallWorker = styled.View`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  height: auto;
  border-radius: 4px;
  border-width: 2px;
  border-color: #334466;
  margin: 0px;
  padding: 8px 0;
  /* background-color: #f5f5f5; */
  /* background-color: #ee2; */
`;

export const ButtonText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '15px' : '13px'};
  font-weight: bold;
  color: #fff;
`;

export const ButtonCancelView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 100%;
  border-radius: 8px;
  margin: 8px auto;
  padding: 0 16px;
  /* background-color: #1B2432; */
  background-color: #403F4C;
`;

export const ButtonView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 100%;
  border-radius: 8px;
  margin: 8px auto;
  padding: 0 16px;
  background-color: #1B2432;
  /* background-color: #18A0FB; */
`;

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 90%;
  margin: 0;
  /* background-color: #f5f5f5; */
    /* background-color: #f00; */
`;

export const Container = styled.SafeAreaView`
  display: flex;
  height: auto;
  width: 100%;
  /* background-color: ${Platform.OS === 'ios' ? '#ddd' : '#f5f5f5'}; */
  /* background-color: #f5f; */
`;

export const ContentView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  /* background-color: #f5f; */
`;

export const DateText = styled.Text`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  text-align: center;
  margin: auto 20px;
  color: #1B2432;
  /* background-color: #4433ee; */
`;

export const FirstNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: auto;
  margin: 0px 12px;
  padding: 0 4px;
  /* background-color: #4ee; */
`;

export const FollowButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 96px;
  height: 28px;
  border-radius: 16px;
  margin: 0px 8px 0 0;
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
  margin: 0px 8px 0 0;
  /* background-color: #ee4; */
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
  margin: 0 0 0 8px;
  /* background-color: #f5f; */
`;

export const FollowersWrapper = styled.View`
    display: flex;
  flex-direction: row;
  margin: 0 8px;
  /* background-color: #4ee; */
`;

export const FormScrollView = styled.ScrollView`
  display: flex;
  height: 100%;
  width: 100%;
  /* background-color: #ee3; */
`;

export const Header = styled.View`
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
height: 42px; /* maintain in px. */
width: 100%;
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
justify-content: flex-end;
width: 100%;
height: auto;
/* background-color: #f5f; */
`;

export const HeaderTouchable = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:  center;
  width: 12%;
  /* background-color: #f5f; */
`;

export const HrLine = styled.View`
  width: 90%;
  border-width: 0.5px;
  border-color: #ddd;
  margin: 0px auto;
`;

export const Iicon = styled(Icon)`
  color: #18A0FB;
`;

export const Input = styled.TextInput`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  height: auto;
  width: 100%;
  border-radius: 4px;
  border-width: 1px;
  border-color: #ccc;
  padding: 12px;
  color: #1B2432;
  background-color: #eee;
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
  margin: 2px 3px;
  color: #1B2432;
  /* background-color: #4433ee; */
`;

export const LabelBoldBoss = styled.Text`
  font-weight: bold;
  font-size: 14px;
  text-align: center;
  margin: 0 10%;
  color: #009966;
  /* background-color: #4433ee; */
`;

export const LabelBoldBoss2 = styled.Text`
  width: 24px;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  /* margin: 0 22px; */
  margin: 0 auto;
  color: #009966;
  /* background-color: #999; */
`;

export const LabelBoldRed = styled.Text`
  width: 24px;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  margin: 0 auto;
  color: #F64C75;
  /* background-color: #999; */
`;

export const LabelBoldSocialMedia = styled.Text`
  width: auto;
  font-weight: bold;
  font-size: 14px;
  text-align: left;
  margin: 0;
  color: #1B2432;
  /* background-color: #999; */
`;

export const LabelBoldWorker = styled.Text`
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  margin: 0 10%;
  color: #334466;
  /* background-color: #4433ee; */
`;

export const LabelBoldWorker2 = styled.Text`
  width: 24px;
  font-weight: bold;
  font-size: 12px;
  text-align: center;
  margin: 0 auto;
  color: #334466;
  /* background-color: #999; */
`;

export const LabelNormal = styled.Text`
  text-align: center;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  margin: 4px 0;
  color: #1B2432;
  /* background-color: #4ee; */
`;

export const LabelNormalBoss = styled.Text`
  text-align: center;
  font-size: 11px;
  margin: 2px 0;
  color: #009966;
  /* background-color: #4ee; */
`;

export const LabelNormalSocialMedia = styled.Text`
  text-align: left;
  font-size: 14px;
  width: auto;
  margin: 0;
  color: #1B2432;
  /* background-color: #4ee; */
`;

export const LabelNormalWorker = styled.Text`
  text-align: center;
  font-size: 11px;
  margin: 2px 0;
  color: #334466;
  /* background-color: #4ee; */
`;

export const LabelSmallBoss = styled.Text`
  text-align: center;
  font-size: 8px;
  width: 56px;
  color: #009966;
  /* background-color: #4ee; */
`;

export const LabelSmallBoss2 = styled.Text`
  text-align: center;
  font-size: 8px;
  font-weight: bold;
  width: 56px;
  color: #009966;
  /* background-color: #4ee; */
`;

export const LabelSmallRed = styled.Text`
  text-align: center;
  font-size: 10px;
  width: 56px;
  /* margin: 0 4px; */
  color: #F64C75;
  /* background-color: #4ee; */
`;

export const LabelSmallSpace = styled.Text`
  width: 8px;
`;

export const LabelSmallWorker = styled.Text`
  text-align: center;
  font-size: 8px;
  width: 56px;
  color: #334466;
  /* background-color: #4ee; */
`;

export const LabelSmallWorker2 = styled.Text`
  text-align: center;
  font-size: 8px;
  font-weight: bold;
  width: 56px;
  color: #334466;
  /* background-color: #4ee; */
`;

export const LabelSpace = styled.View`
  width: 40px;
`;

export const LeftView = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  width: 22%;
  height: 100%;
  /* background-color: #D4D3FF; */
`;

export const LinkedInWrapper = styled.View`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  align-items: center;
  height: auto;
  /* background-color: #ff0; */
`;

export const MarginView02 = styled.View`
  width: 100%;
  margin: 2px 0;
`;

export const MarginView04 = styled.View`
  width: 100%;
  margin: 4px 0;
`;

export const MarginView08 = styled.View`
  width: 100%;
  margin: 8px 0;
`;

export const MessageButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: auto;
  height: 28px;
  border-radius: 16px;
  margin: 0 24px 0 0;
  /* background-color: #4433ee; */
`;

export const MessageIcon = styled(Icon)`
  font-size: 21px;
  color: #18A0FB;
`;

export const ModalButtonView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 100%;
  border-radius: 8px;
  margin: 8px auto 60px;
  padding: 0 16px;
  /* background-color: #1B2432; */
  background-color: #18A0FB;
`;

export const ModalView = styled.View`
  align-items: center;
  height: auto;
  width: 90%;
  border-radius: 8px;
  margin: 0 auto;
  background-color: #fff;
  /* background-color: #f00; */
`;

export const ModalWrapper01 = styled.ScrollView`
  display: flex;
  flex-direction: column;

  width: 85%;
  height: auto;
  /* padding: 24px 12px 0; */
  border-radius: 8px;
  /* border: 1px solid #ccc; */
  background-color: #fff;
  /* background-color: #ee3; */
`;

export const ModalWrapper02 = styled.ScrollView`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px 12px;
  border-radius: 8px;
  /* border: 1px solid #ccc; */
  background-color: #fff;
  /* background-color: #ee3; */
`;

export const SearchBarTextInput = styled.View`
  height: 70%;
  width: 50%;
  border-radius: 4px;
  padding: 4px 12px;
  margin: 0 auto;
  background-color: #fff;
`;

export const SocialMediaButton = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content:  center;
  width: auto;
  padding: 4px;
  /* background-color: #f5f; */
`;

export const SocialMediaText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '13px' : '11px'};
  line-height: 18px;
  padding: 4px;
  /* background-color: #4ee; */
`;

export const SocialMediaView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 40%;
  margin: 0 8px;
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
  /* background-color: #f5f5f5; */
    /* background-color: #f00; */
`;

export const SpaceView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 100%;
  width: 24%;
  /* background-color: #fff; */
  /* background-color: #f5f; */
`;

export const StatusCircleBoss = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  margin: 0 auto;
  background-color: #009966;
`;

export const StatusCircleRed = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  margin: 0 auto;
  background-color: #F64C75;
`;

export const StatusCircleWorker = styled.View`
  height: 8px;
  width: 8px;
  border-radius: 8px;
  margin: 0 auto;
  background-color: #334466;
`;

export const StatusLineBoss = styled.View`
  width: 56px;
  border-width: 0.5px;
  border-color: #009966;
  margin: 0 auto;
`;

export const StatusLineWorker = styled.View`
  width: 56px;
  border-width: 0.5px;
  border-color: #334466;
  margin: 0 auto;
`;

export const StatusView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: auto;
  width: 90%;
  margin: 0;
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
  border-width: 1px;
  border-width: 2px;
  border-color: #009966;
  background-color: #009966;
`;
export const UserInfoView = styled.View`
width: 78%;
/* background-color: #4433ee; */
`;

export const UserNameText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '18px' : '16px'};
  font-weight: bold;
  margin: 0 8px;
  color: #009966;
`;

export const UserNameWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0px 8px;
  /* background-color: #009; */
`;

export const UserPointsText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '18px' : '16px'};
  font-weight: bold;
  margin: auto 8px;
  color: #009966;
`;

export const UserView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: auto;
  width: 100%;
  /* background-color: #999; */
`;


export const UserText = styled.Text`
  font-weight: 700;
  font-size: 14px;
  padding: 4px 0;
`;
export const UserAboutText = styled.Text`
  font-size: 12px;
  color: #666;
`;
