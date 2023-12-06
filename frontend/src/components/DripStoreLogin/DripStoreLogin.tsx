import { memo } from 'react';
import type { FC } from 'react';

import classes from './DripStoreLogin.module.css';
import { DripStoreLoginMain } from './Main/DripStoreLoginMain';

interface Props {
}

export const DripStoreLogin: FC<Props> = memo(function DripStoreLogin(props = {}) {
  return (
    <div>
      <DripStoreLoginMain/>
    </div>
  );
});
