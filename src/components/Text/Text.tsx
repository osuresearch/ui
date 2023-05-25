import React from 'react';

import { StyleSystemProps } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Box } from '../Box';

export type TextProps = StyleSystemProps & {
  /** Text alignment */
  ta?: 'left' | 'right' | 'center';

  children: React.ReactNode;
};

/**
 * Use the Text component to display text content while maintaining theme styles
 *
 * <!-- @ruiPolymorphic -->
 */
export const Text = polymorphicForwardRef<'span', TextProps>(
  ({ as, className, ta = 'left', c = 'neutral', children, ...props }, ref) => (
    <Box
      as={as || 'span'}
      ref={ref}
      c={c}
      className={cx(
        'break-words',
        {
          // Alignment
          'text-left': ta === 'left',
          'text-right': ta === 'right',
          'text-center': ta === 'center'
        },
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
);
