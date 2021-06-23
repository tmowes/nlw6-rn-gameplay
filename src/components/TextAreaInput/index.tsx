import React from 'react'
import { TextInput } from 'react-native'

import { styles } from './styles'
import { TextAreaInputProps } from './types'

export const TextAreaInput = (props: TextAreaInputProps) => {
  const { ...attrs } = props
  return <TextInput style={styles.container} {...attrs} />
}
