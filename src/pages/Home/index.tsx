import React, { useCallback, useState } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'

import { useNavigation } from '@react-navigation/native'

import * as C from '../../components'
import { appointments } from './data'
import { styles } from './styles'

export const Home = () => {
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
      <View style={styles.header}>
        <C.Profile />
        <C.LabelButton
          name="plus"
          addStyle={styles.plus}
          onPress={() => navigate('AppointmentCreate')}
        />
      </View>
      <View>
        <C.CategoryList selectedId={category} categorySelection={categorySelection} />
      </View>
      <View style={styles.content}>
        <C.ListHeader title="Partidas agendadas" subtitle="Total 6" />
        <FlatList
          data={appointments}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => (
            <C.AppointmentItem
              data={item}
              onPress={() => navigate('Appointments', { ...item })}
            />
          )}
          ItemSeparatorComponent={() => <C.Divider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  )
}
