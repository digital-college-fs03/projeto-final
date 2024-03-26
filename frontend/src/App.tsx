import { Route, Routes, } from 'react-router-dom'

import { RootLayout } from './layouts/RootLayout.tsx'

import { AppProvider } from './providers/AppProvider.tsx'
import { ProtectedRoute } from './components/Auth/ProtectedRoute.tsx'

import { LoginPage } from './pages/LoginPage.tsx'
import { PublicPage } from './pages/PublicPage.tsx'
import { PrivatePage } from './pages/PrivatePage.tsx'

export default function App () {
  return (
    <AppProvider>
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
          <Route element={<ProtectedRoute >}>
            <Route
              path="/private"
              element={<PrivatePage />}
            />
          </Route>
        </Route>
      </Routes>
    </AppProvider>
  )
}
