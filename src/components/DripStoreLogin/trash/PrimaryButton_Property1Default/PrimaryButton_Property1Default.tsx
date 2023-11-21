import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../../General/Buttons/_resets.module.css';
import classes from './PrimaryButton_Property1Default.module.css';
import { Rectangle156Icon } from './Rectangle156Icon';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  swap?: {
    rectangle156?: ReactNode;
  };
  text?: {
    button?: ReactNode;
  };
}
/* @figmaId 33:685 */
export const PrimaryButton_Property1Default: FC<Props> = memo(function PrimaryButton_Property1Default(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.rectangle156}>
        {props.swap?.rectangle156 || <Rectangle156Icon className={classes.icon} />}
      </div>
      {props.text?.button != null ? props.text?.button : <div className={classes.button}>Button</div>}
    </button>
  );
});
