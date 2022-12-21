import React, { forwardRef } from 'react';
import { cx } from '../../styles';
import { Box } from '../Box';
import { DefaultProps } from '../../types';

export type DemoProps = DefaultProps & {
  /* Your props */

  children?: React.ReactNode;
};

/**
 * Demo documentation
 *
 * ### Accessibility
 * - a11y info (used aria tags, keyboard behaviour, etc)
 */
export const Demo = forwardRef<HTMLDivElement, DemoProps>(
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
