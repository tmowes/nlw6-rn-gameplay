import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { colors, fonts } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(16),
  },
  title: {
    color: colors.text,
    fontSize: RFValue(18),
    fontFamily: fonts.heading,
  },
  subtitle: {
    color: colors.highlight,
    fontSize: RFValue(13),
    fontFamily: fonts.text,
  },
})
