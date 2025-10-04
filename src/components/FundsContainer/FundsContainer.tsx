import React from 'react'

import styles from './FundsContainer.module.css'
import { FundsBar } from '../FundsBar/FundsBar'
import { DropPoints } from '../DropPoints/DropPoints'
import { ButtonBlue } from '../UI/ButtonBlue/ButtonBlue'

export const FundsContainer = () => {
  return (
    <div className={styles.fundsContainer}>
        <FundsBar/>
        <DropPoints/>
        <ButtonBlue
          text='Get drop points!'
        />
    </div>
  )
}
