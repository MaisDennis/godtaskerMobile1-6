import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
// -----------------------------------------------------------------------------
const primaryFont = 'OpenSans-Bold';
const secondaryFont = 'OpenSans-Regular';

export const ButtonWrapper = styled(TouchableOpacity)`
  align-items: center;
  justify-content: center;
  height: ${props => props.small == true ? '36px' : '40px'};
  width: ${props => props.small == true ? '108px' : '100%'};
  border-radius: 4px;
  border: ${props => props.type == 'inverted'
    ? '2px'
    : 'none'
  };
  border-color: ${props => props.type == 'inverted'
    ? '#18A0FB'
    : 'transparent'
  };
  margin: 0 auto;
  background-color: ${props => props.type == 'submit'
    ? '#18A0FB'
    : (props => props.type == 'inverted' ? 'transparent' : '#403F4C')
  };
`;

export const ButtonText = styled.Text`
  font-size: ${Platform.OS === 'ios'
    ? (props => props.text == 'secondary' ? '14px' : '15px')
    : (props => props.text == 'secondary' ? '12px' : '13px')
  };
  font-weight: bold;
  font-family: ${Platform.OS === 'ios' ? 'system font' : primaryFont};

  color: ${props => props.type == 'inverted' ? '#18A0FB' : '#fff'};
`;

export const Container = styled.View`
  width: ${props => props.small == true ? 'auto' : '100%'};
  height: auto;
  margin: ${props => props.type == 'submit'
    ? '0 auto'
    : (props => props.type == 'inverted'
      ? '0 auto'
      : '0'
  )};
  /* background-color: #f5f; */
`;
