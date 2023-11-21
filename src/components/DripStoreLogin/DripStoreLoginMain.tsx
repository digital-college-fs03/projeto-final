import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import classes from './DripStoreLogin.module.css';
import { FacebookOriginal } from './FacebookOriginal/FacebookOriginal';
import { Gmail1 } from './Gmail1/Gmail1';
import { Group53511Icon } from './Group53511Icon.js';
import { Group53580 } from './Group53580/Group53580';
import { GroupIcon2 } from './Head/DripStoreLoginLogo.js';
import { GroupIcon } from './Footer/DripStoreLoginFooterLogo.js';
import { PrimaryButton_Property1Default } from './PrimaryButton_Property1Default/PrimaryButton_Property1Default';
import { Rectangle156Icon } from './Rectangle156Icon.js';
import { DripStoreLoginFooterSeparatorIcon } from './DripStoreLoginFooterSeparatorIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 474:841 */
export const DripStoreLogin: FC<Props> = memo(function DripStoreLogin(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.DripStoreLoginHead}>
        <div className={classes.DripStoreLoginHeadContainer}>
          <div className={classes.DripStoreLoginHeadBrand}>
            <div className={classes.DripStoreLoginHeadLogo}>
              <GroupIcon2 className={classes.DripStoreLoginHeadIcon} />
            </div>
            <div className={classes.DripStoreLoginHeadCompany}>Digital Store</div>
          </div>
        </div>
      </div>

      <div className={classes.wrapperFrame53687}>
        <div className={classes.frame53687}>
          <div className={classes.frame53634}>
            <div className={classes.group53683}>
              <div className={classes.acesseSuaConta}>Acesse sua conta</div>
              <div className={classes.frame53659}>
                <div className={classes.novoClienteEntaoRegistreSeAqui}>
                  <p className={classes.labelWrapper}>
                    <span className={classes.label}>Novo cliente? Então registre-se </span>
                    <span className={classes.label2}>aqui</span>
                    <span className={classes.label3}>.</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={classes.group53682}>
              <div className={classes.rectangle1}></div>
              <div className={classes.insiraSeuLoginOuEmail}>Insira seu login ou email</div>
              <div className={classes.login}>Login *</div>
              <div className={classes.rectangle12}></div>
              <div className={classes.insiraSuaSenha}>Insira sua senha</div>
              <div className={classes.senha}>Senha *</div>
            </div>
            <div className={classes.group53579}>
              <div className={classes.esqueciMinhaSenha}>Esqueci minha senha</div>
            </div>
            <PrimaryButton_Property1Default
              className={classes.primaryButton}
              swap={{
                rectangle156: <Rectangle156Icon className={classes.icon} />,
              }}
              text={{
                button: <div className={classes.button}>Acessar Conta</div>,
              }}
            />
            <div className={classes.group39227}>
              <div className={classes.frame39228}>
                <div className={classes.ouFacaLoginCom}>Ou faça login com</div>
                <div className={classes.group36835}>
                  <FacebookOriginal className={classes.facebookOriginal} />
                  <Gmail1 className={classes.gmail1} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

      <div className={classes.pexelsMelvinBuezo25291481}></div>
    </div>
  );
});
