import React from 'react'
import EmptyState from '../UI/EmptyState/EmptyState'
import { MdOutlineLeaderboard } from "react-icons/md";

const TopUsers = () => {
  return (
    <div>
        <EmptyState
          title='Список лидеров пока пуст'
          icon={MdOutlineLeaderboard}
        />
    </div>
  )
}

export default TopUsers