import React from 'react'
import EmptyState from '../UI/EmptyState/EmptyState'
import { GoNoEntry } from "react-icons/go";

const LatestTransfers = () => {
  return (
    <div>
      <EmptyState 
        icon={GoNoEntry}
        title='Данные о последних транзакциях отсутствуют'
      />
    </div>
  )
}

export default LatestTransfers