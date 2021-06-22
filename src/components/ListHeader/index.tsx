import React from 'react'
import { Text, View } from 'react-native'

import { styles } from './styles'
import { ListHeaderProps } from './types'

export const ListHeader = (props: ListHeaderProps) => {
  const { title, subtitle } = props
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  )
}
