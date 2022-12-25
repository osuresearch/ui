import React, { forwardRef } from 'react';
import { Box } from '@osuresearch/ui';

export type SectionTitleProps = {
  level?: 2 | 3 | 4;

  children?: React.ReactNode;
};

/**
 * This style may be used to divide content into sections and can be used as
 * an h2, h3, or h4.
 *
 * ### Accessibility
 *
 * - All levels  will look the same — be sure to use the appropriate
 * heading level based on the structure of your content.
 */
export const SectionTitle = forwardRef<HTMLDivElement, SectionTitleProps>(
  ({ children, level = 2 }, ref) => (
    <Box
      component={`h${level}`}
      ref={ref}
      className="rui-text-h2 rui-uppercase" // TODO: Responsive 1.35rem for small, 640px+ 1.75rem
      // 640 is --rui-screen-md
      c="dark"
    >
      {children}
    </Box>
  )
);
