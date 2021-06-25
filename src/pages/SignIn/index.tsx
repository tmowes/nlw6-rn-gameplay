import React from 'react'
import { ActivityIndicator, Alert, SafeAreaView, Image, Text, View } from 'react-native'

import * as C from '../../components'
import illustrationImg from '../../assets/illustration.png'
import { styles } from './styles'
import { useAuth } from '../../contexts'
import { colors } from '../../styles'

export const SignIn = () => {
  const { isLoading, signIn } = useAuth()

  const handleSignIn = async () => {
    try {
      await signIn()
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possivel autenticar')
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={illustrationImg} resizeMode="stretch" style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{`Conecte-se\ne organize suas\njogatinas`}</Text>
        <Text style={styles.body}>
          {`Crie grupos para jogar seus games\nfavoritos com seus amigos\n`}
        </Text>
        {isLoading ? (
          <ActivityIndicator size="large" color={colors.primary} />
        ) : (
          <C.LabelButton
            label="Entrar com Discord"
            name="discord"
            onPress={handleSignIn}
          />
        )}
      </View>
    </SafeAreaView>
  )
}
