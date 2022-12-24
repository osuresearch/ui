import React, { forwardRef } from 'react';
import { cx } from '../../theme/utils';
import { Box } from '../Box';
import { DefaultProps } from '../../types';

export type TableProps = DefaultProps & {
  children?: React.ReactNode;
};

/**
 * Table documentation
 *
 * ### Accessibility
 * - a11y info (used aria tags, keyboard behaviour, etc)
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(
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
      component="table"
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
