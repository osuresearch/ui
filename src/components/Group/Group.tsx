import React from 'react';

import * as styles from '~/theme';
import { Align, Justify, PositiveSpacing, StyleSystemProps } from '~/types';
import { cx, polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';

export type GroupProps = StyleSystemProps & {
  /** Define the spacing between elements */
  gap?: PositiveSpacing;

  /** Define the `justify-content` property */
  justify?: Justify;

  /** Define the `align-items` property */
  align?: Align;

  grow?: boolean;

  children: React.ReactNode;
};

/**
 * Compose elements and components in a horizontal flex container
 *
 * ## Polymorphic
 *  - You can use the `as` prop to change the root element for this component.
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
      children,
      ...props
    },
    ref
  ) => (
    <Box
      as={as || 'div'}
      ref={ref}
      className={cx(
        'rui-flex',
        styles.justify(justify),
        styles.gap(gap),
        styles.align(align),
        {
          // Grow - targets all direct children
          '[&>_*]:rui-flex-grow-0': !grow,
          '[&>_*]:rui-flex-grow': grow
        },
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
);
