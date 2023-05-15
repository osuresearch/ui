import React from 'react';

import { StyleSystemProps, ThemeSize } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Box } from '../Box';

export type PaperProps = StyleSystemProps & {
  shadow?: ThemeSize;
  rounded?: ThemeSize;
  withBorder?: boolean;

  children: React.ReactNode;
};

/**
 * Paper component renders light or dark backgrounds with shadows and borders.
 *
 * Use it to create cards, dropdowns, modals and other components that require borders and shadow.
 */
export const Paper = polymorphicForwardRef<'div', PaperProps>(
  ({ as, className, children, shadow, rounded = 'sm', withBorder = false, ...props }, ref) => (
    <Box
      as={as || 'div'}
      ref={ref}
      bgc="light-tint"
      c="light-contrast"
      className={cx(
        'relative',
        {
          // Border style
          'border-light': withBorder,

          // Shadow
          'shadow-sm': shadow === 'sm',
          'shadow-md': shadow === 'md',
          'shadow-lg': shadow === 'lg',
          'shadow-xl': shadow === 'xl',

          // Radius
          'rounded-xs': rounded === 'xs',
          'rounded-sm': rounded === 'sm',
          'rounded-md': rounded === 'md',
          'rounded-lg': rounded === 'lg',
          'rounded-xl': rounded === 'xl'
        },
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
);
