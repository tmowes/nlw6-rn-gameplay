import React from 'react'
import { Alert, Text, View } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'

import { useAuth } from '../../contexts'
import { Avatar } from '../Avatar'
import { styles } from './styles'
import { ProfileProps } from './types'

export const Profile = (props: ProfileProps) => {
  const {} = props
  const { user, signOut } = useAuth()

  const handleSignOut = () => {
    Alert.alert('Logout', 'deseja sair do GamePlay?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: signOut,
      },
    ])
  }

  return (
    <View style={styles.container}>
      {/* <Avatar imageUrl="https://github.com/tmowes.png" /> */}
      <RectButton onPress={handleSignOut}>
        <Avatar imageUrl={user.avatar} />
      </RectButton>
      <View style={styles.info}>
        <Text style={styles.text}>
          {'Olá, '}
          <Text style={styles.username}>{user.firstName}</Text>
        </Text>
        <Text style={styles.message}>Todo dia é dia de vitória</Text>
      </View>
    </View>
  )
}
