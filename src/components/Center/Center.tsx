import React, { forwardRef } from 'react';

import { Box } from '../Box';

export type CenterProps = {
  children: React.ReactNode;
};

/**
 * Vertically center content
 */
export const Center = forwardRef<HTMLDivElement, CenterProps>(({ children }, ref) => (
  <Box ref={ref} className="rui-inline-flex rui-items-center rui-justify-center">
    {children}
  </Box>
));
