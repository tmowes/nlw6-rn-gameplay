import React, { useCallback, useState } from 'react'
import { FlatList, SafeAreaView, View } from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect, useNavigation } from '@react-navigation/native'

import * as C from '../../components'
import { styles } from './styles'
import { AppointmentProps } from '../../components/AppointmentItem/types'
import { COLLECTION_APPOINTMENTS } from '../../configs'

export const Home = () => {
  const { navigate } = useNavigation()
  const [category, setCategory] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [appointments, setAppointments] = useState<AppointmentProps[]>([])

  const categorySelection = useCallback(
    (id: string) => {
      category === id ? setCategory('') : setCategory(id)
    },
    [category],
  )

  const loadAppointments = useCallback(async () => {
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const appointmentsParsed: AppointmentProps[] = storage ? JSON.parse(storage) : []
    if (category) {
      setAppointments(appointmentsParsed.filter(item => item.category === category))
    } else {
      setAppointments(appointmentsParsed)
    }
    setIsLoading(false)
  }, [category])

  useFocusEffect(
    useCallback(() => {
      loadAppointments()
    }, [loadAppointments]),
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
      <C.ListHeader
        title="Partidas agendadas"
        subtitle={`Total ${appointments.length}`}
      />
      {isLoading ? (
        <C.Load />
      ) : (
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
          contentContainerStyle={styles.listOffset}
          style={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  )
}
