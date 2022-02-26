import React from 'react'
import { Container, SearchBarTextInput } from './styles';

export default function SearchBar({
  children,
  onChangeText,
  returnKeyType,
  value,
}) {
  // console.log(data)

  return (
    <SearchBarTextInput
      placeholder='Search'
      onChangeText={onChangeText}
      returnKeyType={returnKeyType}
      value={value}
    />
  )
}
