import React from 'react';

import { StyleSystemProps } from '~/types';
import { cx, polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';

export type TextProps = StyleSystemProps & {
  /** Text alignment */
  ta?: 'left' | 'right' | 'center';

  children: React.ReactNode;
};

/**
 * Use the Text component to display text content while maintaining theme styles
 *
 * ## Polymorphic
 *
 * You can use `component` prop to change the root element for this component.
 */
export const Text = polymorphicForwardRef<'span', TextProps>(
  ({ as, className, ta = 'left', c = 'light-contrast', children, ...props }, ref) => (
    <Box
      as={as || 'span'}
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
      {...props}
    >
      {children}
    </Box>
  )
);
