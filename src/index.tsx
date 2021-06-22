import React from 'react'
import { StatusBar } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

import { Routes } from './routes'
import { LinearBackground } from './components'

export const AppSrc = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
      <LinearBackground>
        <Routes />
      </LinearBackground>
    </NavigationContainer>
  </SafeAreaProvider>
)
