import React, { forwardRef } from 'react';

import { Box } from '../Box';

export type CodeProps = {
  children?: React.ReactNode;
};

/**
 * Line or block of code
 */
export const Code = forwardRef<HTMLDivElement, CodeProps>(({ children }, ref) => (
  <Box as="code" fs="sm" ref={ref}>
    {children}
  </Box>
));
