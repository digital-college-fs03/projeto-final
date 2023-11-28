import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { App as DripStore } from './App'
import classes from './App.module.css'

import { DripStoreLogin } from './components/Pages/Login/DripStoreLogin'

import './resets.css'
import resets from './components/_resets.module.css'

import login from './components/Pages/Login/locales/pt_BR.json'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      pt_BR: {
        translation: {
          login
        }
      }
    },
    lng: 'pt_BR',
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
    }
  })

const router = createBrowserRouter([
  {
    path: '/',
    element: <DripStore />,
    children: [
      {
        path: '/auth/login',
        element: <DripStoreLogin />,
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <RouterProvider router={router} />
    </div>
  </StrictMode>,
)
