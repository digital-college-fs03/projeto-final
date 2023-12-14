import { useState } from 'react'
import { PrimaryButton } from '../../General/Buttons/PrimaryButton'
import classes from './DripStoreSubscribe.module.css'
import common from '../../General/Common/DripStoreCommonForm.module.css'
import { Link } from 'react-router-dom'
import { Status, subscribe } from '../../../services/Auth'

export const DripStoreSubscribe = function () {
  const [username, setUsername] = useState(import.meta.env.FRONTEND_DEFAULT_USERNAME)
  const [password, setPassword] = useState(import.meta.env.FRONTEND_DEFAULT_PASSWORD)
  const [message, setMessage] = useState('')

  const requestSubscribe = async () => {
    console.table({ username, password})
    const content = await subscribe(username, password)
    let message = ''
    if (content.status === Status.error) {
      message = 'Não foi possível criar o usuário'
    }
    setMessage(message)
  }

  return <div className={classes.DripStoreSubscribeContainer}>
    <div className={classes.DripStoreSubscribeFormWrapper}>
      <div className={classes.DripStoreSubscribeForm}>
        <h1>
          Criar Conta
        </h1>
        <div className={common.DripStoreCommonFormBody}>
          <label>Login *</label>
          <div>
            <input
              type="text"
              placeholder="Insira seu login ou email"
              onChange={(event) => setUsername(event.target.value)}
              value={username}
            />
          </div>
          <label>Senha *</label>
          <div>
            <input
              type="text"
              placeholder="Insira sua senha"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
          </div>
        </div>
        <div className={classes.DripStoreSubscribeFormRequest}>
          <PrimaryButton
            label="Criar Conta"
            fullWidth
            onClick={requestSubscribe}
          />
        </div>

        {message && (
          <div className={classes.DripStoreSubscribeFormError}>{message}</div>
        )}

        <hr />
        <div className={classes.DripStoreSubscribeFormTitleSignUp}>
          <p>
            Já possui uma conta? Então faça o login <Link to="/login">aqui</Link>.
          </p>
        </div>
      </div>
    </div>
  </div>
}
