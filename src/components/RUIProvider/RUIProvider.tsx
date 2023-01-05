import React from 'react';
import { OverlayProvider } from 'react-aria';

import { Box } from '../Box';

export type RUIProviderProps = {
  children?: React.ReactNode;
};

/**
 * Wrap your application with an RUI Provider to support global context features
 * such as toasts, error handling, etc.
 *
 * ## Accessibility
 * - Wraps the app with React Aria's `OverlayProvider` to hide content
 * from screen readers when an overlay is active.
 */
export function RUIProvider({ children }: RUIProviderProps) {
  return <OverlayProvider>{children}</OverlayProvider>;
}
