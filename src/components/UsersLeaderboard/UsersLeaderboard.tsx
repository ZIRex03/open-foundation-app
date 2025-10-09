'use client'

import React, { useEffect, useMemo } from 'react'

import styles from './UsersLeaderboard.module.css'

import ICON from '../../../public/icons/test_icon.png'
import Image from 'next/image'
import { useAppDispatch, useAppSelector } from '@/hooks/redux'
import { fetchLeaderboardUsers } from '@/store/slices/userSlice'
import { ListSkeleton } from '../UI/ListSkeleton/ListSkeleton'

export const UsersLeaderboard = () => {

    const dispatch = useAppDispatch()
    const {leaderboardUsers, leaderBoardLoading, isLeaderBoardFetched} = useAppSelector(state => state.user)

    useEffect(() => {
        if(!isLeaderBoardFetched) dispatch(fetchLeaderboardUsers())
    }, [dispatch, isLeaderBoardFetched])

    const filteredLeaderboardUsers = useMemo(() => {
        return [...leaderboardUsers].sort((a, b) => b.amount - a.amount)
    }, [leaderboardUsers])

    if(leaderBoardLoading) return <ListSkeleton/>


  return (
    <div className={styles.usersList}>

        {filteredLeaderboardUsers.map((user, index) => (

            <div className={styles.userBox} key={user.id}>

            <div className={styles.userProfile}>

                <div className={styles.userImage}>
                    <Image
                        src={ICON}
                        alt={user.username}
                    />
                </div>

                <div className={styles.userInfo}>
                    <p className={styles.userName}>{user.username}</p>
                    <p className={styles.currency}>{user.amount} TON</p>
                </div>
            </div>

            <span className={styles.place}>#{index+1}</span>
        </div>
        ))}
    </div>
  )
}
