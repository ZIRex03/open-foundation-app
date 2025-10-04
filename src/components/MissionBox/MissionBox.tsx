'use client'

import React, { useState } from 'react'

import styles from './MissionBox.module.css'

interface MissionBoxProps {
    text: string
}

export const MissionBox = ({text}:MissionBoxProps) => {

    const [isExpanded, setIsExpanded] = useState(false)

    const toggleText = () => {
        setIsExpanded(!isExpanded)
    }
  return (
    <div className={styles.missionBox}>
        <p
            className={`${styles.mission} ${isExpanded ? styles.expanded : styles.collapsed}`}
        >
            {text}
        </p>
        <button
            className={styles.readMore}
            onClick={toggleText}
        >
            {isExpanded? 'Show Less' : 'Read More'}
        </button>
    </div>
  )
}
