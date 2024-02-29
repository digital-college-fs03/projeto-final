import { Route, Routes, } from 'react-router-dom'

import { RootLayout } from './layouts/RootLayout.tsx'

import { AuthProvider } from './providers/AuthProvider.tsx'
import { RequireAuth } from './components/Auth/RequireAuth.tsx'

import { LoginPage } from './pages/LoginPage.tsx'
import { PublicPage } from './pages/PublicPage.tsx'
import { PrivatePage } from './pages/PrivatePage.tsx'

import './App.css'

export default function App () {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route
            path="/"
            element={<PublicPage />}
          />
          <Route
            path="/login"
            element={<LoginPage />}
          />
          <Route
            path="/protected"
            element={
              <RequireAuth>
                <PrivatePage />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}
