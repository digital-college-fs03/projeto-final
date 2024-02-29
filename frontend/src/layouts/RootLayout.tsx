import { Link, Outlet } from 'react-router-dom'
import { AuthStatus } from '../components/Auth/AuthStatus.tsx'

export function RootLayout () {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Página Pública</Link>
        </li>
        <li>
          <Link to="/private">Página Privada</Link>
        </li>
      </ul>
      <AuthStatus />

      <Outlet />
    </div>
  )
}
