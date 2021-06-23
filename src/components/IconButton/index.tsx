import React from 'react'
import { Text, View } from 'react-native'

import { BorderlessButton } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { IconButtonProps } from './types'
import { colors } from '../../styles'

export const IconButton = (props: IconButtonProps) => {
  const { name, addStyle = {}, ...attrs } = props

  return (
    <BorderlessButton style={[styles.button, addStyle]} {...attrs}>
      <MaterialCommunityIcons name={name} size={30} color={colors.text} />
    </BorderlessButton>
  )
}
