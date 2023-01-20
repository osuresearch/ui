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
  /** The current theme */
  theme: Theme;

  /** Set the current theme */
  setTheme: (theme: Theme) => void;

  /** User prefers reduced motion */
  reducedMotion: boolean;

  setReducedMotion: (reducedMotion: boolean) => void;
}

const DEFAULT_THEME = 'light';

export const RUIContext = createContext<IRUIContext>({
  theme: DEFAULT_THEME,
  setTheme: (v) => 0,

  reducedMotion: false,
  setReducedMotion: (v) => 0
});

/**
 * The RUI Provider wraps an application to support global features of the framework.
 *
 * This includes:
 *
 * - Toast and modal portals
 * - Theme state management
 * - Reduced motion state management
 * - Error handling
 * - Content overlays
 *
 * ## Accessibility
 * - Wraps the app with React Aria's `OverlayProvider` to hide content
 * from screen readers when a modal is active.
 * - Detects the user's `prefers-reduced-motion` browser setting and sets default reduced motion state for use with `useReducedMotion`.
 * - Detects the user's system theme and switches the default to light or dark mode for use with `useTheme`.
 */
export function RUIProvider({ children, theme = DEFAULT_THEME }: RUIProviderProps) {
  const [currentTheme, setTheme] = useState<Theme>(theme);
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for browser preferences
  useEffect(() => {
    const onPrefersReducedMotion = (e: any) => {
      setReducedMotion(e.target.matches);
    };

    const onPrefersColorScheme = (e: any) => {
      setTheme(e.target.matches ? 'dark' : 'light');
    };

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (prefersReducedMotion) {
      setReducedMotion(prefersReducedMotion.matches);
      prefersReducedMotion.addEventListener('change', onPrefersReducedMotion);
    }

    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)');
    if (prefersColorScheme) {
      setTheme(prefersColorScheme.matches ? 'dark' : 'light');
      prefersColorScheme.addEventListener('change', onPrefersColorScheme);
    }

    return () => {
      prefersColorScheme?.removeEventListener('change', onPrefersColorScheme);
      prefersReducedMotion?.removeEventListener('change', onPrefersReducedMotion);
    };

    // TODO: SSR?
  }, []);

  // Controlled theme changes will update the default.
  // This is really just for Storybook and not an app.
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
      setTheme,
      reducedMotion,
      setReducedMotion
    }),
    [currentTheme, reducedMotion]
  );

  return (
    <RUIContext.Provider value={ctx}>
      <OverlayProvider>
        <div data-theme={currentTheme} data-reduced-motion={reducedMotion}>
          {children}
        </div>
      </OverlayProvider>
    </RUIContext.Provider>
  );
}
