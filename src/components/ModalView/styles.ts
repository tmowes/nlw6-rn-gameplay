import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { fonts, colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    marginTop: RFValue(96),
  },
  overlay: {
    flex: 1,
    // backgroundColor: ,
  },
  bar: {
    width: RFValue(40),
    height: RFValue(4),
    borderRadius: RFValue(2),
    backgroundColor: colors.secondary30,
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: RFValue(12),
  },
})
