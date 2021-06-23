import { ComponentProps } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { BorderlessButtonProps } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export type IconButtonProps = BorderlessButtonProps & {
  name: ComponentProps<typeof MaterialCommunityIcons>['name']
  addStyle?: StyleProp<ViewStyle>
}
