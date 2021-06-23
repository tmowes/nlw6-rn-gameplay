import React, { useCallback, useState } from 'react'
import { ImageBackground, SafeAreaView, View, Text, FlatList } from 'react-native'

import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation } from '@react-navigation/native'

import bannerImg from '../../assets/banner.png'
import * as C from '../../components'
import { colors } from '../../styles'
import { styles } from './styles'
import { members } from './data'

export const Appointments = () => {
  const { navigate } = useNavigation()

  return (
    <SafeAreaView style={styles.container}>
      <C.Header
        title="Detalhes"
        action={
          <BorderlessButton>
            <Fontisto name="share" size={24} color={colors.primary} />
          </BorderlessButton>
        }
      />
      <ImageBackground source={bannerImg} style={styles.bgImage}>
        <Text style={styles.title}>Lendários</Text>
        <Text style={styles.subtitle}>
          É hoje que vamos chegar ao challenger sem perder uma partida da md10
        </Text>
      </ImageBackground>
      <C.ListHeader title="Jogadores" subtitle="Total 3" />
      <FlatList
        data={members}
        keyExtractor={({ id }) => id}
        renderItem={({ item }) => <C.MemberItem data={item} />}
        ItemSeparatorComponent={() => <C.Divider />}
        style={styles.matches}
        showsVerticalScrollIndicator={false}
      />
      <View style={styles.footer}>
        <C.LabelButton
          label="Entrar na partida"
          name="discord"
          onPress={() => navigate('Home')}
        />
      </View>
    </SafeAreaView>
  )
}
