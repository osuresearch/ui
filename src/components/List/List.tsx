import React, { forwardRef } from 'react';
import { cx } from '../../theme';
import { Box } from '../Box';
import { DefaultProps } from '../../types';

export type ListProps = DefaultProps & {
  ordered?: boolean;

  children?: React.ReactNode;
};

/**
 * Lists are used to group and organize content.
 *
 * ## TODO!
 * https://bux.osu.edu/page-elements/lists
 *
 * ### When to use
 * - Use unordered lists  when your collection has no specific order.
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
    <Box ref={ref} component="ul" {...props}>
      {children}
    </Box>
  )
);
