import { ReactNode } from 'react'

import { AuthSessionResult } from 'expo-auth-session'

export type AuthProviderProps = {
  children: ReactNode
}

export type AuthContextData = {
  isLoading: boolean
  user: User
  signIn: () => Promise<void>
  signOut: () => Promise<void>
}

export type User = {
  id: string
  username: string
  firstName: string
  email: string
  avatar: string
  token: string
}

export type AuthResponse = AuthSessionResult & {
  params: {
    access_token?: string
    error?: string
  }
}
