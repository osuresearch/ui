import React, { forwardRef } from 'react';

import { Box } from '@osuresearch/ui';
import { DefaultProps } from '@osuresearch/ui/types';
import { cx } from '@osuresearch/ui/theme';

export type RingProps = DefaultProps & {
  /* Your props */

  children?: React.ReactNode;
};

/**
 * Ring documentation
 *
 * ### Accessibility
 * - a11y info (used aria tags, keyboard behaviour, etc)
 */
export const Ring = forwardRef<HTMLDivElement, RingProps>(
  (
    {
      className,

      /* Your props and defaults */

      children, // If it supports children
      ...props
    },
    ref
  ) => (
    <Box
      ref={ref}
      className={cx(
        {
          // Your custom styles
          'text-scarlet': true
        },
        className // User-supplied styles
      )}
      {...props} // Rest of the box model props
    >
      {/* Your DOM */}
      {children}
    </Box>
  )
);
