import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { colors } from '../../styles/colors'
import { fonts } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    marginLeft: RFValue(8),
  },
  username: {
    fontFamily: fonts.heading,
    color: colors.text,
    fontSize: RFValue(20),
  },
  text: {
    fontFamily: fonts.complement,
    color: colors.text,
    fontSize: RFValue(20),
  },
  message: {
    fontFamily: fonts.text,
    color: colors.highlight,
    fontSize: RFValue(16),
  },
})
