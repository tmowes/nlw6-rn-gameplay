/* eslint-disable radar/cognitive-complexity */
import React, { useEffect } from 'react'
import { StyleSheet, View } from 'react-native'

import Animated, {
  runOnJS,
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated'
import { PanGestureHandler } from 'react-native-gesture-handler'
import { useVector, snapPoint } from 'react-native-redash'

import { HEIGHT, MARGIN_WIDTH, MIN_LEDGE, WIDTH } from '../../constants'
import { Wave } from '../Wave'
import { Side } from '../Wave/types'
import { SliderProps } from './types'

const PREV = WIDTH
const NEXT = 0

export const Slider = (props: SliderProps) => {
  const { index, children: current, prev, next, setIndex } = props
  const hasPrev = !!prev
  const hasNext = !!next
  const activeSide = useSharedValue(Side.NONE)
  const left = useVector(0, HEIGHT / 2)
  const right = useVector(0, HEIGHT / 2)

  const isTransitioningLeft = useSharedValue(false)
  const isTransitioningRight = useSharedValue(false)

  const onGestureEvent = useAnimatedGestureHandler({
    onStart: ({ x }) => {
      if (x < MARGIN_WIDTH) {
        activeSide.value = Side.LEFT
      } else if (x > WIDTH - MARGIN_WIDTH) {
        activeSide.value = Side.RIGHT
      } else {
        activeSide.value = Side.NONE
      }
    },
    onActive: ({ x, y }) => {
      if (activeSide.value === Side.LEFT) {
        left.x.value = x
        left.y.value = y
      }
      if (activeSide.value === Side.RIGHT) {
        right.x.value = WIDTH - x
        right.y.value = y
      }
    },
    onEnd: ({ x, velocityX, velocityY }) => {
      if (activeSide.value === Side.LEFT) {
        const snapPoints = [MIN_LEDGE, WIDTH]
        const dest = snapPoint(x, velocityX, snapPoints)
        isTransitioningLeft.value = dest === WIDTH
        left.y.value = withSpring(HEIGHT / 2, { velocity: velocityY })
        left.x.value = withSpring(
          dest,
          {
            velocity: velocityX,
            overshootClamping: !!isTransitioningLeft.value,
            restSpeedThreshold: isTransitioningLeft.value ? 100 : 0.01,
            restDisplacementThreshold: isTransitioningLeft.value ? 100 : 0.01,
          },
          () => {
            if (isTransitioningLeft.value) {
              runOnJS(setIndex)(index - 1)
            }
          },
        )
      }
      if (activeSide.value === Side.RIGHT) {
        const snapPoints = [WIDTH - MIN_LEDGE, 0]
        const dest = snapPoint(x, velocityX, snapPoints)
        isTransitioningRight.value = dest === 0
        right.y.value = withSpring(HEIGHT / 2, { velocity: velocityY })
        right.x.value = withSpring(
          WIDTH - dest,
          {
            velocity: velocityX,
            overshootClamping: !!isTransitioningRight.value,
            restSpeedThreshold: isTransitioningRight.value ? 100 : 0.01,
            restDisplacementThreshold: isTransitioningRight.value ? 100 : 0.01,
          },
          () => {
            if (isTransitioningRight.value) {
              runOnJS(setIndex)(index + 1)
            }
          },
        )
      }
    },
  })

  const animatedLeft = useAnimatedStyle(() => ({
    zIndex: activeSide.value === Side.LEFT ? 100 : 0,
  }))

  useEffect(() => {
    left.x.value = withSpring(MIN_LEDGE)
    right.x.value = withSpring(MIN_LEDGE)
  }, [left.x, right.x])

  return (
    <PanGestureHandler onGestureEvent={onGestureEvent}>
      <Animated.View style={StyleSheet.absoluteFill}>
        {current}
        {prev && (
          <Animated.View style={[StyleSheet.absoluteFill, animatedLeft]}>
            <Wave
              side={Side.LEFT}
              position={left}
              isTransitioning={isTransitioningLeft}
            >
              {prev}
            </Wave>
          </Animated.View>
        )}
        {next && (
          <View style={StyleSheet.absoluteFill}>
            <Wave
              side={Side.RIGHT}
              position={right}
              isTransitioning={isTransitioningRight}
            >
              {next}
            </Wave>
          </View>
        )}
      </Animated.View>
    </PanGestureHandler>
  )
}
