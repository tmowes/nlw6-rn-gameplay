import { StyleSheet } from 'react-native'

import { getBottomSpace } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'

import { colors, fonts } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  bgImage: {
    width: '100%',
    height: RFValue(220),
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: fonts.heading,
    color: colors.text,
    fontSize: RFValue(24),
    paddingHorizontal: RFValue(16),
  },
  subtitle: {
    fontFamily: fonts.text,
    color: colors.text,
    fontSize: RFValue(13),
    paddingHorizontal: RFValue(16),
    marginBottom: RFValue(24),
  },

  matches: {
    marginLeft: RFValue(24),
  },
  footer: {
    width: '100%',
    paddingHorizontal: RFValue(16),
    marginTop: RFValue(16),
    marginBottom: RFValue(getBottomSpace() + 16),
  },
})
