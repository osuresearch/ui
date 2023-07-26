import { ThemeProvider, CssBaseline } from '@mui/material';
import React from 'react';
import { theme } from '../../theme';

export interface RUIProviderProps {
  children: React.ReactNode;
}

export function RUIProvider({ children }: RUIProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
