import React from 'react';

import { StyleSystemProps } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Box } from '../Box';
import { FocusRing } from '../FocusRing';

export type LinkProps = StyleSystemProps & {
  variant?: 'default' | 'subtle';

  children?: React.ReactNode;
};

/**
 * Display links with theme styles
 *
 * ## Accessibility
 *
 * Your link should always describe where it will take users. Users tend to scan text
 * online, and elements that stand out (like links) grab attention.
 * Clear links can help users navigate more quickly.
 *
 * For example, instead of "Learn more," use "Learn how to reset your passphrase."
 *
 * Links must have at least 4.5:1 contrast with the background (3:1 for large text)
 * to meet WCAG 2 Level AA.
 */
export const Link = polymorphicForwardRef<'a', LinkProps>(
  ({ as, variant = 'default', className, children, ...props }, ref) => (
    <FocusRing>
      <Box
        ref={ref}
        as={as || 'a'}
        className={cx(
          'cursor-pointer',
          'border-b',

          // Default theme
          {
            'text-link border-link': variant === 'default',
          },
          // Hover state
          'hover:text-link-hover hover:border-link-hover hover:bg-surface-link-hover',
          className
        )}
        {...props}
      >
        {children}
      </Box>
    </FocusRing>
  )
);
