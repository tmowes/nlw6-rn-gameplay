import React from 'react'
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native'

import Color from 'color'
import Svg, { RadialGradient, Defs, Rect, Stop } from 'react-native-svg'

import { SlideProps } from './types'
import { height, styles, width } from './styles'

export const Slide = (props: SlideProps) => {
  const {
    slide: { picture, color, title, description },
  } = props
  const lighterColor = Color(color).lighten(0.8).toString()
  return (
    <>
      <Svg style={StyleSheet.absoluteFill}>
        <Defs>
          <RadialGradient id="gradient" cx="50%" cy="35%">
            <Stop offset="0%" stopColor={lighterColor} />
            <Stop offset="100%" stopColor={color} />
          </RadialGradient>
        </Defs>
        <Rect x={0} y={0} width={width} height={height} fill="url(#gradient)" />
      </Svg>
      <View style={styles.container}>
        <Image source={picture} style={styles.image} />
        <View>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </>
  )
}
