import React, { useCallback } from 'react'
import { SafeAreaView, Text, useWindowDimensions, View } from 'react-native'

import { RFValue } from 'react-native-responsive-fontsize'
import * as Linking from 'expo-linking'
import { RectButton } from 'react-native-gesture-handler'

import LogoSVG from '../../assets/nlw.svg'
import { styles } from './styles'

export const PrevNLW = () => {
  const { width } = useWindowDimensions()

  const handleInvite = useCallback(() => {
    Linking.openURL('https://nextlevelweek.com/convite/tmowes/6')
  }, [])

  const handleLinkSchedule = useCallback(() => {
    Linking.openURL('https://nextlevelweek.com/cronograma/6')
  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <LogoSVG width={RFValue(width * 0.8)} />
      </View>
      <View style={styles.content}>
        <RectButton style={styles.button} onPress={handleInvite}>
          <Text style={styles.text}>Inscreva-se</Text>
        </RectButton>
        <RectButton style={styles.button} onPress={handleLinkSchedule}>
          <Text style={styles.text}>Veja o cronograma</Text>
        </RectButton>
      </View>
    </SafeAreaView>
  )
}
