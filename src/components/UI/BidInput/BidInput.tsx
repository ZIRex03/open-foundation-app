import React from "react";

import styles from "./BidInput.module.css";
import { Icon } from "../Icon";

interface BidInputProps {
  value: number;
  onChange: (count: number) => void;
}

const BidInput = ({ value, onChange }: BidInputProps) => {
  const handleIncrement = () => {
    onChange(value + 1);
  };

  const handleDecrement = () => {
    if (value > 0) {
      onChange(value - 1);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value) || 0;
    onChange(Math.max(0, newValue));
  };

  return (
    <div className={styles.bidBox}>

      <div className={styles.inputBox}>
        <button
          className={styles.button}
          onClick={handleDecrement}
          disabled={value <= 0}
        >
          <Icon name="minus" className={styles.icon} />
        </button>

        <input
          type="number"
          className={styles.inputBid}
          defaultValue="0"
          value={value}
          onChange={handleInputChange}
          min="0"
        />

        <button className={styles.button} onClick={handleIncrement}>
          <Icon name="plus" className={styles.icon} />
        </button>
      </div>

      <p className={styles.desc}>You must buy at least <span>100 points</span></p>

    </div>
  );
};

export default BidInput;
