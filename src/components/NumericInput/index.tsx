import React from 'react'
import { TextInput } from 'react-native'

import { styles } from './styles'
import { NumericInputProps } from './types'

export const NumericInput = (props: NumericInputProps) => {
  const { ...attrs } = props
  return <TextInput style={styles.container} keyboardType="numeric" {...attrs} />
}
