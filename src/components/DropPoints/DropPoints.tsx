"use client";

import React, { useState } from "react";

import styles from "./DropPoints.module.css";
import Image from "next/image";

import POINT_ICON from "../../../public/icons/point_icon.png";
import PurchaseModal from "../PurchaseModal/PurchaseModal";

interface DropPointsProps {
  pointsPrice: number;
  memberCount: number;
  purchased: number;
}

export const DropPoints = ({
  pointsPrice,
  memberCount,
  purchased,
}: DropPointsProps) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleClickCloseModal = () => {
    setIsOpenModal(false);
  };

  const formatedMembers = new Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }).format(memberCount);

  return (
    <div className={styles.droppointsBox}>
      <div className={styles.pointsBox}>
        <div className={styles.droppointsPrice}>
          <div className={styles.pointsImage}>
            <Image src={POINT_ICON} alt="POINTS" />
          </div>

          <div className={styles.pointsInfo}>
            <p className={styles.title}>Drop Points price:</p>
            <span className={styles.price}>{pointsPrice} TON</span>
          </div>
        </div>

        <button
          className={styles.buyButton}
          onClick={() => setIsOpenModal(true)}
        >
          Buy
        </button>
      </div>

      <div className={styles.membersBox}>
        <span>🔥</span>
        <p className={styles.members}>
          {formatedMembers} members & {purchased} purchased
        </p>
      </div>

      <PurchaseModal isOpen={isOpenModal} closeModal={handleClickCloseModal} />
    </div>
  );
};
