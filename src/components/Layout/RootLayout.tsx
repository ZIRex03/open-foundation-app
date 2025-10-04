'use client';

import { useTheme } from '@/hooks/useTheme';
import { useEffect, useState } from 'react';

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { cssVariables, isInTelegram } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className={isInTelegram ? 'telegram-app' : 'web-app'}>
          {children}
      </div>
    );
  }

  return (
    <div 
      className={isInTelegram ? 'telegram-app' : 'web-app'}
      style={cssVariables as React.CSSProperties}
    >
        {children}
    </div>
  );
};