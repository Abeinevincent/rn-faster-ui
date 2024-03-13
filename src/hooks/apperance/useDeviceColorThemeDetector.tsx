import { useEffect, useState } from 'react';
import { Appearance, type ColorSchemeName } from 'react-native';

export const useDeviceColorThemeDetector = () => {
  const deviceColorScheme = Appearance.getColorScheme();

  const [themecolor, setThemecolor] =
    useState<ColorSchemeName>(deviceColorScheme);
  useEffect(() => {
    if (deviceColorScheme === 'dark') {
      setThemecolor('dark');
    } else if (deviceColorScheme === 'light') {
      setThemecolor('light');
    }
  }, [deviceColorScheme]);

  useEffect(() => {
    const subscription = Appearance.addChangeListener(({ colorScheme }) => {
      if (colorScheme === 'dark') {
        setThemecolor('dark');
      } else if (colorScheme === 'light') {
        setThemecolor('light');
      }
    });

    return () => subscription.remove();
  }, [deviceColorScheme]);

  return { themecolor };
};
