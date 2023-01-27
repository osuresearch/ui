import React from 'react';

import * as styles from '../../theme';
import { Align, Justify, PositiveSpacing, StyleSystemProps } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Box } from '../Box';

export type StackProps = StyleSystemProps & {
  /** Define the spacing between elements */
  gap?: PositiveSpacing;

  /** Define the `justify-content` property */
  justify?: Justify;

  /** Define the `align-items` property */
  align?: Align;

  children: React.ReactNode;
};

/**
 * Compose elements and components in a vertical flex container
 *
 * <!-- @ruiPolymorphic -->
 */
export const Stack = polymorphicForwardRef<'div', StackProps>(
  ({ as, className, gap = 'sm', align = 'start', justify = 'start', children, ...props }, ref) => (
    <Box
      as={as || 'div'}
      ref={ref}
      className={cx(
        'rui-flex rui-flex-col rui-relative',
        styles.justifyContent(justify),
        styles.gap(gap),
        styles.alignItems(align),
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
);
