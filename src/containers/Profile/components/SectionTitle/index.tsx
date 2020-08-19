import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface IProps {
  className?: string
  title?: string
}
const SectionTitle: React.FC<IProps> = ({ className, title }: IProps) => {
  return <div className={clsx(styles.title, className)}>{title}</div>
}

export default SectionTitle
