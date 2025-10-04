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

interface ThemeParams {
  bg_color?: string;
  text_color?: string;
  hint_color?: string;
  link_color?: string;
  button_color?: string;
  button_text_color?: string;
  secondary_bg_color?: string;
}

interface TelegramWebApp {
  WebApp?: {
    initDataUnsafe?: {
      user?: TelegramUser;
    };
    themeParams?: ThemeParams;
    ready: () => void;
    expand: () => void;
  };
}

declare global {
  interface Window {
    Telegram?: TelegramWebApp;
  }
}

export const useTelegram = () => {
  const [isInTelegram, setIsInTelegram] = useState(false);
  const [user, setUser] = useState<TelegramUser | null>(null);
  const [themeParams, setThemeParams] = useState<ThemeParams>({});

  useEffect(() => {
    const checkTelegram = () => {
      if (typeof window === "undefined") return;

      const tg = window.Telegram?.WebApp;

      if (tg) {
        setIsInTelegram(true);
        setUser(tg.initDataUnsafe?.user || null);
        setThemeParams(tg.themeParams || {});

        tg.ready();
        tg.expand();
      } else {
        setIsInTelegram(false);
        setUser(null);
        setThemeParams({});
      }
    };

    checkTelegram();
  }, []);

  return {
    isInTelegram,
    user,
    themeParams,
    userId: user?.id?.toString(),
    userName: user?.username,
    firstName: user?.first_name,
    lastName: user?.last_name,
    photoUrl: user?.photo_url,
  };
};