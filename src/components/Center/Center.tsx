import React, { forwardRef } from 'react';

import { Box } from '../Box';

export type CenterProps = {
  children: React.ReactNode;
};

/**
 * Centers content vertically and horizontally
 */
export const Center = forwardRef<HTMLDivElement, CenterProps>(({ children }, ref) => (
  <Box ref={ref} className="rui-grid rui-place-items-center rui-h-full">
    {children}
  </Box>
));
