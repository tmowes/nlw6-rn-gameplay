import React from 'react'

import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { Feather } from '@expo/vector-icons'

import { RADIUS, styles, width } from './styles'
import { ButtonProps } from './types'
import { Side } from '../Wave/types'

export const Button = (props: ButtonProps) => {
  const { position, side, activeSide } = props

  const isLeft = side === Side.LEFT

  const animatedStyle = useAnimatedStyle(() => ({
    left: isLeft ? position.x.value - RADIUS * 2 : width - position.x.value,
    top: position.y.value - RADIUS,
    opacity: withTiming(activeSide.value === Side.NONE ? 1 : 0),
  }))

  return (
    <Animated.View style={[styles.container, animatedStyle]}>
      <Feather
        name={`chevron-${isLeft ? 'right' : 'left'}` as const}
        size={24}
        color="white"
      />
    </Animated.View>
  )
}
