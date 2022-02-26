import React from 'react';
import { StyleSheet } from 'react-native';
import DropShadow from "react-native-drop-shadow";
// -----------------------------------------------------------------------------
import { Container, MinusButton, PlusButton, Input, NumberIcon } from './styles'
// -----------------------------------------------------------------------------
const styles = StyleSheet.create({
  shadowProp: {
      shadowColor: '#666',
      shadowOffset: {width: 2, height: 2},
      shadowOpacity: 0.5,
      shadowRadius: 4,
    },
})

export default function NumberInput({ numberInputValue, setNumberInputValue }) {
  function handleMinus() {
    if (numberInputValue === 0) {
      return
    }
    else {
      let minus = parseInt(numberInputValue) - 1
      setNumberInputValue(minus)
    }

  }

  function handlePlus() {
    if (numberInputValue === 10) {
      return
    }
    else {
      let plus = parseInt(numberInputValue) + 1
      setNumberInputValue(plus)
    }
  }
  // ---------------------------------------------------------------------------
  return (
    <Container>
      <DropShadow style={styles.shadowProp}>
        <MinusButton onPress={handleMinus}>
          <NumberIcon name="minus"/>
        </MinusButton>
      </DropShadow>

      <Input
        value={numberInputValue}
        onChangeText={setNumberInputValue}

      >{numberInputValue}</Input>
      <DropShadow style={styles.shadowProp}>
        <PlusButton onPress={handlePlus}>
          <NumberIcon name="plus"/>
        </PlusButton>
      </DropShadow>

    </Container>
  )
}
