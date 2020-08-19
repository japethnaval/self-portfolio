import React from 'react'
import clsx from 'clsx'
import styles from './styles.module.scss'

interface IProps {
  children: React.ReactNode
  className?: string
  sectionClassName?: string
}

const Section: React.FC<IProps> = ({
  children,
  className,
  sectionClassName,
}: IProps) => {
  return (
    <div className={clsx(styles.container, className)}>
      <div className={clsx(styles.containerSection, sectionClassName)}>
        {children}
      </div>
    </div>
  )
}

export default Section
