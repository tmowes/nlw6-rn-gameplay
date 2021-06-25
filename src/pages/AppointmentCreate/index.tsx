import React, { useCallback, useState } from 'react'
import { Keyboard, View, Text, TouchableWithoutFeedback } from 'react-native'

import uuid from 'react-native-uuid'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'
import { RFValue } from 'react-native-responsive-fontsize'
import AsyncStorage from '@react-native-async-storage/async-storage'

import * as C from '../../components'
import { styles } from './styles'
import { IconButton } from '../../components/IconButton'
import { GuildIcon } from '../../components/GuildIcon'
import { GuildProps } from '../../components/GuildItem/types'
import { COLLECTION_APPOINTMENTS } from '../../configs'

export const AppointmentCreate = () => {
  const { navigate } = useNavigation()
  const [category, setCategory] = useState('')
  const [modalVisible, setModalVisible] = useState(false)
  const [guild, setGuild] = useState<GuildProps>({} as GuildProps)

  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [hour, setHour] = useState('')
  const [minute, setMinute] = useState('')
  const [description, setDescription] = useState('')

  const categorySelection = useCallback((id: string) => {
    setCategory(id)
  }, [])

  const guildSelection = useCallback((guildSelected: GuildProps) => {
    setGuild(guildSelected)
    setModalVisible(false)
  }, [])

  const createAppointment = async () => {
    const newAppointment = {
      id: uuid.v4(),
      guild,
      category,
      date: `${day}/${month} às ${hour}:${minute}h`,
      description,
    }
    const storage = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS)
    const appointments = storage ? JSON.parse(storage) : []
    await AsyncStorage.setItem(
      COLLECTION_APPOINTMENTS,
      JSON.stringify([...appointments, newAppointment]),
    )
    navigate('Home')
  }

  return (
    <KeyboardAwareScrollView extraScrollHeight={RFValue(64)} enableOnAndroid>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View>
          <C.Header title="Agendar partida" />
          <C.ListHeader title="Categoria" subtitle="" />
          <C.CategoryList
            selectedId={category}
            categorySelection={categorySelection}
            hasCheckBox
          />
          <View style={styles.form}>
            <View style={styles.select}>
              <RectButton style={styles.button} onPress={() => setModalVisible(true)}>
                {guild.icon ? (
                  <GuildIcon iconId={guild.icon} guildId={guild.id} />
                ) : (
                  <View style={styles.image} />
                )}
                <View style={styles.row}>
                  <Text style={[styles.label, { flex: 1 }]}>
                    {guild.name ?? 'Selecione um servidor'}
                  </Text>
                  <IconButton name="chevron-right" />
                </View>
              </RectButton>
            </View>
            <View>
              <View style={styles.fieldsRow}>
                <View>
                  <Text style={styles.label}>Dia e mês</Text>
                  <View style={styles.inputRow}>
                    <C.NumericInput maxLength={2} onChangeText={setDay} />
                    <Text style={styles.divider}>/</Text>
                    <C.NumericInput maxLength={2} onChangeText={setMonth} />
                  </View>
                </View>
                <View>
                  <Text style={styles.label}>Hora e minuto</Text>
                  <View style={styles.inputRow}>
                    <C.NumericInput maxLength={2} onChangeText={setHour} />
                    <Text style={styles.divider}>:</Text>
                    <C.NumericInput maxLength={2} onChangeText={setMinute} />
                  </View>
                </View>
              </View>
              <View>
                <C.ListHeader
                  title="Descrição"
                  subtitle="Max 100 caracteres"
                  addStyle={{ paddingHorizontal: 0 }}
                />
                <C.TextAreaInput
                  multiline
                  maxLength={100}
                  numberOfLines={5}
                  autoCorrect={false}
                  onChangeText={setDescription}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <C.LabelButton label="Agendar" onPress={createAppointment} />
            </View>
          </View>
          <C.ModalView visible={modalVisible} closeModal={() => setModalVisible(false)}>
            <C.GuildList guildSelection={guildSelection} />
          </C.ModalView>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}
