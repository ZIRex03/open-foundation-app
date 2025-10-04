import React from "react";

import styles from "./PointsBox.module.css";

interface PointsBoxProps {
  points: number;
}

export const PointsBox = ({ points }: PointsBoxProps) => {
  const formattedPoints = points.toLocaleString("en-US");
  return (
    <div className={styles.pointsBox}>
      <p>{formattedPoints}</p>
      <label className={styles.label}>Points</label>
    </div>
  );
};
