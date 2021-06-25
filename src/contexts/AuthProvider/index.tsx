import React, { createContext, useContext, useEffect, useState } from 'react'

import AsyncStorage from '@react-native-async-storage/async-storage'
import * as AuthSession from 'expo-auth-session'

import { AuthContextData, AuthProviderProps, AuthResponse, User } from './types'
import { api } from '../../services'
import { COLLECTION_USERS } from '../../configs'

const { CDN_IMAGE } = process.env
const { CLIENT_ID } = process.env
const { REDIRECT_URI } = process.env
const { RESPONSE_TYPE } = process.env
const { SCOPE } = process.env

export const AuthContext = createContext({} as AuthContextData)

export const AuthProvider = (props: AuthProviderProps) => {
  const { children } = props
  const [userData, setUserData] = useState<User>({} as User)
  const [isLoading, setIsLoading] = useState(false)

  const signIn = async () => {
    try {
      setIsLoading(true)
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`
      const { type, params } = (await AuthSession.startAsync({
        authUrl,
      })) as AuthResponse
      if (type === 'success' && !params.error) {
        api.defaults.headers.Authorization = `Bearer ${params.access_token}`
        const { data } = await api.get('users/@me')
        const [firstName, secondName] = data.username.split(' ')
        const fixFirst = firstName.length < 2 ? firstName + secondName : firstName
        const avatar = `${CDN_IMAGE}/avatars/${data.id}/${data.avatar}.png`
        const user = {
          ...data,
          firstName: fixFirst,
          avatar,
          token: params.access_token,
        }
        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(user))
        setUserData(user)
      }
    } catch (error) {
      throw new Error(error)
    } finally {
      setIsLoading(false)
    }
  }

  const signOut = async () => {
    setUserData({} as User)
    await AsyncStorage.removeItem(COLLECTION_USERS)
  }

  useEffect(() => {
    const loadUserData = async () => {
      const storage = await AsyncStorage.getItem(COLLECTION_USERS)
      if (storage) {
        const user = JSON.parse(storage) as User
        api.defaults.headers.Authorization = `Bearer ${user.token}`
        setUserData(user)
      }
    }
    loadUserData()
  }, [])

  const providerValues = {
    isLoading,
    signIn,
    signOut,
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
