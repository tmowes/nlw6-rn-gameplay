import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { colors, fonts } from '../../styles'

export const styles = StyleSheet.create({
  container: {
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
    height: RFValue(56),
    borderWidth: 1,
    borderColor: colors.secondary50,
    borderRadius: RFValue(8),
    marginBottom: RFValue(16),
    overflow: 'hidden',
  },
  button: {
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: RFValue(56),
    height: RFValue(56),
    borderRadius: RFValue(8),
    backgroundColor: colors.discord,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: RFValue(16),
  },
  label: {
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
    marginTop: RFValue(8),
  },
  divider: {
    color: colors.highlight,
    fontSize: RFValue(18),
    fontFamily: fonts.complement,
    marginHorizontal: RFValue(8),
  },
  footer: {
    marginTop: RFValue(24),
  },
})
