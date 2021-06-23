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
    paddingVertical: RFValue(16),
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  selected: {
    position: 'absolute',
    top: RFValue(8),
    right: RFValue(8),
    height: RFValue(10),
    width: RFValue(10),
    backgroundColor: colors.primary,
    borderRadius: RFValue(3),
  },
  deselected: {
    position: 'absolute',
    top: RFValue(8),
    right: RFValue(8),
    height: RFValue(10),
    width: RFValue(10),
    backgroundColor: colors.secondary100,
    borderRadius: RFValue(3),
    borderWidth: RFValue(2),
    borderColor: colors.secondary30,
  },
  text: {
    fontFamily: fonts.heading,
    fontSize: RFValue(18),
    color: colors.text,
  },
})
