import React from 'react'
import { Text, View } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

import { styles } from './styles'
import { LabelButtonProps } from './types'
import { colors } from '../../styles'

export const LabelButton = (props: LabelButtonProps) => {
  const { label, name, addStyle = {}, ...attrs } = props

  return (
    <RectButton style={[styles.button, addStyle]} {...attrs}>
      {name && (
        <View style={[styles.iconContainer, { borderRightWidth: label ? 2 : 0 }]}>
          <MaterialCommunityIcons name={name} size={30} color={colors.text} />
        </View>
      )}
      {label && <Text style={styles.text}>{label}</Text>}
    </RectButton>
  )
}
