import { Link, useNavigate } from 'react-router-dom'
import { authStore } from '../../../Store'
import User from '../../../models/User'

import classes from './DripStoreHead.module.css'
import { DripStoreLoginLogo } from './DripStoreHeadLogo'
import { PrimaryButton } from '../Buttons/PrimaryButton'

export const DripStoreHead = function () {
  const navigate = useNavigate()
  const user = authStore.state.user as User | undefined

  const signOutAndRedirect = async function () {
    authStore.state.token = ''
    authStore.state.user = undefined
    navigate('/')
  }

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

        <div className={classes.DripStoreHeadSeparator} />

        <div className={classes.DripStoreHeadRight}>
          {
            user ?
              <div style={{display: 'flex'}}>
                <span>{user?.username}</span>
                <PrimaryButton
                  label={'Sair'}
                  onClick={signOutAndRedirect}
                />
              </div>
              :
              <PrimaryButton
                label={'Entrar'}
                onClick={() => navigate('/login')}
              />
          }
        </div>
      </div>
    </div>
  )
}
