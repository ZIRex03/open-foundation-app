import React from 'react'

import styles from './ButtonBlue.module.css'

interface ButtonBlueProps{
    text: string
}

export const ButtonBlue = ({text}:ButtonBlueProps) => {
  return (
    <button className={styles.buttonBlue}>{text}</button>
  )
}
