import { ReactNode } from 'react'

import Animated from 'react-native-reanimated'
import { Vector } from 'react-native-redash'

export type WaveProps = {
  side: Side
  children: ReactNode
  position: Vector<Animated.SharedValue<number>>
  isTransitioning: Animated.SharedValue<boolean>
}

export enum Side {
  LEFT,
  RIGHT,
  NONE,
}
