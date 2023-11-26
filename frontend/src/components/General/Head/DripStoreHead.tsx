import classes from './DripStoreHead.module.css'
import { DripStoreLoginLogo } from './DripStoreHeadLogo'
import { Link } from 'react-router-dom'

export const DripStoreHead = function () {
  return (
    <div className={classes.DripStoreHead}>
      <div className={classes.DripStoreHeadContainer}>
        <Link
          className={classes.DripStoreHeadWrapper}
          to={'/'}
        >
          <div className={classes.DripStoreHeadBrand}>
            <div className={classes.DripStoreHeadLogo}>
              <DripStoreLoginLogo className={classes.DripStoreHeadIcon} />
            </div>
            <div className={classes.DripStoreHeadCompany}>Digital Store</div>
          </div>
        </Link>
      </div>
    </div>
  )
}
