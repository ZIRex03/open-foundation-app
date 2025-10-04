import React from 'react'

import styles from './ExpirationForm.module.css'

interface ExpirationFormProps {
    value: number
}

const ExpirationForm = ({value}:ExpirationFormProps) => {
  return (
    <div className={styles.form}>
        <p className={styles.desc}>Set expiration date and time</p>

        <div className={styles.inputBox}>
            <select className={styles.selectBox}>
                <option>TON</option>
                <option>BTC</option>
            </select>

            <div className={styles.valueBox}>
                <p>{value.toLocaleString("en-US")}</p>
            </div>
        </div>
    </div>
  )
}

export default ExpirationForm