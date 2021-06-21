import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
  },
  content: {
    marginTop: -80,
    paddingHorizontal: 48,
  },
  title: {
    color: colors.text,
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 24,
  },
  body: {
    color: colors.body,
    fontSize: 17,
    textAlign: 'center',
    marginBottom: 48,
  },
})
