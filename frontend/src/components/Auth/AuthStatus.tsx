import { useAuth } from '../../hooks'
import { useNavigate } from 'react-router-dom'

export function AuthStatus () {
  const auth = useAuth()
  const navigate = useNavigate()

  if (!auth.user) {
    return <p>You are not logged in.</p>
  }

  const logout = async () => {
    const ok = await auth.signOut()
    if (!ok) {
      return
    }
    navigate('/')
  }

  return (
    <p>
      Welcome {auth.user?.username}!{' '}
      <button
        onClick={logout}
      >
        Sign out
      </button>
    </p>
  )
}
