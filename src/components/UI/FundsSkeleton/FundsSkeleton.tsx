import React from 'react'
import styles from './FundsSkeleton.module.css'

const FundsSkeleton = () => {
  return (
    <div className={styles.fundsSkeleton}>
        <div style={{height: "40%"}} className={styles.skeletonElement}></div>
        <div style={{height: "40%"}} className={styles.skeletonElement}></div>
        <div style={{height: "15%"}} className={styles.skeletonElement}></div>
    </div>
  )
}

export default FundsSkeleton