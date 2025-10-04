import React from "react";

import styles from "./ProgressBar.module.css";

interface ProgressBarProps {
  value: number;
  max: number;
}

export const ProgressBar = ({value, max}:ProgressBarProps) => {
  const percentage = (value / max) * 100;

  return (
    <div className={styles.progressContainer}>
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${percentage}%` }}
        />
        <label className={styles.label}>{percentage.toFixed(1)}%</label>
      </div>
    </div>
  );
};
