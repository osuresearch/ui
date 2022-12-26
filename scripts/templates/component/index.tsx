import { Box } from '@osuresearch/ui';
import React, { forwardRef } from 'react';

import { cx } from '@osuresearch/ui/theme';
import { DefaultProps } from '@osuresearch/ui/types';

export type __TEMPLATE__Props = DefaultProps & {
  /* Your props */

  children?: React.ReactNode;
};

/**
 * __TEMPLATE__ documentation
 *
 * ### Accessibility
 * - a11y info (used aria tags, keyboard behaviour, etc)
 */
export const __TEMPLATE__ = forwardRef<HTMLDivElement, __TEMPLATE__Props>(
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
