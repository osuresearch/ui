import React, { forwardRef } from 'react';

import { Box } from '@osuresearch/ui';
import { cx } from '@osuresearch/ui/theme';

export type CenterProps = {
  children: React.ReactNode;
};

/**
 * Vertically center content
 */
export const Center = forwardRef<HTMLDivElement, CenterProps>(({ children }, ref) => (
  <Box ref={ref} className={cx('rui-inline-flex', 'rui-items-center', 'rui-justify-center')}>
    {children}
  </Box>
));
