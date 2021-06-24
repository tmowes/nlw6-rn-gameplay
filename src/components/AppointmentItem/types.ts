import { StyleProp, ViewStyle } from 'react-native'

import { RectButtonProps } from 'react-native-gesture-handler'

import { GuildProps } from '../GuildItem/types'

export type AppointmentItemProps = RectButtonProps & {
  addStyle?: StyleProp<ViewStyle>
  data: AppointmentProps
}

export type AppointmentProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}
