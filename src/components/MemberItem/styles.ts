import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { fonts, colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    width: '100%',
    marginLeft: RFValue(16),
  },
  title: {
    fontFamily: fonts.heading,
    fontSize: RFValue(18),
    color: colors.text,
  },
  category: {
    fontFamily: fonts.text,
    fontSize: RFValue(13),
    color: colors.highlight,
    marginRight: RFValue(16),
  },
  statusContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  dot: {
    width: RFValue(8),
    height: RFValue(8),
    borderRadius: RFValue(4),
    marginRight: RFValue(6),
  },
  status: {
    fontFamily: fonts.text,
    fontSize: RFValue(13),
    color: colors.highlight,
  },
})
