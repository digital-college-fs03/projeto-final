import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import classes from './DripStoreLogin.module.css'

import { Facebook } from '../../General/Icons/Facebook/Facebook'
import { Gmail } from '../../General/Icons/Gmail/Gmail'
import { PrimaryButton } from '../../General/Buttons/PrimaryButton'

export const DripStoreLogin = function () {
  const { t } = useTranslation()

  const [username, setUsername] = useState('wilcorrea')
  const [password, setPassword] = useState('aq1sw2de3')
  const [error, setError] = useState(false)
  const [message, setMessage] = useState('')

  const requestSignIn = async () => {
    try {
      const response = await fetch(
        'http://localhost:5174/api/v1/login',
        {
          headers: {
            'Content-Type': 'application/json',
          },
          method: 'POST',
          body: JSON.stringify({ username, password })
        }
      )
      const data = await response.json()

      setError(!response.ok)
      setMessage(data.message)

    } catch (exception) {
      setError(true)
      if (typeof exception === 'string') {
        setMessage(exception)
      } else if (exception instanceof Error) {
        setMessage(exception.message)
      }
    }
  }

  return (
    <div className={classes.DripStoreLogin}>

      <div className={classes.DripStoreLoginContainer}>

        <div className={classes.DripStoreLoginForm}>
          <div className={classes.DripStoreLoginFormWrapper}>
            <div className={classes.DripStoreLoginFormTitle}>
              <div className={classes.DripStoreLoginFormTitleCaption}>{t('login.title.caption')}</div>
              <div className={classes.DripStoreLoginFormTitleSignUp}>
                <p>
                {t('login.new.text')} <a href="">{t('login.new.link')}</a>.
                </p>
              </div>
            </div>

            <div className={classes.DripStoreLoginFormBody}>
              <label>{t('login.username.label')} *</label>
              <div>
                <input
                  type="text"
                  placeholder={t('login.username.placeholder')}
                  onChange={(event) => setUsername(event.target.value)}
                  value={username}
                />
              </div>
              <label>{t('login.password.label')} *</label>
              <div>
                <input
                  type="text"
                  placeholder={t('login.password.placeholder')}
                  onChange={(event) => setPassword(event.target.value)}
                  value={password}
                />
              </div>
            </div>

            <div className={classes.DripStoreLoginFormRemember}>{t('login.forgot')}</div>

            <div className={classes.DripStoreLoginFormSignIn}>
              <PrimaryButton
                label={t('login.button')}
                fullWidth
                onClick={requestSignIn}
              />
            </div>

            {error && (
              <div className={classes.DripStoreLoginFormError}>{message}</div>
            )}

            <div className={classes.DripStoreLoginFormBottom}>
              <span>{t('login.oauth')}</span>
              <div className={classes.DripStoreLoginFormBottomIcons}>
                <Facebook />
                <Gmail />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.DripStoreLoginShoes}>
          <img
            src="/assets/shoes.png"
            alt="shoes"
          />
        </div>

      </div>

    </div>
  )
}
