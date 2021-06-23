import React, { ReactNode } from 'react'
import { View } from 'react-native'

import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedProps,
  useDerivedValue,
  withSpring,
} from 'react-native-reanimated'
import Svg, { Path } from 'react-native-svg'
import MaskedView from '@react-native-community/masked-view'
import { clamp, Vector } from 'react-native-redash'

import { Side, WaveProps } from './types'
import { styles } from './styles'
import {
  AnimatedPath,
  C,
  curve,
  HEIGHT,
  MARGIN_WIDTH,
  MIN_LEDGE,
  vec2,
  WIDTH,
} from '../../constants'

export const Wave = (props: WaveProps) => {
  const { side, position, isTransitioning, children } = props
  const R = useDerivedValue(() =>
    clamp(position.x.value, MARGIN_WIDTH - MIN_LEDGE, WIDTH / 3),
  )

  const stepX = useDerivedValue(() =>
    withSpring(isTransitioning.value ? 0 : R.value / 2),
  )

  const animatedProps = useAnimatedProps(() => {
    const stepY = Math.max(position.x.value, MARGIN_WIDTH - MIN_LEDGE)
    const CURVE = C * R.value
    const p1 = vec2(position.x.value, position.y.value - 2 * stepY)
    const p2 = vec2(p1.x + stepX.value, p1.y + stepY)
    const p3 = vec2(p2.x + stepX.value, p2.y + stepY)
    const p4 = vec2(p3.x - stepX.value, p3.y + stepY)
    const p5 = vec2(p4.x - stepX.value, p4.y + stepY)

    const c11 = vec2(p1.x, p1.y + CURVE)
    const c12 = vec2(p2.x, p2.y)

    const c21 = vec2(p2.x, p2.y)
    const c22 = vec2(p3.x, p3.y - CURVE)

    const c31 = vec2(p3.x, p3.y + CURVE)
    const c32 = vec2(p4.x, p4.y)

    const c41 = vec2(p4.x, p4.y)
    const c42 = vec2(p5.x, p5.y - CURVE)

    const d = [
      'M 0 0',
      `H ${p1.x}`,
      `V ${p1.y}`,
      curve(c11, c12, p2),
      curve(c21, c22, p3),
      curve(c31, c32, p4),
      curve(c41, c42, p5),
      `V ${HEIGHT}`,
      'H 0',
      'Z',
    ].join(' ')
    return { d }
  })
  return (
    <MaskedView
      style={styles.container}
      maskElement={
        <Svg
          style={[
            styles.container,
            { transform: [{ rotateY: side === Side.RIGHT ? '180deg' : '0deg' }] },
          ]}
        >
          <AnimatedPath animatedProps={animatedProps} fill="black" />
        </Svg>
      }
    >
      <View style={styles.container}>{children}</View>
    </MaskedView>
  )
}
