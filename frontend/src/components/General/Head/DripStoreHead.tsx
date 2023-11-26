import classes from './DripStoreHead.module.css'
import { DripStoreLoginLogo } from './DripStoreHeadLogo'

export const DripStoreHead = function () {
  return (
    <div className={classes.DripStoreHead}>
      <div className={classes.DripStoreHeadContainer}>
        <div className={classes.DripStoreHeadWrapper}>
          <div className={classes.DripStoreHeadBrand}>
            <div className={classes.DripStoreHeadLogo}>
              <DripStoreLoginLogo className={classes.DripStoreHeadIcon} />
            </div>
            <div className={classes.DripStoreHeadCompany}>Digital Store</div>
          </div>
        </div>
      </div>
    </div>
  )
}
