import React, { useEffect, useState } from 'react'

import AppLoading from 'expo-app-loading'

import { AppRoutes } from './app.routes'

export const Routes = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false)
    }, 200)
  }, [])

  if (isLoading) {
    return <AppLoading />
  }

  return <AppRoutes />
}
