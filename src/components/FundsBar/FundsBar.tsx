import React from 'react'

import styles from './FundsBar.module.css'
import { ProgressBar } from '../UI/ProgressBar/ProgressBar'

export const FundsBar = () => {
  return (
    <div className={styles.fundsBarBox}>

      <div className={styles.titleBox}>
        <span>💎</span>
        <p className={styles.raise}>Total funds raised 583.93 TON</p>
      </div>

      <ProgressBar
        value={583000}
        max={1000000}
      />

      <p className={styles.goal}>First round goal 1,000,000 TON</p>
        
    </div>
  )
}
