import { Dimensions, StyleSheet } from 'react-native'

export const { width } = Dimensions.get('screen')

export const RADIUS = 25

export const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    // borderWidth: 1,
    // borderColor: "white",
    borderRadius: RADIUS,
    width: RADIUS * 2,
    height: RADIUS * 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
})
