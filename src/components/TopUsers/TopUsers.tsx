import React from 'react'
import EmptyState from '../UI/EmptyState/EmptyState'
import { MdOutlineLeaderboard } from "react-icons/md";

const TopUsers = () => {
  return (
    <div>
        <EmptyState
          title='The leaderboard is still empty'
          icon={MdOutlineLeaderboard}
        />
    </div>
  )
}

export default TopUsers