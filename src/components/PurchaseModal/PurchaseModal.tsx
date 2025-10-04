"use client";

import React, { useState } from "react";

import styles from "./PurchaseModal.module.css";
import BidInput from "../UI/BidInput/BidInput";
import ExpirationForm from "../ExpirationForm/ExpirationForm";
import { ButtonBlue } from "../UI/ButtonBlue/ButtonBlue";
import { useBodyScrollLock } from "@/hooks/useBodyScrollLock";
import { IoIosArrowBack } from "react-icons/io";

interface PurchaseModalProps {
  isOpen: boolean;
  closeModal: () => void
}

const PurchaseModal = ({ isOpen, closeModal }: PurchaseModalProps) => {
  useBodyScrollLock(isOpen);
  const [bidInput, bidInputChange] = useState(2000.75);

  if (!isOpen) return null;

  return (
    <div className={styles.modal}>
      <IoIosArrowBack className={styles.backIcon} onClick={closeModal}/>
      <BidInput value={bidInput} onChange={bidInputChange} />
      <ExpirationForm value={bidInput} />
      <ButtonBlue text="Buy" />
    </div>
  );
};

export default PurchaseModal;
