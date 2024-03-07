import { useLocation, useNavigate } from 'react-router-dom'
import * as React from 'react'
import { useApp } from '../hooks'
import { useState } from 'react'

export function LoginPage () {
  const navigate = useNavigate()
  const location = useLocation()
  const app = useApp()
  const [error, setError] = useState('')

  const from = location.state?.from?.pathname || '/'

  async function handleSubmit (event: React.FormEvent<HTMLFormElement>) {
    setError('')
    event.preventDefault()
    const formData = new FormData(event.currentTarget)
    const username = formData.get('username') as string
    const password = formData.get('password') as string

    try {
      const user = await app.auth.signIn(username, password)
      if (!user) {
        setError('Usuário e/ou senha inválidos')
        return
      }
      navigate(from, { replace: true })
    } catch (e) {
      setError('Ocorreu um erro ao tentar fazer o login. Tente novamente.')
    }
  }

  return (
    <div>
      <p>É preciso estar conectado para acessar '{from}'</p>

      <form onSubmit={handleSubmit}>
        <label>
          Usuário
          <input
            name="username"
            type="text"
          />
        </label>
        <label>
          Senha
          <input
            name="password"
            type="password"
          />
        </label>
        <button type="submit">
          Entrar
        </button>

        {error && <p className="error">{error}</p>}
      </form>
    </div>
  )
}
