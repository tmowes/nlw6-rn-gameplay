import React from 'react'
import { Modal, TouchableWithoutFeedback, View } from 'react-native'

import { LinearGradient } from 'expo-linear-gradient'

import { LinearBackground } from '../LinearBackground'
import { styles } from './styles'
import { ModalViewProps } from './types'
import { colors } from '../../styles'

export const ModalView = (props: ModalViewProps) => {
  const { children, closeModal, ...attrs } = props

  // colors={colors.modalGradient}>

  return (
    <Modal
      style={styles.container}
      statusBarTranslucent
      transparent
      animationType="slide"
      {...attrs}
    >
      <TouchableWithoutFeedback onPress={closeModal}>
        <LinearGradient style={styles.overlay} colors={colors.modalGradient}>
          <View style={styles.content}>
            <LinearBackground>
              <View style={styles.bar} />
              {children}
            </LinearBackground>
          </View>
        </LinearGradient>
      </TouchableWithoutFeedback>
    </Modal>
  )
}
