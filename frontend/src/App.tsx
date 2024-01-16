import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import { LayoutComponent } from './components/Pages/DripStoreLayout'
import { loginAction, LoginComponent, loginLoader } from './components/Pages/Login/DripStoreLogin'
import { HomeComponent } from './components/Pages/Home/DripStoreHome'
import { OrdersComponent, ordersLoader } from './components/Pages/Orders/DripStoreOrders'
import { authStore } from './Store'
import { me } from './services/Auth'

const semaphore: Record<string, boolean> = {}

export default function App () {
  const router = createBrowserRouter([
    {
      id: 'root',
      path: '/',
      element: <LayoutComponent />,
      async loader () {
        console.log('loader', authStore.state.token, authStore.state.user)
        if (!authStore.state.token || authStore.state.user) {
          return null
        }
        const loading = semaphore.me
        if (loading) {
          return null
        }
        try {
          semaphore.me = true
          const content = await me()
          if (content?.data?.username) {
            authStore.state.user = {
              username: content?.data?.username as string
            }
          }
        } catch (error) {
        } finally {
          semaphore.me = false
        }
        return null
      },
      children: [
        {
          index: true,
          element: <HomeComponent />,
        },
        {
          path: 'login',
          action: loginAction,
          loader: loginLoader,
          element: <LoginComponent />,
        },
        {
          path: 'orders',
          loader: ordersLoader,
          element: <OrdersComponent />,
        },
      ],
    },
  ])

  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Carregando...</p>}
    />
  )
}
