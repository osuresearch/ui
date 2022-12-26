import React, { forwardRef } from 'react';

import { cx } from '../../theme/utils';
import { DefaultProps } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Box } from '../Box';

export type TextProps = DefaultProps & {
  /** Text alignment */
  ta?: 'left' | 'right' | 'center';

  children: React.ReactNode;
};

const _Text = forwardRef<HTMLSpanElement, TextProps & { component: any }>(
  (
    {
      component = 'span',
      style,
      className,
      children,
      ta = 'left',
      c = 'light-contrast',
      ...others
    },
    ref
  ) => (
    <Box
      style={style}
      component={component}
      ref={ref}
      c={c}
      className={cx(
        'rui-break-words',
        {
          // Alignment
          'rui-text-left': ta === 'left',
          'rui-text-right': ta === 'right',
          'rui-text-center': ta === 'center'
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
export const Text = createPolymorphicComponent<'span', TextProps>(_Text);
