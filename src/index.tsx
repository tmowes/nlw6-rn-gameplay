import React from 'react'
import { StatusBar } from 'react-native'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'

import { Routes } from './routes'
import { LinearBackground } from './components'
import { AppProvider } from './contexts'

export const AppSrc = () => (
  <SafeAreaProvider>
    <NavigationContainer>
      <AppProvider>
        <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
        <LinearBackground>
          <Routes />
        </LinearBackground>
      </AppProvider>
    </NavigationContainer>
  </SafeAreaProvider>
)
