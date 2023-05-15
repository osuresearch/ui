import React from 'react';

import { Color } from '../../theme';
import { cx, polymorphicForwardRef } from '../../utils';
import { Icon } from '../Icon';
import { Link, LinkProps } from '../Link';

/**
 * ExternalLink documentation
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
        c={
          {
            default: 'dark',
            white: 'white'
          }[variant] as Color
        }
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
