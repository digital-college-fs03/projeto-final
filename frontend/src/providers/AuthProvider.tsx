import * as React from 'react'
import { useState } from 'react'
import { User } from '../types/auth.ts'
import { AuthService } from '../services/auth.ts'
import { AuthContext } from '../components/Auth/AuthContext.tsx'

export function AuthProvider ({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User>(null)

  const signIn = async (username: string, password: string): Promise<User> => {
    const content = await AuthService.signIn(username, password)
    const data = content.data as User
    if (content.status !== 'success' || !data) {
      return null
    }
    const user = {
      abilities: data.abilities,
      username: username,
    }
    setUser(user)
    return user
  }

  const signOut = async (): Promise<boolean> => {
    const content = await AuthService.signOut()
    if (content.status !== 'success') {
      return false
    }
    setUser(null)
    return true
  }

  const value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
