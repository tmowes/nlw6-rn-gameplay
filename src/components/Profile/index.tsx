import React from 'react'
import { Text, View } from 'react-native'

import { Avatar } from '../Avatar'
import { styles } from './styles'
import { ProfileProps } from './types'

export const Profile = (props: ProfileProps) => {
  const {} = props
  return (
    <View style={styles.container}>
      <Avatar imageUrl="https://github.com/tmowes.png" />
      <View style={styles.info}>
        <Text style={styles.text}>
          {'Olá, '}
          <Text style={styles.username}>Julius</Text>
        </Text>
        <Text style={styles.message}>Todo dia é dia de vitória</Text>
      </View>
    </View>
  )
}
