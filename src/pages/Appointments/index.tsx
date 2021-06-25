import React, { useCallback, useEffect, useState } from 'react'
import {
  ImageBackground,
  SafeAreaView,
  View,
  Text,
  FlatList,
  Alert,
  Share,
  Linking,
  Platform,
} from 'react-native'

import { Fontisto } from '@expo/vector-icons'
import { BorderlessButton } from 'react-native-gesture-handler'
import { useNavigation, useRoute } from '@react-navigation/native'

import bannerImg from '../../assets/banner.png'
import * as C from '../../components'
import { colors } from '../../styles'
import { styles } from './styles'
import { AppointmentProps } from '../../components/AppointmentItem/types'
import { GuildWidgetProps } from './types'
import { api } from '../../services'

export const Appointments = () => {
  const { navigate } = useNavigation()
  const { params } = useRoute()
  const { guild, description } = params as AppointmentProps
  const [widget, setWidget] = useState<GuildWidgetProps>({} as GuildWidgetProps)
  const [isLoading, setIsLoading] = useState(true)

  const openGuild = () => {
    Linking.openURL(widget.instant_invite)
  }

  const shareInvite = () => {
    const message =
      Platform.OS === 'ios' ? `Junte-se a ${guild.name}` : widget.instant_invite

    Share.share({
      message,
      url: widget.instant_invite,
    })
  }

  const loadGuildWidget = useCallback(async () => {
    try {
      const { data } = await api.get(`/guilds/${guild.id}/widget.json`)
      setWidget(data)
    } catch {
      Alert.alert(
        'Verifique as configurações do servidor. Será que o Widget está habilitado?',
      )
    } finally {
      setIsLoading(false)
    }
  }, [guild.id])

  useEffect(() => {
    loadGuildWidget()
  }, [loadGuildWidget])

  return (
    <SafeAreaView style={styles.container}>
      <C.Header
        title="Detalhes"
        action={
          widget?.instant_invite && (
            <BorderlessButton onPress={shareInvite}>
              <Fontisto name="share" size={24} color={colors.primary} />
            </BorderlessButton>
          )
        }
      />
      <ImageBackground source={bannerImg} style={styles.bgImage}>
        <Text style={styles.title}>{guild.name}</Text>
        <Text style={styles.subtitle}>{description}</Text>
      </ImageBackground>
      <C.ListHeader
        title="Jogadores"
        subtitle={`Total ${widget?.members?.length ?? 0}`}
      />
      {isLoading ? (
        <C.Load />
      ) : (
        <FlatList
          data={widget.members ?? []}
          keyExtractor={({ id }) => id}
          renderItem={({ item }) => <C.MemberItem data={item} />}
          ItemSeparatorComponent={() => <C.Divider />}
          style={styles.matches}
          showsVerticalScrollIndicator={false}
        />
      )}
      {widget?.instant_invite && (
        <View style={styles.footer}>
          <C.LabelButton label="Entrar na partida" name="discord" onPress={openGuild} />
        </View>
      )}
    </SafeAreaView>
  )
}
