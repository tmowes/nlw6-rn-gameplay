import { StyleProp, TouchableOpacityProps, ViewStyle } from 'react-native'

export type GuildItemProps = TouchableOpacityProps & {
  addStyle?: StyleProp<ViewStyle>
  data: GuildProps
}

export type GuildProps = {
  id: string
  name: string
  icon: string | null
  owner: boolean
}
