import React from 'react'

import styles from './FundsBar.module.css'
import { ProgressBar } from '../UI/ProgressBar/ProgressBar'

interface FundsBarProps {
  fundsRaised: number;
  goalFunds: number
}

export const FundsBar = ({fundsRaised, goalFunds}: FundsBarProps) => {
  return (
    <div className={styles.fundsBarBox}>

      <div className={styles.titleBox}>
        <span>💎</span>
        <p className={styles.raise}>Total funds raised {fundsRaised} TON</p>
      </div>

      <ProgressBar
        value={fundsRaised}
        max={goalFunds}
      />

      <p className={styles.goal}>First round goal {goalFunds.toLocaleString("en-US", {maximumFractionDigits: 2, minimumFractionDigits: 2})} TON</p>
        
    </div>
  )
}
