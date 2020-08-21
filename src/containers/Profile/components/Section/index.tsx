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
    <div
      data-aos-once="true"
      data-aos-duration="300"
      data-aos-easing="ease-in-out"
      data-aos-mirror="true"
      data-aos-anchor-placement="top-center"
      data-aos="fade-up"
      className={clsx(styles.container, className)}
    >
      <div className={clsx(styles.containerSection, sectionClassName)}>
        {children}
      </div>
    </div>
  )
}

export default Section
