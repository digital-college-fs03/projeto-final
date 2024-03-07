import { Navigate, Outlet, useLocation } from 'react-router-dom'

import { useApp } from '../../hooks'
import { Parameters } from '../../types'

export function ProtectedRoute ({ children }: Parameters) {
  const app = useApp()
  const from = useLocation()

  if (app.session) {
    return children ? children : <Outlet />
  }

  return <Navigate
    to="/login"
    state={{ from }}
    replace
  />
}
