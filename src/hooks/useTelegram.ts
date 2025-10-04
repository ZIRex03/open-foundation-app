// 'use client'

// import { isTelegram } from '@/utils/enviroment';
// import { useLaunchParams, themeParams} from '@telegram-apps/sdk-react';

// export const useTelegram = () => {

//     const isInTelegram = isTelegram();
//     const launchParams = isInTelegram? useLaunchParams() : null;
//     const telegramUser = launchParams?.tgWebAppData?.user;

//     return{
//         isInTelegram,
//         // launchParams,
//         themeParams: themeParams,
//         user: telegramUser
//     }
// }

"use client";

import { useEffect, useState } from "react";

interface TelegramUser {
  id: number;
  first_name?: string;
  last_name?: string;
  username?: string;
  language_code?: string;
  photo_url?: string;
}

export const useTelegram = () => {
  const [isInTelegram, setIsInTelegram] = useState(false);
  const [user, setUser] = useState<TelegramUser | null>(null);

  useEffect(() => {
    const checkTelegram = () => {
      if (typeof window === "undefined") return;

      const tg = (window as any).Telegram?.WebApp;

      if (tg) {
        setIsInTelegram(true);
        setUser(tg.initDataUnsafe?.user || null);

        tg.ready();
        tg.expand();
      } else {
        setIsInTelegram(false);
        setUser(null);
      }
    };

    checkTelegram();
  }, []);

  return {
    isInTelegram,
    user,
    userId: user?.id?.toString(),
    userName: user?.username,
    firstName: user?.first_name,
    lastName: user?.last_name,
    photoUrl: user?.photo_url,
  };
};
