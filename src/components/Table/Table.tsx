import React, { forwardRef } from 'react';

import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';

import { Box } from '../Box';

export type TableProps = StyleSystemProps & {
  variant?: 'default' | 'compact';

  striped?: boolean;
  children?: React.ReactNode;
};

/**
 * Tables are used to display tabular data in rows and columns.
 *
 * ## Accessibility
 * - TODO: Wire up captions
 */
export const Table = forwardRef<HTMLTableElement, TableProps>(
  ({ className, variant = 'default', striped = false, children, ...props }, ref) => (
    <Box
      as="table"
      ref={ref}
      w="100%"
      c="light-contrast"
      fs={variant === 'compact' ? 'sm' : 'base'}
      className={cx(
        // <th> styles
        '[&_th]:rui-text-left',
        '[&_th]:rui-border-b-2 [&_th]:rui-border-b-dark',

        // <th scope="row">
        '[&_th[scope="row"]]:rui-border-b-0',
        '[&_th[scope="row"]]:rui-border-r-2 [&_th[scope="row"]]:rui-border-r-dark',

        // <tr> styles
        '[&_tr]:rui-border-b-2 [&_tr]:rui-border-b-light-shade',

        {
          // <tr> for striped rows
          '[&_tr:nth-child(2n)]:rui-bg-light': striped,

          // `default` variant
          '[&_th]:rui-py-xs [&_th]:rui-px-md': variant === 'default',
          '[&_td]:rui-p-md': variant === 'default',

          // `compact` variant
          '[&_th]:rui-p-xs': variant == 'compact',
          '[&_td]:rui-p-xs': variant == 'compact'
        },

        // User-supplied styles
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
);
