'use client';

export const useTheme = () => {
  
  const customTheme = {
    bg_color: '#2f2f33',
    text_color: '#fff', 
    hint_color: '#999999',
    link_color: '#2481cc',
    button_color: '#2481cc',
    button_text_color: '#ffffff',
    secondary_bg_color: '#15202B',
  };

  return {
    theme: customTheme,
    cssVariables: {
      '--bg-color': customTheme.bg_color,
      '--text-color': customTheme.text_color,
      '--hint-color': customTheme.hint_color,
      '--link-color': customTheme.link_color,
      '--button-color': customTheme.button_color,
      '--button-text-color': customTheme.button_text_color,
      '--secondary-bg-color': customTheme.secondary_bg_color,
    }
  };
};