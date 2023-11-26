import { memo } from 'react'
import { Outlet } from 'react-router-dom'

import { DripStoreHead } from './components/General/Head/DripStoreHead'
import { DripStoreFooter } from './components/General/Footer/DripStoreFooter'

export const App = memo(function App () {
  return (
    <>
      <DripStoreHead />
      <Outlet />
      <DripStoreFooter />
    </>
  )
})
