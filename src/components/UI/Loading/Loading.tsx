import React from 'react';
import styles from './Loading.module.css';

interface LoadingProps {
  size?: 'small' | 'medium' | 'large';
  type?: 'spinner' | 'dots' | 'skeleton';
  text?: string;
  className?: string;
}

export const Loading = ({ 
  size = 'medium', 
  type = 'spinner', 
  text = 'Loading...',
  className = '' 
}: LoadingProps) => {
  return (
    <div className={`${styles.loadingContainer} ${styles[size]} ${className}`}>
      {type === 'spinner' && <div className={styles.spinner}></div>}
      
      {type === 'dots' && (
        <div className={styles.dots}>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
          <div className={styles.dot}></div>
        </div>
      )}
      
      {type === 'skeleton' && (
        <div className={styles.skeleton}>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
          <div className={styles.skeletonLine}></div>
        </div>
      )}
      
      {text && <p className={styles.loadingText}>{text}</p>}
    </div>
  );
};