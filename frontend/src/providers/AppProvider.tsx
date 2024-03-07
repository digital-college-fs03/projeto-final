import * as React from 'react'
import { useState } from 'react'
import { Session } from '../types/auth.ts'
import { AuthService } from '../services/auth.ts'
import { AppContext } from '../components/App/AppContext.tsx'

export function AppProvider ({ children }: { children: React.ReactNode }) {
  const [session, setSession] = useState<Session>(null)

  const auth = {
    async signIn (username: string, password: string): Promise<Session> {
      const content = await AuthService.signIn(username, password)
      const data = content.data as Session
      if (content.status !== 'success' || !data) {
        return null
      }
      const user: Session = {
        abilities: data.abilities,
        username: username,
      }
      setSession(user)
      return user
    },
    async signOut (): Promise<boolean> {
      const content = await AuthService.signOut()
      if (content.status !== 'success') {
        return false
      }
      setSession(null)
      return true
    }
  }
  const value = { session, auth }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
