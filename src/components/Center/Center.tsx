import React, { forwardRef } from 'react';

import { Box } from '../Box';

export type CenterProps = {
  children: React.ReactNode;
};

/**
 * Centers content vertically and horizontally
 */
export const Center = forwardRef<HTMLDivElement, CenterProps>(({ children }, ref) => (
  <Box ref={ref} className="grid place-items-center h-full">
    {children}
  </Box>
));
