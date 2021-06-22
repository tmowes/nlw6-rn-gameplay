import React from 'react'
import { Image } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { colors } from '../../styles'
import { styles } from './styles'
import { AvatarProps } from './types'

export const Avatar = (props: AvatarProps) => {
  const { imageUrl } = props
  return (
    <LinearGradient style={styles.container} colors={colors.inputGradient}>
      <Image source={{ uri: imageUrl }} style={styles.avatar} />
    </LinearGradient>
  )
}
