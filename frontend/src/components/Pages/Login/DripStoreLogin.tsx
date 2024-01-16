import { useState } from 'react'
import { Form, LoaderFunctionArgs, redirect, useActionData, useLocation } from 'react-router-dom'
import { signIn } from '../../../services/Auth'
import { authStore } from '../../../Store'
import classes from './DripStoreLogin.module.css'

import { Facebook } from '../../General/Icons/Facebook/Facebook'
import { Gmail } from '../../General/Icons/Gmail/Gmail'
import { PrimaryButton } from '../../General/Buttons/PrimaryButton'

export async function loginAction ({ request }: LoaderFunctionArgs) {
  const formData = await request.formData()
  const username = formData.get('username') as string | null
  const password = formData.get('password') as string | null

  if (!username || !password) {
    return {
      error: 'Informe um usuário e uma senha'
    }
  }

  let content
  try {
    content = await signIn(username, password)
  } catch (error) {
  }

  if (!content?.data?.token) {
    return {
      error: 'Usuário e/ou senha inválidos'
    }
  }

  authStore.state.token = content?.data?.token as string
  authStore.state.user = {
    username: content?.data?.username as string
  }

  const redirectTo = formData.get('redirectTo') as string | null
  return redirect(redirectTo || '/orders')
}

export async function loginLoader () {
  if (authStore.state.token) {
    return redirect('/orders')
  }
  return null
}

export const LoginComponent = function () {
  const [username, setUsername] = useState(import.meta.env.FRONTEND_DEFAULT_USERNAME)
  const [password, setPassword] = useState(import.meta.env.FRONTEND_DEFAULT_PASSWORD)

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const from = params.get('from') || '/orders'

  const action = useActionData() as { error: string } | undefined

  return (
    <div className={classes.DripStoreLogin}>

      <div className={classes.DripStoreLoginContainer}>

        <div className={classes.DripStoreLoginForm}>
          <div className={classes.DripStoreLoginFormWrapper}>

            <div className={classes.DripStoreLoginFormRemember}>Esqueci minha senha</div>
            <Form
              method="post"
              replace
            >

              <input
                type="hidden"
                name="redirectTo"
                value={from}
              />

              <div className={classes.DripStoreLoginFormTitle}>
                <div className={classes.DripStoreLoginFormTitleCaption}>Acesse sua conta</div>
                <div className={classes.DripStoreLoginFormTitleSignUp}>
                  <p>
                    Novo cliente? Então registre-se <a href="">aqui</a>.
                  </p>
                </div>
              </div>

              <div className={classes.DripStoreLoginFormBody}>
                <label>Login *</label>
                <div>
                  <input
                    type="text"
                    name="username"
                    placeholder="Insira seu login ou email"
                    onChange={(event) => setUsername(event.target.value)}
                    value={username}
                  />
                </div>
                <label>Senha *</label>
                <div>
                  <input
                    type="text"
                    name="password"
                    placeholder="Insira sua senha"
                    onChange={(event) => setPassword(event.target.value)}
                    value={password}
                  />
                </div>
              </div>

              <div className={classes.DripStoreLoginFormRemember}>Esqueci minha senha</div>

              <div className={classes.DripStoreLoginFormSignIn}>
                <PrimaryButton
                  label="Acessar Conta"
                  type="submit"
                  fullWidth
                />
              </div>

              {action && action.error && (
                <div className={classes.DripStoreLoginFormError}>{action.error}</div>
              )}

              <div className={classes.DripStoreLoginFormBottom}>
                <span>Ou faça login com</span>
                <div className={classes.DripStoreLoginFormBottomIcons}>
                  <Facebook />
                  <Gmail />
                </div>
              </div>

            </Form>

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
