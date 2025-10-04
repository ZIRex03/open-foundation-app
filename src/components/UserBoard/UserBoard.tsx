'use client'

import React, { useState } from 'react'
import { TabsSection } from '../TabsSection/TabsSection'
import { UsersLeaderboard } from '../UsersLeaderboard/UsersLeaderboard'

export const UserBoard = () => {

    const [activeTab, setActiveTab] = useState(1)
  return (
    <div>
        <TabsSection
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />

        <UsersLeaderboard/>
    </div>
  )
}
