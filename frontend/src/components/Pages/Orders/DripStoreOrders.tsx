import 'react'
import { LoaderFunctionArgs, redirect } from 'react-router-dom'

import { authStore } from '../../../Store'
import User from '../../../models/User'

export function ordersLoader ({ request }: LoaderFunctionArgs) {
  if (!authStore.state.token) {
    let params = new URLSearchParams()
    params.set('from', new URL(request.url).pathname)
    return redirect('/login?' + params.toString())
  }
  return null
}

export function OrdersComponent () {
  const user = authStore.state.user as User
  return (
    <div>
      Orders {user?.username}
    </div>
  )
}
