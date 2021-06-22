import React from 'react'

import { LinearGradient } from 'expo-linear-gradient'

import { styles } from './styles'
import { LinearBackgroundProps } from './types'
import { colors } from '../../styles'

export const LinearBackground = (props: LinearBackgroundProps) => {
  const { children } = props
  return (
    <LinearGradient style={styles.container} colors={colors.bgGradient}>
      {children}
    </LinearGradient>
  )
}
