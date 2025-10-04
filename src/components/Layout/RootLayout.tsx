'use client';

import { useTelegram } from '@/hooks/useTelegram';
import { useTheme } from '@/hooks/useTheme';

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  const { cssVariables } = useTheme();
  const { isInTelegram } = useTelegram()


  return (
    <div 
      className={isInTelegram ? 'telegram-app' : 'web-app'}
      style={cssVariables as React.CSSProperties}
    >
        {children}
    </div>
  );
};