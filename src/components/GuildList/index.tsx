import React, { useCallback, useEffect, useState } from 'react'
import { SafeAreaView, FlatList } from 'react-native'

import { styles } from './styles'
import { GuildItem } from '../GuildItem'
import { Divider } from '../Divider'
import { GuildListProps } from './types'
import { GuildProps } from '../GuildItem/types'
import { Load } from '../Load'
import { api } from '../../services'

export const GuildList = (props: GuildListProps) => {
  const { guildSelection } = props
  const [guilds, setGuilds] = useState<GuildProps[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const loadsGuilds = useCallback(async () => {
    const { data } = await api.get('users/@me/guilds')
    setGuilds(data)
    setIsLoading(false)
  }, [])

  useEffect(() => {
    loadsGuilds()
  }, [loadsGuilds])

  return (
    <SafeAreaView style={styles.container}>
      {isLoading ? (
        <Load />
      ) : (
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
      )}
    </SafeAreaView>
  )
}
