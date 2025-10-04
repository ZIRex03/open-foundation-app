"use client";

import React from "react";
import styles from "./bottomnavigation.module.css";
import { Icon } from "../UI/Icon";
import { Tab } from "@/types/navigation";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";

const BottomNavigation = () => {
  const pathname = usePathname();
  const router = useRouter();

  const isActiveTab = (tabPath: string) => {
    return pathname.includes(tabPath);
  };

  const handleTabClick = (path: string) => {
    router.push(path)
  }

  const tabs: Tab[] = [
    { id: "earnings", path: "/earnings", icon: "earnings" },
    { id: "ideas", path: "/ideas", icon: "ideas" },
    { id: "chat", path: "/chat", icon: "chat" },
    { id: "friends", path: "/friends", icon: "friends" },
    { id: "dashboard", path: "/dashboard", icon: "dashboard" },
  ];

  return (
    <div className={styles.bottomNav}>
      {tabs.map((tab) => {

        const isActive = isActiveTab(tab.path)

        return(
            <button
                key={tab.id}
                onClick={() => handleTabClick(tab.path)}
            >
                <Icon
                    name={tab.icon}
                    className={`${styles.icon} ${isActive? styles.iconActive : ''}`}
                />
            </button>
        )
        
      })}
    </div>
  );
};

export default BottomNavigation;
