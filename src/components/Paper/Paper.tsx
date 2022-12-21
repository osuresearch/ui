import React, { forwardRef } from 'react';
import { cx } from '../../styles';
import { DefaultProps, ThemeSize } from '../../types';
import { Box } from '../Box';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';

export type PaperProps = DefaultProps & {
  variant?: 'default' | 'panel';

  shadow?: ThemeSize;
  rounded?: ThemeSize;
  withBorder?: boolean;

  children: React.ReactNode;
};

const _Paper = forwardRef<HTMLDivElement, PaperProps>(
  (
    {
      className,
      children,
      variant = 'default',
      shadow,
      rounded = 'sm',
      withBorder = false,
      ...others
    },
    ref
  ) => (
    <Box
      component="div"
      ref={ref}
      className={cx(
        {
          // Border style
          'border-2': withBorder,
          'border-gray-tint-90 dark:border-gray-shade-80': withBorder,

          // Shadow
          // 'shadow-xs': shadow === 'xs',
          'shadow-sm': shadow === 'sm',
          'shadow-md': shadow === 'md',
          'shadow-lg': shadow === 'lg',
          'shadow-xl': shadow === 'xl',

          // Radius
          'rounded-xs': rounded === 'xs',
          'rounded-sm': rounded === 'sm',
          'rounded-md': rounded === 'md',
          'rounded-lg': rounded === 'lg',
          'rounded-xl': rounded === 'xl',

          // Foreground style
          'text-black dark:text-gray-tint-80': true,

          // Default variant
          'bg-white dark:bg-black': variant === 'default',

          // Panel variant
          'bg-gray-tint-90 dark:bg-gray-shade-80': variant === 'panel'
        },
        className
      )}
      {...others}
    >
      {children}
    </Box>
  )
);

/**
 * Paper component renders white (or dark) backgrounds with shadow, border-radius and padding
 */
export const Paper = createPolymorphicComponent<'div', PaperProps>(_Paper);
