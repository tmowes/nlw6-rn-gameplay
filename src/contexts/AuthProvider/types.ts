import { ReactNode } from 'react'

export type AuthProviderProps = {
  children: ReactNode
}

export type AuthContextData = {
  user: User
  signIn: () => Promise<void>
  // signOut: () => Promise<void>
  // updateUser: (user: User) => Promise<void>
}

export type User = {
  id: string
  username: string
  firstName: string
  email: string
  avatar: string
  token: string
}

export type SignInCredentials = {
  email: string
  password: string
}

export type AuthState = {
  user: User
  // token: string
}
