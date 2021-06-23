import Animated from 'react-native-reanimated'
import { Vector } from 'react-native-redash'

import { Side } from '../Wave/types'

export type ButtonProps = {
  position: Vector<Animated.SharedValue<number>>
  side: Side
  activeSide: Animated.SharedValue<Side>
}
