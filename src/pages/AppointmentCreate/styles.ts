import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { colors, fonts } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  form: {
    width: '100%',
    paddingHorizontal: RFValue(16),
    marginVertical: RFValue(16),
  },
  select: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: colors.secondary50,
    height: RFValue(56),
    borderRadius: RFValue(8),
    overflow: 'hidden',
  },
  image: {
    width: RFValue(56),
    height: RFValue(56),
    borderRadius: RFValue(8),
    marginRight: RFValue(16),
    backgroundColor: colors.secondary50,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    flex: 1,
    color: colors.text,
    fontSize: RFValue(18),
    fontFamily: fonts.heading,
  },
})
