'use client';

import { useTelegram } from './useTelegram';

export const useTheme = () => {
  const { isInTelegram, themeParams } = useTelegram();

  const defaultTheme = {
    bg_color: '#2f2f33',
    text_color: '#fff', 
    hint_color: '#999999',
    link_color: '#2481cc',
    button_color: '#2481cc',
    button_text_color: '#ffffff',
    secondary_bg_color: '#15202B',
  };

  const currentTheme = isInTelegram ? { ...defaultTheme, ...themeParams } : defaultTheme;

  return {
    isInTelegram,
    theme: currentTheme,
    cssVariables: {
      '--tg-theme-bg-color': currentTheme.bg_color!,
      '--tg-theme-text-color': currentTheme.text_color!,
      '--tg-theme-hint-color': currentTheme.hint_color!,
      '--tg-theme-link-color': currentTheme.link_color!,
      '--tg-theme-button-color': currentTheme.button_color!,
      '--tg-theme-button-text-color': currentTheme.button_text_color!,
      '--tg-theme-secondary-bg-color': currentTheme.secondary_bg_color!,
    }
  };
};