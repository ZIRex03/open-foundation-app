import React, { ReactNode } from 'react'

import styles from './EmptyState.module.css'
import { IconType } from 'react-icons';

interface EmptyStateProps {
    title: string,
    icon?: IconType | ReactNode | string
}

const EmptyState = ({title, icon}:EmptyStateProps) => {

  const renderIcon = () => {
    if(!icon) return null

    if (typeof icon === 'function') {
      const IconComponent = icon;
      return <IconComponent className={styles.emptyIcon} />;
    }
  }
  return (
    <div className={styles.emptyBox}>
        {renderIcon()}
        <p className={styles.emptyTitle}>{title}</p>
    </div>
  )
}

export default EmptyState