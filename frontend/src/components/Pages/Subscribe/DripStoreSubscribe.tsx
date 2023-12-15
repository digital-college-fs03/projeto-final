import classes from './DripStoreSubscribe.module.css'
import { PrimaryButton } from '../../General/Buttons/PrimaryButton'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { register, Status } from '../../../services/Auth'

export function DripStoreSubscribe () {
    const [username, setUsername] = useState(import.meta.env.FRONTEND_DEFAULT_USERNAME)
    const [password, setPassword] = useState(import.meta.env.FRONTEND_DEFAULT_PASSWORD)
    const [message, setMessage] = useState('')

    const navigate = useNavigate()

    const requestSubscribe = async function () {
        console.table({ username, password })
        const content = await register(username, password)
        let message = 'Não foi possível criar o usuário'
        if (content.status === Status.success) {
            message = ''
            navigate('/login')
        }
        setMessage(message)
    }

    return <div className={classes.DripStoreSubscribeContainer}>

        <div className={classes.DripStoreCommonForm}>
          <div className={classes.DripStoreCommonFormWrapper}>
            <div className={classes.DripStoreCommonFormTitle}>
              <div className={classes.DripStoreCommonFormTitleCaption}>
                Criar conta
              </div>
            </div>

            <div className={classes.DripStoreCommonFormBody}>
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

            <div className={classes.DripStoreCommonFormSignIn}>
              <PrimaryButton
                label="Criar Conta"
                fullWidth
                onClick={requestSubscribe}
              />
            </div>

            {message && (
              <div className={classes.DripStoreCommonFormError}>{message}</div>
            )}

            <div className={classes.DripStoreCommonFormTitleSignUp}>
              <p>
                Já possui conta? Então clique <Link to="/login">aqui</Link> para entrar.
              </p>
            </div>
          </div>
        </div>
        </div>
}