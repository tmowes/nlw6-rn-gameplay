import { StyleProp, ViewStyle } from 'react-native'

import { RectButtonProps } from 'react-native-gesture-handler'

export type CategoryListProps = RectButtonProps & {
  selectedId: string
  categorySelection: (id: string) => void
  addStyle?: StyleProp<ViewStyle>
}
