import React from 'react'
import { Text, View } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'

import { styles } from './styles'
import { MemberItemProps } from './types'
import { colors } from '../../styles'
import { Avatar } from '../Avatar'

export const MemberItem = (props: MemberItemProps) => {
  const { data, addStyle = {}, ...attrs } = props
  const { imageUrl, status, username } = data
  const isOnline = status === 'online'

  return (
    <RectButton {...attrs}>
      <View style={[styles.container, addStyle]}>
        <Avatar imageUrl={imageUrl} />
        <View style={styles.info}>
          <Text style={styles.title}>{username}</Text>
          <View style={styles.statusContainer}>
            <View
              style={[
                styles.dot,
                { backgroundColor: isOnline ? colors.on : colors.primary },
              ]}
            />
            <Text style={styles.status}>{isOnline ? 'Disponivel' : 'Ocupado'}</Text>
          </View>
        </View>
      </View>
    </RectButton>
  )
}
