import { StyleProp, ViewStyle } from 'react-native'

import { RectButtonProps } from 'react-native-gesture-handler'

export type AppointmentItemProps = RectButtonProps & {
  addStyle?: StyleProp<ViewStyle>
  data: AppointmentProps
}
export type GuildProps = {
  id: string
  name: string
  icon: null
  owner: boolean
}

export type AppointmentProps = {
  id: string
  guild: GuildProps
  category: string
  date: string
  description: string
}
