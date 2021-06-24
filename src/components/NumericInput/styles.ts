import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { colors, fonts } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    width: RFValue(48),
    height: RFValue(48),
    borderRadius: RFValue(8),
    backgroundColor: colors.secondary40,
    borderWidth: RFValue(1),
    borderColor: colors.secondary30,
    color: colors.text,
    fontSize: RFValue(13),
    fontFamily: fonts.text,
    textAlign: 'center',
  },
})
