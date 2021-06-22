import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { fonts, colors } from '../../styles'

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    height: RFValue(56),
    borderRadius: RFValue(8),
    backgroundColor: colors.primary,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 6,
  },
  iconContainer: {
    width: RFValue(56),
    height: RFValue(56),
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 2,
    borderRightColor: colors.line,
  },
  text: {
    flex: 1,
    color: colors.text,
    fontSize: RFValue(16),
    textAlign: 'center',
    fontFamily: fonts.button,
  },
})
