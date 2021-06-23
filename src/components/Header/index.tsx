import React from 'react'
import { Text, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'
import { useNavigation } from '@react-navigation/native'

import { colors } from '../../styles'
import { styles } from './styles'
import { HeaderProps } from './types'
import { IconButton } from '../IconButton'

export const Header = (props: HeaderProps) => {
  const { title, action } = props
  const { goBack } = useNavigation()
  return (
    <LinearGradient style={styles.container} colors={colors.headerGradient}>
      <IconButton name="chevron-left" onPress={goBack} />
      <Text style={styles.text}>{title}</Text>
      <View style={styles.action}>{action}</View>
    </LinearGradient>
  )
}
