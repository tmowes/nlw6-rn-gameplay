import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { fonts, colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    width: RFValue(104),
    height: RFValue(120),
    borderRadius: RFValue(8),
    marginRight: RFValue(8),
    elevation: 2,
  },
  button: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: RFValue(100),
    height: RFValue(116),
    borderRadius: RFValue(8),
    paddingVertical: RFValue(8),
    backgroundColor: colors.secondary40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selected: {
    height: RFValue(10),
    width: RFValue(10),
    backgroundColor: colors.primary,
    alignSelf: 'flex-end',
    marginRight: RFValue(8),
    borderRadius: RFValue(3),
  },
  deselected: {
    height: RFValue(10),
    width: RFValue(10),
    backgroundColor: colors.secondary100,
    alignSelf: 'flex-end',
    marginRight: RFValue(8),
    borderRadius: RFValue(3),
    borderWidth: RFValue(2),
    borderColor: colors.secondary30,
  },
  text: {
    fontFamily: fonts.button,
    fontSize: RFValue(16),
    color: colors.text,
  },
})
