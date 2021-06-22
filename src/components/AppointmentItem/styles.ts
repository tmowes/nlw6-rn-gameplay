import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { fonts, colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: RFValue(8),
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
  footer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  dateInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  date: {
    fontFamily: fonts.complement,
    fontSize: RFValue(13),
    marginLeft: RFValue(8),
    color: colors.text,
  },
  playersInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  player: {
    fontFamily: fonts.button,
    fontSize: RFValue(13),
    color: colors.text,
    marginLeft: RFValue(8),
    marginRight: RFValue(16),
  },
})
