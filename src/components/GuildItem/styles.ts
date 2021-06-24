import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { fonts, colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  content: {
    flex: 1,
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: RFValue(18),
    color: colors.text,
  },
  status: {
    fontFamily: fonts.text,
    fontSize: RFValue(13),
    color: colors.highlight,
  },
})
