import { Content, post, Status, setToken } from './index.ts'

const AuthService = {
  async signIn (username: string, password: string): Promise<Content> {
    const response = await post('/api/v1/login', { username, password })
    if (response.status === Status.success) {
      setToken(response.data)
    }
    return response
  },
  async signOut (): Promise<Content> {
    const response = await post('/api/v1/logout')
    if (response.status === Status.success) {
      setToken(undefined)
    }
    return response
  },
}

export { AuthService }
