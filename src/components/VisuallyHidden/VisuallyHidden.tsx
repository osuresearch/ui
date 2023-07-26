import React from 'react';

import { Box } from '@mui/material';
import { visuallyHidden } from '@mui/utils';

export interface VisuallyHiddenProps {
  children: React.ReactNode;
}

/**
 * Screen reader only content container
 *
 * ## Accessibility
 * - Content within this component are only visible to screen readers
 * - To make content **NOT** visible to screen readers, use the `aria-hidden` attribute
 */
export function VisuallyHidden({ children }: VisuallyHiddenProps) {
  return (
    <Box component="div" sx={visuallyHidden}>
      {children}
    </Box>
  );
}
