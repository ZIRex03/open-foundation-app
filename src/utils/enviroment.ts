// export const isTelegram = (): boolean => {
//     if(typeof window === 'undefined') return false;

//     return !!(
//         (window as any).Telegram?.WebApp ||
//         window.location.search.includes('tgWebApp') ||
//         navigator.userAgent.includes('Telegram')
//     );
// }