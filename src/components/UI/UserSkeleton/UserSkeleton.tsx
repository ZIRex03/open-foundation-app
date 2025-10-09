import React from 'react'

import styles from './UserSkeleton.module.css'

const UserSkeleton = () => {
  return (
    <div className={styles.userSkeleton}>

        <div className={styles.userInfo}>
            <div className={`${styles.userAvatar} ${styles.skeletonElement}`}></div>
            <div className={`${styles.userName} ${styles.skeletonElement}`}></div>
        </div>

        <div className={`${styles.userPoints} ${styles.skeletonElement}`}></div>
    </div>
  )
}

export default UserSkeleton