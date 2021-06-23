import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

import { colors } from '../../styles/colors'
import { fonts } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: RFValue(getStatusBarHeight()),
  },
  action: {
    width: RFValue(56),
    height: RFValue(56),
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.heading,
    color: colors.text,
    fontSize: RFValue(20),
    textAlign: 'center',
  },
})
