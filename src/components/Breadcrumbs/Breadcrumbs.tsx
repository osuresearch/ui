import { DefaultProps, Group, Icon, Text } from '@osuresearch/ui';
import React, { Children, forwardRef } from 'react';

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
    <Group ref={ref} fs="sm" align="center" gap="xxs" c="dark" aria-label="Breadcrumbs" {...props}>
      {Children.map(children, (child, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <Icon c="dark" name="chevron" />}
          {child}
        </React.Fragment>
      ))}
    </Group>
  )
);
