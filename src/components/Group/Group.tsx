import React, { forwardRef } from 'react';

import { Box } from '@osuresearch/ui';
import * as styles from '@osuresearch/ui/theme/utils';
import { createPolymorphicComponent } from '@osuresearch/ui/utils';
import { Align, DefaultProps, Justify, PositiveSpacing } from '@osuresearch/ui/types';

export type GroupProps = DefaultProps & {
  /** Define the spacing between elements */
  gap?: PositiveSpacing;

  /** Define the `justify-content` property */
  justify?: Justify;

  /** Define the `align-items` property */
  align?: Align;

  grow?: boolean;

  children: React.ReactNode;
};

export const _Group = forwardRef<HTMLDivElement, GroupProps & { component: any }>(
  (
    { className, justify = 'start', gap = 'sm', align = 'start', grow = false, children, ...props },
    ref
  ) => (
    <Box
      ref={ref}
      className={styles.cx(
        'flex',
        styles.justify(justify),
        styles.gap(gap),
        styles.align(align),
        {
          // Grow - targets all direct children
          '[&>_*]:flex-grow-0': !grow,
          '[&>_*]:flex-grow': grow
        },
        className
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
