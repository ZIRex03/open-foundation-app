'use client'

import React, { useState } from 'react'
import { TabsSection } from '../TabsSection/TabsSection'
import { UsersLeaderboard } from '../UsersLeaderboard/UsersLeaderboard'
import LatestTransfers from '../LatestTransfers/LatestTransfers'

export const UserBoard = () => {

    const [activeTab, setActiveTab] = useState("leaderboard")
  return (
    <div>
        <TabsSection
            activeTab={activeTab}
            setActiveTab={setActiveTab}
        />

        {activeTab === "leaderboard" && <UsersLeaderboard/>}
        {activeTab === "transfers" && <LatestTransfers/>}
        
    </div>
  )
}
