import React, { Children, forwardRef } from 'react';
import { cx } from '../../styles';
import { Box } from '../Box';
import { DefaultProps } from '../../types';
import { Icon } from '../Icon';
import { Group } from '../Group';

export type BreadcrumbsProps = DefaultProps & {
  /**
   * Children to separate with breadcrumb levels
   */
  children?: React.ReactNode;
};

/**
 * A navigation component that indicates the user's current location
 * within the site navigation hierarchy.
 *
 * ### Accessibility
 * - Applies `aria-label="Breadcrumbs"` to the root element
 */
export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ className, children, ...props }, ref) => (
    <Group
      ref={ref}
      className="text-sm"
      align="center"
      gap="xs"
      c="dimmed"
      aria-label="Breadcrumbs"
      {...props}
    >
      {Children.map(children, (child, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <Icon name="chevron" />}
          {child}
        </React.Fragment>
      ))}
    </Group>
  )
);
