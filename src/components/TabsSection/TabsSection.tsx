import React from 'react'

import styles from './TabsSection.module.css'

interface TabsSectionProps{
    activeTab: number;

    setActiveTab: (id: number) => void
}

const tabs = [
    {
        id: 1,
        text: "Holders leaderboard"
    },
    {
        id: 2,
        text: "Latest transfers"
    },
    {
        id: 3,
        text: "TOP users"
    },
]

export const TabsSection = ({activeTab, setActiveTab}: TabsSectionProps) => {
  return (
    <div className={styles.tabsSection}>

        {tabs.map((tab) => (
            <button
                key={tab.id} 
                className={`${styles.tab} ${activeTab === tab.id? styles.active : ''}`}
                onClick={() => setActiveTab(tab.id)}
            >
                <p>{tab.text}</p>
            </button>
        ))}

    </div>
  )
}
