import { useApp } from '../../hooks'
import { useNavigate } from 'react-router-dom'

export function AuthStatus () {
  const app = useApp()
  const navigate = useNavigate()

  if (!app.session) {
    return <p>You are not logged in.</p>
  }

  const logout = async () => {
    const ok = await app.auth.signOut()
    if (!ok) {
      return
    }
    navigate('/')
  }

  return (
    <p>
      Welcome {app.session?.username}!{' '}
      <button
        onClick={logout}
      >
        Sign out
      </button>
    </p>
  )
}
