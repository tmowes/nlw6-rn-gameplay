import { ReactNode } from 'react'
import { ModalProps } from 'react-native'

export type ModalViewProps = ModalProps & {
  children: ReactNode
  closeModal: () => void
}
