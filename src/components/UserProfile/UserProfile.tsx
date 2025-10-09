"use client";

import React from "react";
import styles from "./UserProfile.module.css";
import Image, { StaticImageData } from "next/image";
import { PointsBox } from "../UI/PointsBox/PointsBox";
import { useTelegram } from "@/hooks/useTelegram";

interface UserProfileProps {
  avatar: string | StaticImageData;
  username: string;
  points: number;
  rank: number;
}

export const UserProfile = ({
  avatar,
  username,
  points,
  rank,
}: UserProfileProps) => {

  const { isInTelegram, user: telegramUser } = useTelegram();

  const getFinalData = () => {
    if (isInTelegram && telegramUser) {
      return {
        avatar: telegramUser.photo_url || avatar || "/icons/default-avatar.png",
        username:
          telegramUser.username ||
          telegramUser.first_name ||
          username ||
          "User",
      };
    }

    return {
      avatar: avatar || "/icons/default-avatar.png",
      username: username || "User",
    };
  };

  const finalData = getFinalData();
  return (
    <div className={styles.userBox}>
      <div className={styles.profileBox}>
        <div className={styles.profileImage}>
          <Image
            src={finalData.avatar}
            alt={finalData.username}
            width={45}
            height={45}
            style={{
              objectFit: 'cover',
              width: "100%",
              height: "100%"
            }}
          />
        </div>

        <div className={styles.profileInfo}>
          <p className={styles.username}>{finalData.username}</p>
          <p className={styles.rank}>Your rank #{rank}</p>
        </div>
      </div>

      <PointsBox points={points} />

    </div>
  );
};
