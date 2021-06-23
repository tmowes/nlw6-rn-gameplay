import React, { useCallback, useState } from 'react'
import { ImageBackground, SafeAreaView, View, Text } from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import * as C from '../../components'
import { styles } from './styles'
import { IconButton } from '../../components/IconButton'
import { GuildIcon } from '../../components/GuildIcon'

export const AppointmentCreate = () => {
  const { navigate } = useNavigation()
  const [category, setCategory] = useState('')

  const categorySelection = useCallback(
    (id: string) => {
      category === id ? setCategory('') : setCategory(id)
    },
    [category],
  )

  return (
    <SafeAreaView style={styles.container}>
      <C.Header title="Agendar partida" />
      <C.ListHeader title="Categoria" subtitle="" />
      <C.CategoryList
        selectedId={category}
        categorySelection={categorySelection}
        hasCheckBox
      />
      <View style={styles.form}>
        <RectButton>
          <View style={styles.select}>
            {/* <View style={styles.image} /> */}
            <GuildIcon />
            <View style={styles.row}>
              <Text style={styles.label}>Selecione um servidor</Text>
              <IconButton name="chevron-right" />
            </View>
          </View>
        </RectButton>
      </View>
    </SafeAreaView>
  )
}
