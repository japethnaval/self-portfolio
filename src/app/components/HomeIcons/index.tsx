import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IconButton from '../IconButton'
import styles from './styles.module.scss'

export interface IToolbarProps {
  onClickHome: () => void
  onClickUser: () => void
  onClickTools: () => void
  onClickPhone: () => void
}

const HomeIcons: React.FC<IToolbarProps> = ({
  onClickHome,
  onClickPhone,
  onClickTools,
  onClickUser,
}: IToolbarProps) => (
  <div className={styles.container}>
    <IconButton onClick={onClickHome}>
      <FontAwesomeIcon icon="home" />
    </IconButton>
    <IconButton onClick={onClickUser}>
      <FontAwesomeIcon icon="user" />
    </IconButton>
    <IconButton onClick={onClickTools}>
      <FontAwesomeIcon icon="tools" />
    </IconButton>
    <IconButton onClick={onClickPhone}>
      <FontAwesomeIcon icon="phone" />
    </IconButton>
  </div>
)

export default HomeIcons
