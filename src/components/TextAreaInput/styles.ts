import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { colors, fonts } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: RFValue(96),
    borderRadius: RFValue(8),
    backgroundColor: colors.secondary40,
    color: colors.text,
    fontSize: RFValue(14),
    borderWidth: RFValue(1),
    borderColor: colors.secondary30,
    fontFamily: fonts.text,
    marginRight: RFValue(4),
    padding: RFValue(12),
    textAlignVertical: 'top',
  },
})
