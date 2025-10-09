'use client'

import React, { useEffect } from 'react'

import styles from './FundsContainer.module.css'
import { FundsBar } from '../FundsBar/FundsBar'
import { DropPoints } from '../DropPoints/DropPoints'
import { ButtonBlue } from '../UI/ButtonBlue/ButtonBlue'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { fetchDropPoints } from '@/store/slices/dropPointsSlice'
import FundsSkeleton from '../UI/FundsSkeleton/FundsSkeleton'

export const FundsContainer = () => {

  const dispatch = useAppDispatch()
  const {loading, dropPoints} = useAppSelector(state => state.points)

  useEffect(() => {
    dispatch(fetchDropPoints())
  }, [dispatch])

  if(loading) return <FundsSkeleton/>


  if(!dropPoints) return null

  return (
    <div className={styles.fundsContainer}>
        <FundsBar
          fundsRaised={dropPoints.fundsRaised}
          goalFunds={dropPoints.goalFunds}
        />
        <DropPoints pointsPrice={dropPoints.pointsPrice}/>
        <ButtonBlue
          text='Get drop points!'
        />
    </div>
  )
}
