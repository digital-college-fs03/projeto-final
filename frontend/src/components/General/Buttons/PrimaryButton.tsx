import type { FC } from 'react'
import { memo } from 'react'
import classes from './PrimaryButton.module.css'

interface Props {
  type?: 'button' | 'submit' | 'reset';
  label: string;
  fullWidth?: boolean;
  disabled?: boolean;
  onClick?: () => any;
}

export const PrimaryButton: FC<Props> = memo(function (props) {
  return (
    <button
      type={props.type ?? 'button'}
      className={classes.button}
      style={props.fullWidth ? { width: '100%' } : {}}
      onClick={props.onClick}
      disabled={props.disabled ?? false}
    >
      {props.label}
    </button>
  )
})
