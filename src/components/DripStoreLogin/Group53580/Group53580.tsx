import { memo } from 'react';
import type { FC } from 'react';

import resets from '../../_resets.module.css';
import { DropWithShine1Icon } from './DropWithShine1Icon.js';
import classes from './Group53580.module.css';

interface Props {
  className?: string;
}
/* @figmaId 301:804 */
export const Group53580: FC<Props> = memo(function Group53580(props = {}) {
  return (
    <div className={`${resets.storybrainResets} ${classes.root}`}>
      <div className={classes.dropWithShine1}>
        <DropWithShine1Icon className={classes.icon} />
      </div>
      <div className={classes.dripStore}>Drip Store</div>
    </div>
  );
});
