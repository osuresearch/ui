import React from 'react';

import * as styles from '../../theme';
import { Align, Justify, PositiveSpacing, StyleSystemProps } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Box } from '../Box';

export type GroupProps = StyleSystemProps & {
  /** Define the spacing between elements */
  gap?: PositiveSpacing;

  /** Define the `justify-content` property */
  justify?: Justify;

  /** Define the `align-items` property */
  align?: Align;

  /** Apply `flex-grow: 1` to all children evenly */
  grow?: boolean;

  /** Enable wrapping of items into multiple rows */
  wrap?: boolean;

  children: React.ReactNode;
};

/**
 * Compose elements and components in a horizontal flex container
 *
 * <!-- @ruiPolymorphic -->
 */
export const Group = polymorphicForwardRef<'div', GroupProps>(
  (
    {
      as,
      className,
      justify = 'start',
      gap = 'sm',
      align = 'start',
      grow = false,
      wrap = false,
      children,
      ...props
    },
    ref
  ) => (
    <Box
      as={as || 'div'}
      ref={ref}
      className={cx(
        'flex',
        'relative',
        styles.justifyContent(justify),
        styles.gap(gap),
        styles.alignItems(align),
        {
          // Grow - targets all direct children
          '[&>_*]:flex-grow-0': !grow,
          '[&>_*]:flex-grow': grow,

          'flex-wrap': wrap
        },
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
);
