import { StyleSheet } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    width: '80%',
    height: RFValue(56),
    borderRadius: RFValue(56 / 2),
    backgroundColor: 'orangered',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 16,
  },
  text: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
})
