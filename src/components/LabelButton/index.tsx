import React from 'react'
import { Text, View } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { LabelButtonProps } from './types'

export const LabelButton = (props: LabelButtonProps) => {
  const { label, name, addStyle = {}, ...attrs } = props

  return (
    <RectButton style={[styles.button, addStyle]} {...attrs}>
      {name && (
        <View style={styles.iconContainer}>
          <MaterialCommunityIcons name={name} size={30} color="white" />
        </View>
      )}
      <Text style={styles.text}>{label}</Text>
    </RectButton>
  )
}
