import { memo } from 'react';
import type { FC } from 'react';

import classes from './DripStoreLogin.module.css';
import { DripStoreLoginHead } from './Head/DripStoreLoginHead.js';
import { DripStoreLoginFooter } from './Footer/DripStoreLoginFooter.js';

interface Props {
  className?: string;
}

export const DripStoreLogin: FC<Props> = memo(function DripStoreLogin(props = {}) {
  return (
    <div className={classes.root}>
      <DripStoreLoginHead/>
      <DripStoreLoginFooter/>
    </div>
  );
});
