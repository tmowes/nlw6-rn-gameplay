import { ComponentProps } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { RectButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export type LabelButtonProps = RectButtonProps & {
  label: string
  name?: ComponentProps<typeof MaterialCommunityIcons>['name']
  addStyle?: StyleProp<ViewStyle>
}
