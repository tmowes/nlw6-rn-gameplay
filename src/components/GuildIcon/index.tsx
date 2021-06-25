import React from 'react'
import { Image, View } from 'react-native'

import PlaceholderImg from '../../assets/discord.svg'
import { styles } from './styles'
import { GuildIconProps } from './types'

const { CDN_IMAGE } = process.env

export const GuildIcon = (props: GuildIconProps) => {
  const { iconId, guildId } = props
  const uri = `${CDN_IMAGE}/icons/${guildId}/${iconId}.png`

  return (
    <View style={styles.container}>
      {iconId ? (
        <Image source={{ uri }} style={styles.image} resizeMode="cover" />
      ) : (
        <PlaceholderImg width={40} height={40} />
      )}
    </View>
  )
}
