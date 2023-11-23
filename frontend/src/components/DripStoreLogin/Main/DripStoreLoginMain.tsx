import classes from './DripStoreLoginMain.module.css';
import { Facebook } from '../../General/Icons/Facebook/Facebook';
import { Gmail } from '../../General/Icons/Gmail/Gmail';
import { PrimaryButton } from '../../General/Buttons/PrimaryButton';
import { useState } from 'react';

interface Props {
  className?: string;
}

export const DripStoreLoginMain = function () {
  const [username, setUsername] = useState('user1')
  const [password, setPassword] = useState('pass1')

  const requestSignIn = () => {
    fetch(
      'http://localhost:5174/api/v1/login',
      {
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
        body: JSON.stringify({ username, password })
      }
    )
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((data) => console.log(data))
  }

  return (
    <div className={classes.DripStoreLoginMain}>

      <div className={classes.DripStoreLoginMainContainer}>

        <div className={classes.DripStoreLoginMainForm}>
          <div className={classes.DripStoreLoginMainFormWrapper}>
            <div className={classes.DripStoreLoginMainFormTitle}>
              <div className={classes.DripStoreLoginMainFormTitleCaption}>Acesse sua conta</div>
              <div className={classes.DripStoreLoginMainFormTitleSignUp}>
                <p>
                  Novo cliente? Então registre-se <a href="">aqui</a>.
                </p>
              </div>
            </div>

            <div className={classes.DripStoreLoginMainFormBody}>
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

            <div className={classes.DripStoreLoginMainFormRemember}>Esqueci minha senha</div>

            <div className={classes.DripStoreLoginMainFormSignIn}>
              <PrimaryButton
                label="Acessar Conta"
                onClick={requestSignIn}
              />
            </div>

            <div className={classes.DripStoreLoginMainFormBottom}>
              <span>Ou faça login com</span>
              <div className={classes.DripStoreLoginMainFormBottomIcons}>
                <Facebook />
                <Gmail />
              </div>
            </div>
          </div>
        </div>

        <div className={classes.DripStoreLoginMainShoes}>
          <img
            src="/assets/shoes.png"
            alt="shoes"
          />
        </div>

      </div>

    </div>
  )
}
