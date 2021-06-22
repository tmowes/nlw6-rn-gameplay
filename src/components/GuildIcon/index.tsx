import React from 'react'
import { Image } from 'react-native'

import { styles } from './styles'
import { GuildIconProps } from './types'

export const GuildIcon = (props: GuildIconProps) => {
  const {
    uri = 'https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh.jpg',
  } = props
  return <Image source={{ uri }} style={styles.image} resizeMode="cover" />
}
