import React, { forwardRef } from 'react';
import { cx } from '../../styles';
import { Align, DefaultProps, Justify, ThemeSize } from '../../types';
import * as styles from '../../styles';
import { Box } from '../Box';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';

export type StackProps = DefaultProps & {
  gap?: ThemeSize;

  align?: Align;
  justify?: Justify;

  children: React.ReactNode;
};

export const _Stack = forwardRef<HTMLDivElement, StackProps & { component: any }>(
  ({ gap = 'sm', align = 'stretch', justify = 'center', children, ...props }, ref) => (
    <Box
      ref={ref}
      className={cx('flex flex-col', styles.justify(justify), styles.gap(gap), styles.align(align))}
      {...props}
    >
      {children}
    </Box>
  )
);

/**
 * Compose elements and components in a vertical flex container
 */
export const Stack = createPolymorphicComponent<'div', StackProps>(_Stack);
