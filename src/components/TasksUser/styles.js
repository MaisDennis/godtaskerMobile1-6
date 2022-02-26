import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

const primaryFont = 'OpenSans-Bold';
const secondaryFont = 'OpenSans-Regular';

export const AcceptButton = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 108px;
  border-radius: 4px;
  background-color: #18A0FB;
`;

export const AcceptButtonView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
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
  /* background-color: #4ee; */
`;

export const AlignDetailsView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  width: 85%;
  /* background-color: #666; */
`;

export const BackButton = styled(TouchableOpacity)`
  height: 40px;
  width: 100%;
  border-radius: 4px;
  padding: 0 16px;
  background-color: #403F4C;
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
  width: 80%;
  margin: 0 auto;
  /* background-color: #f44; */
`;

export const BottomHeaderView = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 8px auto 4px;
  /* background-color: #f44; */
`;

export const ButtonText = styled.Text`
  font-size: ${Platform.OS === 'ios' ? '15px' : '13px'};
  font-weight: bold;
  margin: auto;
  color: #fff;
  /* color: #44ccee; */
`;

export const ButtonView = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 20%;
  text-align: center;
  margin: 0 auto;
  /* background: #f4f; */
`;

export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin: 4px 0;
  /* background-color: #fe2; */
`;

export const CenterView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80%;
  margin: 12px 0;
  background-color: #e44;
`;

export const CheckBoxView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 80%;
  margin: 0 8px;
  /* background-color: #4433ee; */
`;

export const Container = styled(TouchableOpacity)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  margin: 2px 0 0;
  padding: 0;
  background-color: ${ props => props.taskConditionIndex === 1
    ? '#fff'
    : '#eee'
  };
  /* background-color: #F5F5; */
`;

export const DatesAndButtonView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 8px auto 0;
  /* background-color: #4433ee; */
`;
export const DescriptionView = styled.View`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 8px 0;
  /* background-color: #e44; */
`;

export const DescriptionSpan = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  text-align: justify;
  line-height: 20px;
  max-width: 85%;
  margin: 4px;
  margin-right: 8px;
  color: #1B2432;
`;

export const DetailsView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  margin: 8px 0;
  /* background-color: #4433ee; */
`;

export const DueTimeView = styled.View`
  border-radius: 4px;
  padding: 0 12px;
  background: ${props => props.pastDueDate == true ? '#EBA5A5' : '#D0ECE3'};
`;
export const DueTime = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
`;

export const FormScrollView = styled.ScrollView.attrs({
  contentContainerStyle: {
    alignItems: 'center',
  },
})`
  width: 100%;
  border-radius: 8px;
  padding-bottom: 12px;
  background-color: #fff;
  /* background-color: #f5f; */
`;

export const IconsView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 90%;
  /* background-color: #4433ee; */
`;

export const Image = styled.Image`
  height: 300px;
  width: 300px;
  margin: 8px;
  /* border-radius: 48px; */
  background-color: #f5f5f5;
`;

export const ImageView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  min-height: 36px;
  width: 100%;
  padding: 4px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 4px;
  background-color: #f5f5f5;
  /* background-color: #F5F5; */
`;

export const ImageWrapper = styled.View`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 95%;
  margin-top: 4px;
  margin-bottom: 8px;
  /* background-color: #ee44; */
`;

export const InnerStatusView = styled(LinearGradient)`
  height: 8px;
  border-radius: 16px;
`;

export const Label = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  margin-right: 8px;
  color: #1B2432;
`;

export const LabelInitiated = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  margin-right: 8px;
  max-width: 60px;
  color: #19AE7C;
  /* background-color: #999; */
`;

export const LabelEnded = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  margin-right: 4px;
  max-width: 60px;
  color: ${props => props.pastDueDate === true ? '#AE1919' : '#19AE7C'};
`;

export const LeftView = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  width: 22%;
  height: 100%;
  background-color: #D0ECE3;
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

export const ModalText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  font-family: ${secondaryFont};
  margin: 0 auto;
  color: #1B2432;
  /* background-color: #f00; */
`;

export const ModalView = styled.View`
  align-items: center;
  width: 100%;
  height: auto;
  border-radius: 8px;
  padding: 12px 0;
  /* background-color: #f5f; */
`;

export const NameText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  max-width: 80px;
  color: #1B2432;
  /* background-color: #4433ee; */
`;

export const OuterStatusView = styled.View`
  display: flex;
  flex-direction:row;
  width: 75%;
  border-radius: 16px;
  margin: 8px 0;
  margin-right: 8px;
  background-color: #ddd;
`;

export const RejectButton = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 108px;
  border-radius: 8px;
  background-color: #403F4C;
`;

export const RightView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 12%;
  margin: 16px 0;
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
`;

export const TaskAttributesView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  /* width: 60px; */
  border-radius: 4px;
  padding: 0 12px;
  background: ${ props => props.taskAttributes === 0
    ? '#FCFF7E'
    : props => props.taskAttributes === 1
      ? '#FFDB7E'
      : props => props.taskAttributes === 2
        ? '#FF7E7E'
        : '#fff'
  };
`;

export const TaskIcon = styled(Icon)`
/* font-size: ${Platform.OS === 'ios' ? '22px' : '20px'}; */
font-size: 20px;
/* color: #000; */
color: #18A0FB;
  /* background-color: #f00; */
`;

export const TitleIcon = styled(Icon)`
font-size: 16px;
margin-right: 8px;
color: #19AE7C;
/* background-color: #4ee; */
`;

export const TitleText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  width: 100%;
  color: #19AE7C;
  width: auto;
  /* background-color: #4433ee; */
`;

export const TitleTextModal = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '16px' : '14px'};
  width: auto;
  text-align: left;
  color: #19AE7C;
  width: auto;
  /* background-color: #4433ee; */
`;

export const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 8px auto 0;
  color: #fff;
  /* background-color: #663333; */
`;

export const TitleBorderView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-color: #fff;
  /* background-color: #f00; */
`;


export const TagView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  /* background-color: #0ddcef; */
`;
export const Time = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: ${props => props.pastDueDate === true ? '#f64C75' : '#19AE7C'};
`;

export const ToText = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '14px' : '12px'};
  max-width: 80px;
  margin-right: 8px;
  color: #1B2432;

  /* background-color: #4433ee; */
`;

export const ToWorkerView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  margin: 8px auto 0;
  /* background-color: #4433ee; */
`;

export const UnreadMessageCountText = styled.Text`
  font-size: 12px;
  margin: auto;
  /* background-color: #f00; */
`;

export const UserView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px 8px;
  /* background-color: #666; */
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
  border-color: #19AE7C;
  /* background-color: #666; */
`;
