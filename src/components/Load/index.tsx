import React from 'react'
import { ActivityIndicator, View } from 'react-native'

import { colors } from '../../styles'
import { styles } from './styles'

export const Load = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={colors.primary} />
  </View>
)
