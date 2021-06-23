import React, { useCallback, useState } from 'react'
import {
  SafeAreaView,
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
} from 'react-native'

import { useNavigation } from '@react-navigation/native'
import { RectButton } from 'react-native-gesture-handler'

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
    <KeyboardAvoidingView style={styles.container} enabled behavior="height">
      <ScrollView style={styles.scroll}>
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
          <View>
            <View style={styles.fieldsRow}>
              <View>
                <Text style={styles.label}>Dia e mês</Text>
                <View style={styles.inputRow}>
                  <C.NumericInput maxLength={2} />
                  <Text style={styles.divider}>/</Text>
                  <C.NumericInput maxLength={2} />
                </View>
              </View>
              <View>
                <Text style={styles.label}>Hora e minuto</Text>
                <View style={styles.inputRow}>
                  <C.NumericInput maxLength={2} />
                  <Text style={styles.divider}>:</Text>
                  <C.NumericInput maxLength={2} />
                </View>
              </View>
            </View>
            <View style={[{ marginVertical: 12 }]}>
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
              />
            </View>
          </View>
          <View style={styles.footer}>
            <C.LabelButton label="Agendar" />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
