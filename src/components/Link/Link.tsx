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
            'rui-cursor-pointer': true,
            'rui-border-b': true,

            // Default theme
            'rui-text-link rui-border-link': variant === 'default',
            'hover:rui-text-light-contrast': variant === 'default',
            'hover:rui-bg-light-shade hover:rui-border-light-contrast':
              variant === 'default' || variant === 'white',
            'visited:rui-text-visited visited:rui-border-visited': variant === 'default',

            // White theme
            'rui-text-white rui-border-white': variant === 'white',
            'hover:rui-text-black hover:rui-border-white hover:rui-bg-white': variant === 'white'
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
