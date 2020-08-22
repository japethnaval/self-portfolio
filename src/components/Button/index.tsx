import React from 'react'
import clsx from 'clsx'

import MuiButton, {
  ButtonProps as MUIButtonProps,
} from '@material-ui/core/Button'
import { Colors as ButtonColor } from '../../utils/constants/Button'

import styles from './styles.module.scss'

type ButtonVariant = 'default' | 'rounded'

interface IButtonProps {
  className?: string
  color?: ButtonColor
  variant?: ButtonVariant
  children?: React.ReactNode
  disabled?: boolean
  leftIcon?: React.ReactNode
  rightIcon?: React.ReactNode
  onClick?: MUIButtonProps['onClick']
  [x: string]: any
}

const Button: React.FC<IButtonProps> = ({
  className,
  color = 'darkBlue',
  variant = 'default',
  disabled,
  leftIcon,
  rightIcon,
  onClick,
  children,
  ...inputProps
}) => {
  return (
    <MuiButton
      variant="contained"
      color="default"
      className={clsx(styles.button, styles[variant], styles[color], className)}
      classes={{ disabled: styles.disabled }}
      disabled={disabled}
      onClick={onClick}
      startIcon={leftIcon}
      endIcon={rightIcon}
      {...inputProps}
    >
      {children}
    </MuiButton>
  )
}

export default Button
