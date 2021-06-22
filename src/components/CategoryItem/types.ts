import { FC } from 'react'
import { StyleProp, ViewStyle } from 'react-native'

import { RectButtonProps } from 'react-native-gesture-handler'
import { SvgProps } from 'react-native-svg'

export type CategoryItemProps = RectButtonProps & {
  label: string
  icon: FC<SvgProps>
  isSelected: boolean
  addStyle?: StyleProp<ViewStyle>
}
