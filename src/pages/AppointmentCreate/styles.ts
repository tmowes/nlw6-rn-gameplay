import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { colors, fonts } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    width: '100%',
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
    marginBottom: RFValue(16),
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
  fieldsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  divider: {
    color: colors.highlight,
    fontSize: RFValue(18),
    fontFamily: fonts.complement,
    marginHorizontal: RFValue(4),
  },
  footer: {
    marginVertical: RFValue(20),
    marginBottom: RFValue(56),
  },
})
