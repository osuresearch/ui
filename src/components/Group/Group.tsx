import React, { forwardRef } from 'react';
import { cx } from '../../styles';
import { Align, DefaultProps, Justify, ThemeSize } from '../../types';
import { Box } from '../Box';
import * as styles from '../../styles';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';

export type GroupProps = DefaultProps & {
  /** Define the `justify-content` property */
  justify?: Justify;

  /** Define the `gap` between elements */
  gap?: ThemeSize;

  /** Define the `align-items` property */
  align?: Align;

  grow?: boolean;

  children: React.ReactNode;
};

export const _Group = forwardRef<HTMLDivElement, GroupProps & { component: any }>(
  (
    {
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
      ref={ref}
      className={cx(
        className,
        'flex',
        styles.justify(justify),
        styles.gap(gap),
        styles.align(align),
        {
          // Grow - targets all direct children
          '[&>_*]:flex-grow-0': !grow,
          '[&>_*]:flex-grow': grow
        }
      )}
      {...props}
    >
      {children}
    </Box>
  )
);

/**
 * Compose elements and components in a horizontal flex container
 */
export const Group = createPolymorphicComponent<'div', GroupProps>(_Group);
