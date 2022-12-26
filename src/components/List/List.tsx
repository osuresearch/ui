import React, { forwardRef } from 'react';

import { cx } from '../../theme/utils';
import { DefaultProps } from '../../types';
import { Box } from '../Box';

export type ListProps = DefaultProps & {
  ordered?: boolean;

  children?: React.ReactNode;
};

/**
 * Lists are used to group and organize content.
 *
 * ## TODO
 * - Match BUX's depth variants https://bux.osu.edu/page-elements/lists
 *
 * ### When to use
 * - Use unordered lists when your collection has no specific order.
 * - Use ordered lists when you want to display content in some specific
 *  order like ranking or a series of steps in a process.
 */
export const List = forwardRef<HTMLUListElement, ListProps>(
  (
    {
      ordered = false,

      className,
      children,
      ...props
    },
    ref
  ) => (
    <Box
      ref={ref}
      component="ul"
      pl="xxl"
      className={cx(
        // Marker style
        '[&>li]:rui-pl-md marker:rui-text-scarlet marker:rui-text-md rui-list-outside',

        // Marker type
        {
          'rui-list-disc': !ordered,
          'rui-list-decimal': ordered
        },
        className
      )}
      {...props}
    >
      {children}
    </Box>
  )
);
