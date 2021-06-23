import { StyleSheet, Dimensions } from 'react-native'

export const { width, height } = Dimensions.get('screen')
const SIZE = width - 75

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
  },
})
