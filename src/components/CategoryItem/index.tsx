import React from 'react'
import { Text, View } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'
import { RFValue } from 'react-native-responsive-fontsize'

import { styles } from './styles'
import { CategoryItemProps } from './types'
import { colors } from '../../styles'

export const CategoryItem = (props: CategoryItemProps) => {
  const { label, icon: Icon, isSelected = false, addStyle = {}, ...attrs } = props

  return (
    <LinearGradient style={[styles.container, addStyle]} colors={colors.inputGradient}>
      <RectButton style={styles.button} {...attrs}>
        <View style={[styles.content, { opacity: isSelected ? 1 : 0.5 }]}>
          <View style={isSelected ? styles.selected : styles.deselected} />
          <Icon height={RFValue(48)} width={RFValue(48)} />
          <Text style={styles.text}>{label}</Text>
        </View>
      </RectButton>
    </LinearGradient>
  )
}
