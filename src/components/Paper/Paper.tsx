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
        'rui-relative',
        {
          // Border style
          'rui-border-2': withBorder,
          'rui-border-light': withBorder,

          // Shadow
          'rui-shadow-sm': shadow === 'sm',
          'rui-shadow-md': shadow === 'md',
          'rui-shadow-lg': shadow === 'lg',
          'rui-shadow-xl': shadow === 'xl',

          // Radius
          'rui-rounded-xs': rounded === 'xs',
          'rui-rounded-sm': rounded === 'sm',
          'rui-rounded-md': rounded === 'md',
          'rui-rounded-lg': rounded === 'lg',
          'rui-rounded-xl': rounded === 'xl'
        },
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
);
