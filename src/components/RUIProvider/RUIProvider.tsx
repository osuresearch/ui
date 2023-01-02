import React from 'react';

import { Box } from '../Box';

export type RUIProviderProps = {
  children?: React.ReactNode;
};

/**
 * Wrap your application with an RUI Provider to support global context features
 * such as toasts, error handling, etc.
 */
export function RUIProvider({ children }: RUIProviderProps) {
  return <>{children}</>;
}
