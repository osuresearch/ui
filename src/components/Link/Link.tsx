import React from 'react';

import { StyleSystemProps } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Box } from '../Box';
import { FocusRing } from '../FocusRing';

export type LinkProps = StyleSystemProps & {
  variant?: 'default' | 'white';

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
          {
            'cursor-pointer': true,
            'border-b': true,

            // Default theme
            'text-link border-link': variant === 'default',
            'hover:text-light-contrast': variant === 'default',
            'hover:bg-light-shade hover:border-light-contrast':
              variant === 'default' || variant === 'white',
            'visited:text-visited visited:border-visited': variant === 'default',

            // White theme
            'text-white border-white': variant === 'white',
            'hover:text-black hover:border-white hover:bg-white': variant === 'white'
          },
          className
        )}
        {...props}
      >
        {children}
      </Box>
    </FocusRing>
  )
);
