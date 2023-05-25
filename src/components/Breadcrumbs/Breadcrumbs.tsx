import React, { Children, forwardRef } from 'react';

import { StyleSystemProps } from '../../types';
import { Group } from '../Group';
import { Icon } from '../Icon';

export type BreadcrumbsProps = StyleSystemProps & {
  /**
   * Children to separate with breadcrumb levels
   */
  children?: React.ReactNode;
};

/**
 * A navigation component that indicates the user's current location
 * within the site navigation hierarchy.
 *
 * ## Accessibility
 * - Applies `aria-label="Breadcrumbs"` to the root element
 */
export const Breadcrumbs = forwardRef<HTMLDivElement, BreadcrumbsProps>(
  ({ children, ...props }, ref) => (
    <Group ref={ref} fs="sm" align="center" gap="xxs" c="neutral-subtle" aria-label="Breadcrumbs" {...props}>
      {Children.map(children, (child, idx) => (
        <React.Fragment key={idx}>
          {idx > 0 && <Icon c="neutral-subtle" name="chevron" />}
          {child}
        </React.Fragment>
      ))}
    </Group>
  )
);
