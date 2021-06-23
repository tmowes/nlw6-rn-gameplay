import { StyleSheet, Dimensions } from 'react-native'

export const { width, height } = Dimensions.get('screen')
const SIZE = width - 75

export const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    padding: 75,
    paddingTop: 150,
    alignItems: 'center',
  },
  image: {
    width: SIZE,
    height: SIZE,
  },
  title: {
    fontSize: 48,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  description: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
  },
})
