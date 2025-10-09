'use client'

import React, { useEffect } from "react";
import {RootLayout} from "@/components/Layout/RootLayout";
import BottomNavigation from "@/components/Navigation/BottomNavigation";

import styles from './earnigs.module.css'
import { UserProfile } from "@/components/UserProfile/UserProfile";
import TEST_ICON from "./../../../public/icons/test_icon.png"
import { MissionBox } from "@/components/MissionBox/MissionBox";
import { FundsContainer } from "@/components/FundsContainer/FundsContainer";
import { UserBoard } from "@/components/UserBoard/UserBoard";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchUserData } from "@/store/slices/userSlice";
import UserSkeleton from "@/components/UI/UserSkeleton/UserSkeleton";

const EarningsPage = () => {

  const dispatch = useAppDispatch()
  const {currentUser, userLoading, userError} = useAppSelector(state => state.user)

  useEffect(() => {
    dispatch(fetchUserData())
  }, [dispatch])


  return (
    <RootLayout>
      <div className="container">
        <div className={styles.content}>

          {userLoading && <UserSkeleton />}
          
          {userError && (
            <div>
              Ошибка загрузки данных пользователя: {userError}
            </div>
          )}
          
          {currentUser && (
            <UserProfile
              username={currentUser.username}
              avatar={TEST_ICON}
              rank={currentUser.rank}
              points={currentUser.points}
            />
          )}

          <MissionBox text="Create sustained impact. Support verified projects. Get regular updates. Save tax. Use web3."/>

          <FundsContainer/>

          <UserBoard/>
        </div>
      </div>
      <BottomNavigation/>
    </RootLayout>
  );
};

export default EarningsPage;
