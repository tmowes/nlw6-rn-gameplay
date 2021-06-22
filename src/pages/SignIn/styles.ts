import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: RFValue(48),
  },
  image: {
    width: '100%',
  },
  content: {
    flex: 1,
    marginTop: RFValue(-48),
    paddingHorizontal: RFValue(48),
    justifyContent: 'space-between',
  },
  title: {
    color: colors.text,
    fontSize: RFValue(36),
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: RFValue(24),
  },
  body: {
    color: colors.highlight,
    fontSize: RFValue(16),
    textAlign: 'center',
    marginBottom: 'auto',
  },
})
