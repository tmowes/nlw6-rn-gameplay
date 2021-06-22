import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import { getStatusBarHeight } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    width: '100%',
    paddingTop: RFValue(getStatusBarHeight() + 16),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: RFValue(16),
    marginBottom: RFValue(24),
  },
  info: {
    flex: 1,
    width: '100%',
    marginLeft: RFValue(8),
  },
  plus: {
    width: RFValue(56),
    height: RFValue(56),
    borderRadius: RFValue(8),
  },
  avatar: {
    width: RFValue(56),
    height: RFValue(56),
    borderRadius: RFValue(8),
  },
  content: {
    width: '100%',
    marginTop: RFValue(24),
  },
  matches: {
    marginTop: RFValue(24),
    marginLeft: RFValue(24),
  },
})
