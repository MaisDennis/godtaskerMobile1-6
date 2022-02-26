import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const primaryFont = 'OpenSans-Bold';
const secondaryFont = 'OpenSans-Regular';

export const AcceptButtonView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: center;
  height: auto;
  width: 85%;
  /* background-color: #f5f; */
`;

export const AlignCheckBoxView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  width: 100%;
  margin: ${Platform.OS === 'ios' ? '4px 0' : '0'};
  /* background-color: #ee4; */
`;

export const AlignDetailsView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  width: 85%;
  /* background-color: #666; */
`;

export const BellIcon = styled(Icon)`
font-size: 24px;
margin: auto 0;
color: #1B2432;
/* background-color: #ee2; */
`;

export const BodyView = styled.View`
  height: 100%;
  width: 66%;
  /* background-color: #f44; */
`;

export const BodyWrapper = styled.View`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: auto;
  margin: 0 16px;
  /* background-color: #f44; */
`;

export const BottomHeaderView = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0px auto;
  /* background-color: #f44; */
`;

export const ButtonIcon = styled(Icon)`
font-size: 21px;
padding: 4px;
color: #18A0FB;
`;

export const ButtonWrapper = styled.View`
  display: flex;
  justify-content: center;
  flex-direction: row;
  height: auto;
  width: 100%;
  /* background-color: #fe2; */
`;

export const CenterView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 90%;
  /* background-color: #f00; */
`;

export const CheckBoxView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 80%;
  margin: 0 8px;
  /* background-color: #10ff; */
`;

export const Container = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin: 2px 0 0;
  background-color: ${props => props.taskConditionIndex === 1
    ? '#fff'
    : '#eee'
  };
  /* background-color: #F5F5; */
`;

export const ConfirmIcon = styled(Icon)`
font-size: 24px;
font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
color: #19AE7C;
  /* background-color: #f00; */
`;

export const DatesAndButtonView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 0px auto;
  /* background-color: #e4ee; */
`;

export const DescriptionView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  /* background-color: #ee44; */
`;

export const DescriptionSpan = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  text-align: justify;
  line-height: 20px;
  max-width: 85%;
  margin: 4px;
  margin-right: 8px;
  color: #1B2432;
`;

export const DueTimeView = styled.View`
  border-radius: 4px;
  padding: 0 12px;
  background: ${props => props.pastDueDate == true ? '#EBA5A5' : '#D0ECE3'};
`;

export const DueTime = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
`;

export const FormScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  width: 100%;
  border-radius: 8px;
  background-color: #fff;
  /* background-color: #f5f; */
`;

export const HrLine = styled.View`
  width: 90%;
  border-width: 0.5px;
  border-color: #ddd;
  margin: 0px auto;
`;

export const IconsView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  /* background-color: #4433ee; */
`;

export const ImageView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 36px;
  width: 100%;
  /* padding: 4px; */
  /* background-color: #F5F5; */
`;

export const ImageWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-self: center;
`;

export const Image = styled.Image`
  height: 300px;
  width: 300px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  /* margin: 8px; */
  /* border-radius: 48px; */
  background-color: #f5f5f5;
`;

export const InnerStatusView = styled(LinearGradient)`
  height: 8px;
  border-radius: 16px;
  /* background-color: #f3c775; */
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  margin-right: 8px;
  color: #1B2432;
`;

export const LabelInitiated = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  margin-right: 8px;
  max-width: 60px;
  color: #19AE7C;
`;

export const LabelEnded = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  margin-right: 4px;
  max-width: 60px;
  color: ${props => props.pastDueDate === true ? '#f64C75' : '#19AE7C'};
`;

export const LastMessageText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  padding: 0 4px;
  /* background-color: #f5f5; */
`;

export const LastMessageTimeText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '11px' : '9px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  color: #666;
`;

export const LastMessageTimeView = styled.View`
`;

export const LastMessageView = styled.View`
border-radius: 16px;
/* padding: 4px; */
width: 100%;
/* background-color: #ee3; */
`;

// export const LastMessageView = styled(LinearGradient)`
// border-radius: 16px;
// padding: 4px;
// width: 100%;
// /* background-color: #ee3; */
// `;

export const LeftContactView = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  width: 22%;
  height: 100%;
  /* background-color: #eee; */
  /* background-color: lightsalmon; */
`;

export const LeftMessageView = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  width: 22%;
  height: 100%;
  /* background-color: #ff892e; */
  background-color: #eee;
`;

export const LeftUserView = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  width: 22%;
  height: 100%;
  background-color: #D0ECE3;
  /* background-color: lightseagreen; */
`;

export const LeftView = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  width: 22%;
  height: 100%;
  background-color: #D4D3FF;
  /* background-color: lightskyblue; */
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

export const MessageIcon = styled(Icon)`
font-size: 16px;
color: #000;
color: #18A0FB;
`;

export const ModalText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  margin: 0 auto;
  color: #1B2432;
  /* background-color: #f00; */
`;

export const ModalView = styled.View`
  display: flex;

  align-items: center;
  width: 90%;
  height: auto;
  border-radius: 8px;
  margin: 0 auto;
  background-color: #fff;
  /* background-color: #f00; */
`;

export const NameText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  max-width: 80px;
  color: #1B2432;
`;

export const OuterStatusView = styled.View`
  display: flex;
  flex-direction:row;
  width: 75%;
  border-radius: 16px;
  margin-right: 8px;
  background-color: #ddd;
`;

export const RejectTaskInput = styled.TextInput`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  height: auto;
  width: 85%;
  padding: 12px;
  margin: 0px auto;
  border-radius: 4px;
  border-width: 1px;
  border-color: #ccc;
  background-color: #eee;
`;

export const RightView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;
  width: 12%;
  /* background-color: #ddd; */
`;

export const StartTimeView = styled.View`
border-radius: 4px;
padding: 0 12px;
background: ${props => props.initiated === null ? '#ddd' : '#D0ECE3'};
`;

export const StartTime = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
`;

export const TagView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 8px 0;
  /* background-color: #ee3; */
`;

export const TitleView = styled.View`
    display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  /* background-color: #663333; */
`;
export const TaskIcon = styled(Icon)`
  /* font-size: ${Platform.OS === 'ios' ? '22px' : '20px'}; */
  font-size: 20px;
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  /* color: #000; */
  color: #18A0FB;
  /* background-color: #f00; */
`;
export const TaskAttributesView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 60px;
  border-radius: 4px;
  background: ${ props => props.taskAttributes === 0
    ? '#F3E675'
    : props => props.taskAttributes === 1
      ? '#f3c775'
      : props => props.taskAttributes === 2
        ? '#ED7777'
        : '#fff'
  };
`;

export const TextBio = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-weight: normal;
  margin: 0px 4px;
  color: #666;
  /* background-color: #ee3; */
`;

export const TextPoints = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '13px' : '11px'};
  font-weight: normal;
  margin: 0px 4px;
  color: #18A0FB;
  color: #334466;
`;

export const TitleIcon = styled(Icon)`
  font-size: 16px;
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  margin-right: 8px;
  color: #334466;
`;

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  color: #334466;
`;

export const TitleUserText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  color: #19AE7C;
`;

export const TitleTextModal = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};
  width: auto;
  text-align: left;
  color: #334466;
  /* background-color: #4433ee; */
`;

export const ToText = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  max-width: 80px;
  margin-right: 16px;
  color: #1B2432;

  /* background-color: #4433ee; */
`;

export const ToWorkerView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 0px auto;
  /* background-color: #4433ee; */
`;

export const UserImage = styled.Image`
  height: 60px;
  width: 60px;
  border-radius: 60px;
  border-width: 1px;
  border-color: #fff;
  background-color: #f5f5f5;
`;
export const UserImageBackground = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 64px;
  width: 64px;
  border-radius: 64px;
  border-width: 1px;
  border-color: #334466;
  /* background-color: #fff; */
  /* background-color: #666; */
`;

export const UnreadMessageCountText = styled.Text`
  font-size: 10px;
  font-family: ${Platform.OS === 'ios' ? 'system font' : secondaryFont};
  /* background-color: #f00; */
`;

