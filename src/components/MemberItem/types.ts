import { StyleProp, ViewStyle } from 'react-native'

import { RectButtonProps } from 'react-native-gesture-handler'

export type MemberItemProps = RectButtonProps & {
  addStyle?: StyleProp<ViewStyle>
  data: MemberProps
}

export type MemberProps = {
  id: string
  username: string
  imageUrl: string
  status: string
}
