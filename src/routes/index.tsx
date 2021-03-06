import React, { useEffect, useState } from 'react'

import AppLoading from 'expo-app-loading'
import { useFonts, Inter_400Regular, Inter_500Medium } from '@expo-google-fonts/inter'
import { Rajdhani_500Medium, Rajdhani_700Bold } from '@expo-google-fonts/rajdhani'

import { AppRoutes } from './app.routes'
import { useAuth } from '../contexts'
import { SignIn } from '../pages'

export const Routes = () => {
  const [isLoading, setIsLoading] = useState(true)
  const { user } = useAuth()
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Rajdhani_500Medium,
    Rajdhani_700Bold,
  })

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 600)
  }, [])

  if (isLoading && !fontsLoaded) {
    return <AppLoading />
  }
  return user.id ? <AppRoutes /> : <SignIn />
}
