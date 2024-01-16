import { Outlet } from 'react-router-dom'

import classes from '../../App.module.css'
import { DripStoreHead } from '../General/Head/DripStoreHead'
import { DripStoreFooter } from '../General/Footer/DripStoreFooter'

export function LayoutComponent () {
  return <>
    <DripStoreHead />
    <div className={classes.main}>
      <Outlet />
    </div>
    <DripStoreFooter />
  </>
}
