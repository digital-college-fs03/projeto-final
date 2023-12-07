import { memo } from 'react'
import { Outlet } from 'react-router-dom'
import classes from './App.module.css'

import { DripStoreHead } from './components/General/Head/DripStoreHead'
import { DripStoreFooter } from './components/General/Footer/DripStoreFooter'

export const App = memo(function App () {
  return (
    <>
      <DripStoreHead />
      <div className={classes.main}>
        <Outlet />
      </div>
      <DripStoreFooter />
    </>
  )
})
