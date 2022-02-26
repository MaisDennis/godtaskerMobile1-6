import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import DropShadow from "react-native-drop-shadow";
// -----------------------------------------------------------------------------
import { Container, ButtonText, ButtonWrapper } from './styles';
// -----------------------------------------------------------------------------
export default function ButtonForIcon({
  children,
  loading,
  type,
  small,
  ...rest
}) {
  const styles = StyleSheet.create({
    shadowProp: {
        shadowColor: '#666',
        shadowOffset: {width: 2, height: 0.5},
        shadowOpacity: 0.5,
        shadowRadius: 4,
      },
  })
  // -----------------------------------------------------------------------------
  return (
    <Container small={small}>
      <ButtonWrapper type={type} small={small} {...rest}>
        {loading ? (
          <ActivityIndicator size="small" color="#FFF" />
        ) : (
          <ButtonText type={type}>{children}</ButtonText>
        )}
      </ButtonWrapper>
    </Container>
  );
}
ButtonForIcon.propTypes = {
  // children: PropTypes.object.isRequired,
  loading: PropTypes.bool,
};
ButtonForIcon.defaultProps = {
  loading: false,
};
