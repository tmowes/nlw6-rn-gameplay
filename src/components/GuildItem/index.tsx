import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

import { styles } from './styles'
import { GuildItemProps } from './types'
import { colors } from '../../styles'
import { GuildIcon } from '../GuildIcon'

export const GuildItem = (props: GuildItemProps) => {
  const { data, addStyle = {}, ...attrs } = props
  const { icon, owner, name } = data

  return (
    <TouchableOpacity {...attrs}>
      <View style={[styles.container, addStyle]}>
        <View style={{ marginRight: RFValue(16) }}>
          <GuildIcon uri={icon!} />
        </View>
        <View style={styles.content}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.status}>{owner ? 'Administrador' : 'Convidado'}</Text>
        </View>
        <Feather name="chevron-right" size={RFValue(28)} color={colors.highlight} />
      </View>
    </TouchableOpacity>
  )
}
