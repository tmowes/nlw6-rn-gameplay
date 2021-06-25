import React from 'react'
import { Text, View } from 'react-native'

import { RectButton } from 'react-native-gesture-handler'
import { LinearGradient } from 'expo-linear-gradient'

import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { categories } from '../../utils/categories'
import { styles } from './styles'
import { AppointmentItemProps } from './types'
import { colors } from '../../styles'
import { GuildIcon } from '../GuildIcon'

export const AppointmentItem = (props: AppointmentItemProps) => {
  const { data, addStyle = {}, ...attrs } = props
  const [category] = categories.filter(item => item.id === data.category)
  const { guild, date, description } = data
  const { owner, name, id, icon } = guild

  return (
    <RectButton {...attrs}>
      <View style={[styles.container, addStyle]}>
        <LinearGradient style={styles.linear} colors={colors.inputGradient}>
          <GuildIcon iconId={icon} guildId={id} />
        </LinearGradient>
        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>{name}</Text>
            <Text style={styles.category}>{category?.label}</Text>
          </View>
          <View style={styles.footer}>
            <View style={styles.dateInfo}>
              <CalendarSvg />
              <Text style={styles.date}>{date}</Text>
            </View>
            <View style={styles.playersInfo}>
              <PlayerSvg fill={owner ? colors.primary : colors.on} />
              <Text style={styles.player}>{owner ? 'Anfitrião' : 'Visitante'}</Text>
            </View>
          </View>
        </View>
      </View>
    </RectButton>
  )
}
