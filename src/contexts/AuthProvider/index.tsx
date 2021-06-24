import React, { createContext, useContext, useEffect, useState } from 'react'

import * as AuthSession from 'expo-auth-session'

import { CLIENT_ID, REDIRECT_URI, RESPONSE_TYPE, SCOPE } from '../../configs'
import { AuthContextData, AuthProviderProps, AuthState, User } from './types'
import { api } from '../../services'

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props
  const [userData, setUserData] = useState<User>({} as User)
  const [isLoading, setIsLoading] = useState(false)

  const signIn = async () => {
    try {
      setIsLoading(true)
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      const response = await AuthSession.startAsync({ authUrl })
      console.log(response)
    } catch (error) {
      throw new Error(error)
    }
  }

  // const updateUser = async (user: User) => {
  //   try {
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }

  // const signOut = async () => {
  //   try {
  //   } catch (error) {
  //     throw new Error(error)
  //   }
  // }

  useEffect(() => {
    const loadUserData = async () => true
    loadUserData()
  }, [])

  const providerValues = {
    signIn,
    // signOut,
    // updateUser,
    user: userData,
  }

  return <AuthContext.Provider value={providerValues}>{children}</AuthContext.Provider>
}

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within a AuthProvider')
  }
  return context
}
