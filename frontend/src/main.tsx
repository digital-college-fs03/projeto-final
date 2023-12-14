import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { App } from './App'
import './resets.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import resets from './components/General/Buttons/_resets.module.css'
import classes from './App.module.css'

import { DripStoreLogin } from './components/Pages/Login/DripStoreLogin'
import { DripStoreSubscribe } from './components/Pages/Subscribe/DripStoreSubscribe'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/login',
        element: <DripStoreLogin />,
      },
      {
        path: '/cadastro',
        element: <DripStoreSubscribe />,
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
