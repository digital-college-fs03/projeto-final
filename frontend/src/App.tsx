import { memo } from 'react';
import type { FC } from 'react';
import { Outlet } from 'react-router-dom';

import { DripStoreLoginHead } from './components/DripStoreLogin/Head/DripStoreLoginHead';
import { DripStoreLoginFooter } from './components/DripStoreLogin/Footer/DripStoreLoginFooter';

import classes from './App.module.css';
import resets from './components/General/Buttons/_resets.module.css';

interface Props {
  className?: string;
}
export const App: FC<Props> = memo(function App(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <DripStoreLoginHead/>
      <Outlet />
      <DripStoreLoginFooter/>
    </div>
  );
});
