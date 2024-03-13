import { useEffect } from 'react';
import SystemNavigationBar from 'react-native-system-navigation-bar';

export const useShowSystemNavbarColorTheme = (
  bgColor: string,
  theme: 'light' | 'dark' | undefined
) => {
  useEffect(() => {
    SystemNavigationBar.navigationShow();
    SystemNavigationBar.setNavigationColor(bgColor, theme, 'navigation');
    // SystemNavigationBar.setBarMode(theme);
  }, [theme, bgColor]);
};

export const useHideSystemNavbar = () => {
  useEffect(() => {
    SystemNavigationBar.navigationHide();
  }, []);
};
