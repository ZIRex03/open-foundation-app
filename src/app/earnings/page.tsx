import React from "react";
import {RootLayout} from "@/components/Layout/RootLayout";
import BottomNavigation from "@/components/Navigation/BottomNavigation";

import styles from './earnigs.module.css'
import { UserProfile } from "@/components/UserProfile/UserProfile";
import TEST_ICON from "./../../../public/icons/test_icon.png"
import { MissionBox } from "@/components/MissionBox/MissionBox";
import { FundsContainer } from "@/components/FundsContainer/FundsContainer";
import { UserBoard } from "@/components/UserBoard/UserBoard";

const EarningsPage = () => {
  return (
    <RootLayout>
      <div className="container">
        <div className={styles.content}>

          <UserProfile
            username="Alex"
            avatar={TEST_ICON}
            rank={23}
            points={21432}
          />

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
