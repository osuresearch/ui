import React, { forwardRef } from 'react';

import { Box } from '../Box';

export type SectionTitleProps = {
  level?: 2 | 3 | 4;

  children?: React.ReactNode;
};

/**
 * This style may be used to divide content into sections and can be used as
 * an h2, h3, or h4.
 *
 * ## Accessibility
 *
 * - All levels  will look the same — be sure to use the appropriate
 * heading level based on the structure of your content.
 */
export const SectionTitle = forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ children, level = 2 }, ref) => (
    <Box as={`h${level}`} ref={ref} className="text-h2 uppercase" c="dark">
      {children}
    </Box>
  )
);
