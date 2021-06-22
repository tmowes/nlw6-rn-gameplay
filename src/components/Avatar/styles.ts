import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    width: RFValue(58),
    height: RFValue(58),
    borderRadius: RFValue(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    width: RFValue(56),
    height: RFValue(56),
    borderRadius: RFValue(8),
  },
})
