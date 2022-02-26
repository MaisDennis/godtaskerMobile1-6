import React, { forwardRef} from 'react';
// import Icon from 'react-native-vector-icons/Feather'
import PropTypes from 'prop-types';
// -----------------------------------------------------------------------------
import { Container, TInput, AllIcon } from './styles';
// -----------------------------------------------------------------------------
function Input({ style, icon, ...rest }, ref) {
  // -----------------------------------------------------------------------------
  return (
    <Container style={style}>
      {icon && <AllIcon name={icon}/>}
      <TInput {...rest}/>
    </Container>
  );
}
Input.propTypes = {
  icon: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};
Input.defaultProps = {
  icon: null,
  style: {},
};

export default forwardRef(Input);
