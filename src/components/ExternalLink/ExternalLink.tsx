import React from 'react';

import { cx, polymorphicForwardRef } from '../../utils';
import { Icon } from '../Icon';
import { Link, LinkProps } from '../Link';

/**
 * External links should be used for anything that links outside of the current application.
 *
 * ## Accessibility
 * - `aria-label` indicates that the link leads to an external website.
 */
export const ExternalLink = polymorphicForwardRef<'a', LinkProps>(
  ({ as, className, variant = 'default', children, ...props }, ref) => (
    <Link
      as={as || 'a'}
      ref={ref}
      variant={variant}
      aria-label="Link leads to an external site"
      className={cx(className, '[&>i]:hover:-translate-y-4', '[&>i]:hover:translate-x-4')}
      {...props}
      target="_blank"
      referrerPolicy="no-referrer"
      mr="md"
    >
      {children}
      <Icon
        c="neutral-subtle"
        className="transition-transform"
        mr="-md"
        px="xxs"
        size="0.8em"
        name="externalLink"
        aria-hidden
      />
    </Link>
  )
);
