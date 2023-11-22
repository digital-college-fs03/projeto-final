import classes from './DripStoreLoginMain.module.css';
import { Facebook } from '../../General/Icons/Facebook/Facebook';
import { Gmail } from '../../General/Icons/Gmail/Gmail';
import { PrimaryButton } from '../../General/Buttons/PrimaryButton';
import { useState } from 'react';

interface Props {
  className?: string;
}

export const DripStoreLoginMain = function () {
  const [username, setUsername] = useState('')

  const clicarNoBotaoAcessarConta = () => {
    fetch(
      'https://webhook.site/f3b2ca4f-02fd-4a71-a448-cbf8fc574fd2',
      {
        method: 'POST',
        body: JSON.stringify({ username: username })
      }
    )
  }
  /**
   *  <PrimaryButton
   *     label="Acessar Conta"
   *     onClick={clicarNoBotaoAcessarConta}
   *  />
   */
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
                />
              </div>
            </div>

            <div className={classes.DripStoreLoginMainFormRemember}>Esqueci minha senha</div>

            <div className={classes.DripStoreLoginMainFormSignIn}>
              <PrimaryButton
                label="Acessar Conta"
                onClick={clicarNoBotaoAcessarConta}
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
