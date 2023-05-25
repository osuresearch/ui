import React, { forwardRef } from 'react';

import { Box } from '../Box';

export type CodeProps = {
  children?: React.ReactNode;

  /** Display as a block of code. If not specified, code will be inline */
  block?: boolean;
};

/**
 * Line or block of code
 */
export const Code = forwardRef<HTMLDivElement, CodeProps>(({ children, block }, ref) => (
  <Box as="code" fs="sm" c="neutral-subtle" ref={ref} className={block ? 'block' : undefined}>
    {block && <pre>{children}</pre>}
    {!block && children}
  </Box>
));
