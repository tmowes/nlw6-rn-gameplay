import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    width: RFValue(56),
    height: RFValue(56),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.discord,
    borderRadius: RFValue(8),
    overflow: 'hidden',
  },
  image: {
    width: RFValue(56),
    height: RFValue(56),
  },
})
