import React from 'react'
import IconButton from '@material-ui/core/IconButton'

interface IProps {
  children: React.ReactNode
  controls?: string
  onClick?: (event: React.MouseEvent<HTMLElement>) => void
}

export const Icon: React.FC<IProps> = ({
  children,
  controls,
  onClick,
}: IProps) => {
  return (
    <IconButton onClick={onClick} aria-controls={controls} color="inherit">
      {children}
    </IconButton>
  )
}

export default Icon
