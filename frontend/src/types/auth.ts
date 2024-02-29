export type User = { username: string, abilities?: string[] } | null

export interface AuthContextType {
  user: User
  signIn: (username: string, password: string) => Promise<User>
  signOut: () => Promise<boolean>
}
