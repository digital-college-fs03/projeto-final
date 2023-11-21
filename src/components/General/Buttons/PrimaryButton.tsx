import type { FC } from 'react'
import { memo } from 'react'
import classes from './PrimaryButton.module.css'

interface Props {
  label: string;
}

export const PrimaryButton: FC<Props> = memo(function (props = { label: 'empty label' }) {
  return (
    <button className={classes.button}>
      {props.label}
    </button>
  )
})
