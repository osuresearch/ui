import React, { forwardRef } from 'react';

import { StyleSystemProps, ThemeSize } from '~/types';
import { cx, polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';

export type PaperProps = StyleSystemProps & {
  variant?: 'default' | 'panel';

  shadow?: ThemeSize;
  rounded?: ThemeSize;
  withBorder?: boolean;

  children: React.ReactNode;
};

/**
 * Paper component renders white (or dark) backgrounds with shadow, border-radius and padding
 */
export const Paper = polymorphicForwardRef<'div', PaperProps>(
  (
    {
      as,
      className,
      children,
      variant = 'default',
      shadow,
      rounded = 'sm',
      withBorder = false,
      ...props
    },
    ref
  ) => (
    <Box
      as={as || 'div'}
      ref={ref}
      className={cx(
        {
          // Border style
          'rui-border-2': withBorder,
          'rui-border-light': withBorder,

          // Shadow
          // 'shadow-xs': shadow === 'xs',
          'rui-shadow-sm': shadow === 'sm',
          'rui-shadow-md': shadow === 'md',
          'rui-shadow-lg': shadow === 'lg',
          'rui-shadow-xl': shadow === 'xl',

          // Radius
          'rui-rounded-xs': rounded === 'xs',
          'rui-rounded-sm': rounded === 'sm',
          'rui-rounded-md': rounded === 'md',
          'rui-rounded-lg': rounded === 'lg',
          'rui-rounded-xl': rounded === 'xl',

          // Foreground style
          'rui-text-light-contrast': true,

          // Default variant
          'rui-bg-light-tint': variant === 'default',

          // Panel variant
          'rui-bg-light': variant === 'panel'
        },
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
);
