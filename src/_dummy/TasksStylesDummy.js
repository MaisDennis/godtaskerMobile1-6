import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';
import Button from '~/components/Button';


export const AlignBottomView = styled.View`
  display: flex;
  flex-direction:column;
  margin: 0 auto;
  width: 100%;
  /* background-color: #ee4; */
`;
export const AlignView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  /* background-color: #ee4; */
`;
export const AlignCheckBoxView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: flex-start;
  width: 100%;
  /* background-color: #ee4; */
`;
export const AlignDatesView = styled.View`
  display: flex;
  flex-direction:column;
  width: auto;
  /* background-color: #ee4; */
`;

export const AlignDetailsView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: center;
  width: 100%;
  /* width: auto; */
  /* background-color: #666; */
`;
export const AsideView = styled.View`
display: flex;
flex-direction: column;
align-items: flex-end;
justify-content: center;
width: 10%;
  /* background-color: #336622; */
`;
export const AcceptButtonView = styled.View`
  display: flex;
  flex-direction:column;
  /* align-items: center; */
  height: auto;
  width: 100%;
  border-radius: 4px;
  /* background-color: #333e; */
`;

export const AcceptButton = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 108px;
  border-radius: 4px;
  background-color: #18A0FB;
`;

export const BellIcon = styled(Icon)`
font-size: 18px;
margin: 4px 0;
color: #999;
`;
export const ButtonIcon = styled(Icon)`
font-size: 21px;
padding: 4px;
color: #4433ee;
`;
export const BottomHeaderView = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: space-around;
  width: auto;
  /* background-color: #f44; */
`;
export const ButtonView = styled(TouchableOpacity)`
  width: auto;
  text-align: center;
  padding: 4px 8px;
  margin: 4px auto 16px;
  /* background: #f4f; */
`;
export const ButtonText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  color: #fff;
`;
export const ButtonWrapper = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  margin: 4px 0;
  /* background-color: #fe2; */
`;

export const CameraButton = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 108px;
  border-radius: 4px;
  background-color: #4433ee;
`;

export const CheckBoxView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  max-width: 80%;
  margin: 4px 0;
`;
export const Container = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 4px 0 4px;
  padding: 0;
  background-color: ${props => props.taskConditionIndex === 1
    ? '#fff'
    : '#eee'
  };
  /* background-color: #F5F5; */
`;
export const ConfirmButton = styled.View`
  display: flex;
  align-items: center;
/* background: ${props => props.pastDueDate == true ? '#f64C75' : '#009966'}; */
`;

export const DescriptionView = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  margin: 4px 0 8px;
  padding: 0 8px;
  /* background-color: #ee44; */
`;
export const DescriptionBorderView = styled.View`
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
  background-color: #F5F5F5;
  /* background-color: #f00; */
`;
export const DescriptionSpan = styled.Text`
  font-weight: normal;
  font-size: 12px;
  text-align: justify;
  line-height: 20px;
  margin: 4px;
  color: #222;
`;
export const DatesAndButtonView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  /* background-color: #fe2; */
`;
export const DetailsView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  width: auto;
  /* background-color: #fe2; */
`;
export const DueTimeView = styled.View`
  border-radius: 12px;
  padding: 0 8px;
  background: ${props => props.pastDueDate == true ? '#f64C75' : '#009966'};
`;
export const DueTime = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
`;

export const FinishedButton = styled(Button)`
background: #999;
`;

export const HeaderView = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  width: 100%;
  margin: 0 auto;
  padding: 0 8px;
  border-radius: 24px;
  /* background-color: #f00; */
`;
export const HrLine = styled.View`
  width: 100%;
  border-width: 0.5px;
  border-color: #ddd;
  margin: 4px auto;
`;
export const HrTitleLine = styled.View`
  width: 100%;
  border-width: 0.5px;
  border-color: #ccc;
  box-shadow: 2px 2px 2px #ccc;
  margin: 0 auto;
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

export const Image = styled.Image`
  height: 300px;
  width: 300px;
  margin: 8px;
  /* border-radius: 48px; */
  background-color: #f5f5f5;
`;
export const InnerStatusView = styled(LinearGradient)`
  height: 8px;
  border-radius: 16px;
  /* background-color: #f3c775; */
`;

export const Label = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  margin: 4px;
  margin-right: 4px;
  color: #888;
`;

export const LabelInitiated = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  margin-right: 4px;
  max-width: 60px;
  color: #009966;
`;

export const LabelEnded = styled.Text`
  font-weight: normal;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  margin-right: 4px;
  max-width: 60px;
  color: ${props => props.pastDueDate === true ? '#f64C75' : '#009966'};
`;

export const MainHeaderView = styled.View`
  width: 90%;
  /* background-color: #ee3; */
`;
export const MiddleHeaderView = styled.View`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: center;
  width: 100%;
  /* background-color: #f00; */
`;
export const ModalView = styled.View`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: auto;
  width: 100%;
  margin-bottom: 12px;
  align-items: flex-start;
  padding: 12px;
  border-radius: 12px;
  background-color: #f5f5f5;
  /* background-color: #ff0; */
`;
export const ModalText = styled.Text`
  font-weight: bold;
  font-size: 14px;
  margin: 12px auto;
  color: #222;
  /* background-color: #f00; */
`;

export const NameText = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '15px' : '14px'};
  color: #222;
`;

export const OuterStatusView = styled.View`
  display: flex;
  flex-direction:row;
  width: 75%;
  border-radius: 16px;
  margin: 8px 0;
  /* margin-bottom: 8px; */
  background-color: #F5F5F5;
`;

export const RejectTaskInput = styled.TextInput`
  display: flex;
  height: auto;
  width: 95%;
  padding: 12px;
  margin: 12px auto;
  border-radius: 12px;
  border-width: 1px;
  border-color: #ccc;
  background-color: #fff;
`;

export const RejectButton = styled.View`
  display: flex;
  flex-direction:row;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 108px;
  border-radius: 4px;
  background-color: #999;
`;

export const StartTimeView = styled.View`
padding: 0 8px;
border-radius: 12px;
background: ${props => props.initiated === null ? '#F5F5F5' : '#009966'};
`;
export const StartTime = styled.Text`
  font-weight: bold;
  font-size: ${Platform.OS === 'ios' ? '13px' : '12px'};
  /* background-color: #4433ee; */
`;

export const TagView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px 0 4px 8px;
  /* background-color: #4433ee; */
`;
export const Time = styled.Text`
  font-weight: bold;
  font-size: 14px;
  /* padding: 2px; */
  /* margin: 2px auto; */
  color: ${props => props.pastDueDate === true ? '#f64C75' : '#009966'};
`;
export const TopHeaderView = styled.View`
  display: flex;
  flex-direction:column;
  width: 100%;
  background-color: ${ props => props.toggleTask === true
    ? '#334466'
    : '#E7EEFF'
  };
`;
export const TitleView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: 90%;
  margin: 8px auto;
  color: #fff;
  /* background-color: #663333; */
`;
export const TaskIcon = styled(Icon)`
color: #222;
font-size: 21px;
margin-right: 8px;
color: ${props => props.toggleTask === true ? '#E7EEFF' : '#334466'};
`;
export const TitleText = styled.Text`
  font-weight: 700;
  font-size: ${Platform.OS === 'ios' ? '15px' : '14px'};
  color: ${props => props.toggleTask === true ? '#E7EEFF' : '#334466'};
`;
export const TitleIcon = styled(Icon)`
font-size: 20px;
margin-right: 8px;
color: #fff;
/* color: ${props => props.pastDueDate == true ? '#f64C75' : '#009966'}; */
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

export const UserImage = styled.Image`
  height: 36px;
  width: 36px;
  border-radius: 36px;
  border-width: 1px;
  border-color: #fff;

  background-color: #f5f5f5;
`;
export const UserImageBackground = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 40px;
  border-width: 1px;
  border-color: #334466;
  margin: 0 8px 0 4px;
  /* background-color: #666; */
`;
export const UserView = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 4px auto;
  /* background-color: #f00; */
`;
export const UnreadMessageCountText = styled.Text`
  font-size: 12px;
  margin: auto;
  /* background-color: #f00; */
`;

