import useSystemTheme from 'src/hooks/useSystemTheme';

import React, { useEffect, useState } from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { darkTheme, lightTheme } from '../../theme';

export interface RUIProviderProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark' | 'system';

  /**
   * Set to `true` if this provider is used in an SSR application.
   *
   * This flag ensures that theme resolution properly handles React hydrate DOM conflicts.
   */
  isSSR?: boolean;
}

export function RUIProvider({ children, theme = 'light', isSSR = false }: RUIProviderProps) {
  const [currentTheme, setCurrentTheme] = useState(theme);
  const systemTheme = useSystemTheme(isSSR);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);

  const isDark = currentTheme === 'dark' || (currentTheme === 'system' && systemTheme === 'dark');

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
