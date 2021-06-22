import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { colors } from '../../styles'

export const styles = StyleSheet.create({
  container: {
    width: '80%',
    height: RFValue(1),
    backgroundColor: colors.secondary40,
    marginVertical: RFValue(16),
    alignSelf: 'flex-end',
  },
})
