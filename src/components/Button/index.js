import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import DropShadow from "react-native-drop-shadow";
// -----------------------------------------------------------------------------
import { Container, ButtonText, ButtonWrapper } from './styles';
// -----------------------------------------------------------------------------
export default function Button({
  children,
  loading,
  text,
  type,
  small,
  ...rest
}) {
  const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#666',
        shadowOffset: {width: 0.5, height: 1},
        shadowOpacity: 0.5,
        shadowRadius: 1,
      },
  })
  // -----------------------------------------------------------------------------
  return (
    <Container
      type={type}
      small={small}
      text={text}
    >
      <DropShadow style={styles.shadowProp}>
        <ButtonWrapper type={type} small={small} text={text} {...rest}>
          {loading ? (
            <ActivityIndicator size="small" color="#FFF" />
          ) : (
            <ButtonText type={type} text={text}>{children}</ButtonText>
          )}
        </ButtonWrapper>
      </DropShadow>
    </Container>
  );
}
Button.propTypes = {
  // children: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};
Button.defaultProps = {
  loading: false,
};
