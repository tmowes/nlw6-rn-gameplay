import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    width: '75%',
    height: RFValue(1),
    backgroundColor: colors.secondary40,
    marginTop: RFValue(2),
    marginVertical: RFValue(24),
    alignSelf: 'flex-end',
  },
})
