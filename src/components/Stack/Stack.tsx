import React from 'react';

import * as styles from '~/theme';
import { Align, Justify, PositiveSpacing, StyleSystemProps } from '~/types';
import { cx, polymorphicForwardRef } from '~/utils';

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
 * ## Polymorphic
 *  - You can use the `as` prop to change the root element for this component.
 */
export const Stack = polymorphicForwardRef<'div', StackProps>(
  (
    { as, className, gap = 'sm', align = 'stretch', justify = 'center', children, ...props },
    ref
  ) => (
    <Box
      as={as || 'div'}
      ref={ref}
      className={cx(
        'rui-flex rui-flex-col',
        styles.justify(justify),
        styles.gap(gap),
        styles.align(align),
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
);
