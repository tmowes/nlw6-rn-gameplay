import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  list: {
    width: '100%',
    paddingHorizontal: RFValue(16),
  },
  listOffset: {
    paddingBottom: 64,
  },
})
