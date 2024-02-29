import { useLocation, useNavigate } from 'react-router-dom'
import * as React from 'react'
import { useAuth } from '../hooks'
import { useState } from 'react'

export function LoginPage () {
  const navigate = useNavigate()
  const location = useLocation()
  const auth = useAuth()
  const [message, setMessage] = useState('')

  const from = location.state?.from?.pathname || '/'

  async function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    setMessage('')
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    try {
      const user = await auth.signIn(username, password)
      if (!user) {
        setMessage('Usuário e/ou senha inválidos')
        return
      }
      navigate(from, { replace: true })
    } catch (e) {
      setMessage('Ocorreu um erro ao tentar fazer o login. Tente novamente.')
    }
  }

  return (
    <div>
      <p>You must log in to view the page at {from}</p>

      <form onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="username"
            type="text"
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
          />
        </label>
        <button type="submit">Login</button>
        {message && <p>{message}</p>}
      </form>
    </div>
  )
}
