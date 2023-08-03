import React from 'react';

import { CssBaseline, ThemeProvider } from '@mui/material';

import { theme as dark } from '../../theme/dark';
import { theme as light } from '../../theme/light';

export interface RUIProviderProps {
  children: React.ReactNode;
  theme?: 'light' | 'dark' | 'system';
}

export function RUIProvider({ children, theme }: RUIProviderProps) {
  // TODO: System.
  return (
    <ThemeProvider theme={theme === 'dark' ? dark : light}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
