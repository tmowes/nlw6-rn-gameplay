import { Dimensions } from 'react-native'

import Animated from 'react-native-reanimated'
import { Vector } from 'react-native-redash'
import { Path } from 'react-native-svg'

export const { width: WIDTH, height: HEIGHT } = Dimensions.get('screen')
export const MIN_LEDGE = 25
export const MARGIN_WIDTH = MIN_LEDGE + 50

// 0.5522847498 is taken from https://spencermortensen.com/articles/bezier-circle/
export const C = 0.5522847498

export const AnimatedPath = Animated.createAnimatedComponent(Path)

export const vec2 = (x: number, y: number) => {
  'worklet'

  return { x, y }
}
export const curve = (c1: Vector, c2: Vector, to: Vector) => {
  'worklet'

  return `C ${c1.x} ${c1.y} ${c2.x} ${c2.y} ${to.x} ${to.y}`
}

// const stepY = x.value - MIN_LEDGE; // R = 50
// const stepX = R.value / 2; // R/2
// // 0.5522847498 is taken from https://spencermortensen.com/articles/bezier-circle/
// const C = stepY * 0.5522847498;

// const p1 = { x: ledge.value, y: y.value - 2 * stepY };
// const p2 = vec2(p1.x + stepX, p1.y + stepY);
// const p3 = vec2(p2.x + stepX, p2.y + stepY);
// const p4 = vec2(p3.x - stepX, p3.y + stepY);
// const p5 = vec2(p4.x - stepX, p4.y + stepY);

// const c11 = vec2(p1.x, p1.y + C);
// const c12 = vec2(p2.x, p2.y);

// const c21 = vec2(p2.x, p2.y);
// const c22 = vec2(p3.x, p3.y - C);

// const c31 = vec2(p3.x, p3.y + C);
// const c32 = vec2(p4.x, p4.y);

// const c41 = vec2(p4.x, p4.y);
// const c42 = vec2(p5.x, p5.y - C);
