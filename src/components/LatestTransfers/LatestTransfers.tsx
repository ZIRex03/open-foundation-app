import React from 'react'
import EmptyState from '../UI/EmptyState/EmptyState'
import { GoNoEntry } from "react-icons/go";

const LatestTransfers = () => {
  return (
    <div>
      <EmptyState 
        icon={GoNoEntry}
        title='There is no data about recent transfers'
      />
    </div>
  )
}

export default LatestTransfers