import React from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import { styles } from './styles'
import { guilds } from './data'
import { GuildItem } from '../GuildItem'
import { Divider } from '../Divider'
import { GuildListProps } from './types'

export const GuildList = (props: GuildListProps) => {
  const { guildSelection } = props

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={guilds}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => (
          <GuildItem data={item} onPress={() => guildSelection(item)} />
        )}
        ItemSeparatorComponent={() => <Divider />}
        contentContainerStyle={styles.listOffset}
        style={styles.list}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  )
}
