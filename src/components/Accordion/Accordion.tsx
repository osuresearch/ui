import { Box } from '@osuresearch/ui';
import React, { forwardRef } from 'react';

import { cx } from '../../theme/utils';
import { DefaultProps } from '../../types';

export type AccordionProps = DefaultProps & {
  /* Your props */

  children?: React.ReactNode;
};

/**
 * Accordion documentation
 *
 * ### Accessibility
 * - a11y info (used aria tags, keyboard behaviour, etc)
 */
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
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
