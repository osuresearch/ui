import React, { forwardRef } from 'react';

import { Box } from '@osuresearch/ui';
import * as styles from '@osuresearch/ui/theme/utils';
import { createPolymorphicComponent } from '@osuresearch/ui/utils';
import { Align, DefaultProps, Justify, PositiveSpacing } from '@osuresearch/ui/types';

export type StackProps = DefaultProps & {
  /** Define the spacing between elements */
  gap?: PositiveSpacing;

  /** Define the `justify-content` property */
  justify?: Justify;

  /** Define the `align-items` property */
  align?: Align;

  children: React.ReactNode;
};

export const _Stack = forwardRef<HTMLDivElement, StackProps & { component: any }>(
  ({ className, gap = 'sm', align = 'stretch', justify = 'center', children, ...props }, ref) => (
    <Box
      ref={ref}
      className={styles.cx(
        'flex flex-col',
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

/**
 * Compose elements and components in a vertical flex container
 */
export const Stack = createPolymorphicComponent<'div', StackProps>(_Stack);
