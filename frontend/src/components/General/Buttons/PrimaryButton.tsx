import type { FC } from 'react'
import { memo } from 'react'
import classes from './PrimaryButton.module.css'

interface Props {
  label: string;
  fullWidth?: boolean;
  onClick?: () => any;
}

export const PrimaryButton: FC<Props> = memo(function (props) {
  return (
    <button
      className={classes.button}
      style={props.fullWidth ? { width: '100%' } : {}}
      onClick={props.onClick}
    >
      {props.label}
    </button>
  )
})
