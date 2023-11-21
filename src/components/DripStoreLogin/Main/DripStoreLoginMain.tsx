import classes from './DripStoreLoginMain.module.css'
import { Facebook } from '../../General/Icons/Facebook/Facebook'
import { Gmail } from '../../General/Icons/Gmail/Gmail'
import { PrimaryButton } from '../../General/Buttons/PrimaryButton'

interface Props {
  className?: string;
}

/* @figmaId 474:841 */
export const DripStoreLoginMain = function () {
  return (
    <div className={classes.DripStoreLoginMain}>
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
            <PrimaryButton label="Acessar Conta" />
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

    </div>
  )
}
