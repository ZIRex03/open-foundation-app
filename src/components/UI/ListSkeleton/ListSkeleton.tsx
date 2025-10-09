// components/Skeleton/ListSkeleton.tsx
import styles from './ListSkeleton.module.css';

interface ListSkeletonProps {
  itemsCount?: number;
  avatarSize?: number;
  showAvatar?: boolean;
  linesPerItem?: number;
  className?: string;
}

export const ListSkeleton = ({
  itemsCount = 5,
  avatarSize = 60,
  showAvatar = true,
  linesPerItem = 2,
}: ListSkeletonProps) => {
  return (
    <div className={styles.listSkeleton}>
      {Array.from({ length: itemsCount }).map((_, index) => (
        <div key={index} className={styles.skeletonItem}>
          
          {showAvatar && (
            <div className={styles.skeletonAvatar}>
              <div 
                className={styles.skeletonElement}
                style={{ 
                  width: avatarSize, 
                  height: avatarSize,
                  borderRadius: '50%' 
                }}
              />
            </div>
          )}

          <div className={styles.skeletonContent}>
            {Array.from({ length: linesPerItem }).map((_, lineIndex) => (
              <div
                key={lineIndex}
                className={styles.skeletonLine}
                style={{
                  width: lineIndex === 0 ? '70%' : '50%',
                  height: lineIndex === 0 ? '20px' : '16px'
                }}
              />
            ))}
          </div>

          <div className={styles.skeletonBadge}>
            <div 
              className={styles.skeletonElement}
              style={{ width: '40px', height: '20px' }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};