import React, { createContext, useEffect, useMemo, useState } from 'react';
import { OverlayProvider } from 'react-aria';

import { Theme } from '~/types';

import { Box } from '../Box';

export type RUIProviderProps = {
  /**
   * Override default theme behaviour
   */
  theme?: Theme;

  children?: React.ReactNode;
};

export interface IRUIContext {
  /** Current theme */
  theme: Theme;

  /** Set the current theme */
  setTheme: (theme: Theme) => void;
}

const DEFAULT_THEME = 'light';

export const RUIContext = createContext<IRUIContext>({
  theme: DEFAULT_THEME,
  setTheme: (theme) => 0
});

/**
 * The RUI Provider wraps an application to support global features of the framework.
 *
 * This includes:
 *
 * - Toast and modal portals
 * - Theme management
 * - Error handling
 * - Content overlays
 *
 * ## Accessibility
 * - Wraps the app with React Aria's `OverlayProvider` to hide content
 * from screen readers when a modal is active.
 */
export function RUIProvider({ children, theme = DEFAULT_THEME }: RUIProviderProps) {
  const [currentTheme, setTheme] = useState<Theme>(theme);

  // Controlled theme changes will update the default
  useEffect(() => setTheme(theme), [theme]);

  // Theme changes will be applied to the body tag to support
  // theme tokens for any portaled components
  useEffect(() => {
    // TODO: Probably force portals to be within the provider DOM
    // instead. In this current method, we can't have multiple providers
    // active within the same document.
    document.body.setAttribute('data-theme', currentTheme);
  }, [currentTheme]);

  const ctx = useMemo<IRUIContext>(
    () => ({
      theme: currentTheme,
      setTheme
    }),
    [currentTheme]
  );

  return (
    <OverlayProvider>
      <RUIContext.Provider value={ctx}>
        <div data-theme={theme}>{children}</div>
      </RUIContext.Provider>
    </OverlayProvider>
  );
}
