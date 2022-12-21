import React, { forwardRef } from 'react';
import { cx } from '../../styles';
import { ThemeSize, ThemeColor, DefaultProps } from '../../types';
import { Box } from '../Box';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { tc } from '../../styles';

export type TextProps = DefaultProps & {
  /** Font size */
  fs?: ThemeSize;

  /** Color */
  c?: ThemeColor;

  /** Text alignment */
  ta?: 'left' | 'right' | 'center';

  /** Render bolded */
  bold?: boolean;

  /** Render as a `span` element */
  span?: boolean;

  children: React.ReactNode;
};

const _Text = forwardRef<HTMLDivElement, TextProps>(
  (
    {
      style,
      className,
      children,
      c = 'normal',
      ta = 'left',
      fs,
      bold = false,
      span = false,
      ...others
    },
    ref
  ) => (
    <Box
      style={style}
      component={span ? 'span' : 'div'}
      ref={ref}
      className={cx(
        {
          [tc(c)]: true,

          'font-bold': bold,

          // Alignment
          'text-left': ta === 'left',
          'text-right': ta === 'right',
          'text-center': ta === 'center',

          // Font size
          'text-sm': fs === 'sm',
          'text-md': fs === 'md',
          'text-lg': fs === 'lg',
          'text-xl': fs === 'xl'
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
 * Use the Text component to display text content while maintaining theme styles
 */
export const Text = createPolymorphicComponent<'div', TextProps>(_Text);
