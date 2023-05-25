import React from 'react';

import { StyleSystemProps } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Icon } from '../Icon';
import { UnstyledButton } from '../UnstyledButton';

export type TextLinkProps = StyleSystemProps & {
  children?: React.ReactNode;
};

/**
 * Text links are used on their own directly following content, within Cards,
 * or in Link Lists. They should not be used within sentences or paragraphs.
 *
 * Wrap this within a `.group` parent to capture hover events on the parent.
 *
 * <!-- @ruiPolymorphic -->
 */
export const TextLink = polymorphicForwardRef<'a', TextLinkProps>(
  ({ as, className, children, ...props }, ref) => (
    <UnstyledButton
      as={as || 'a'}
      ref={ref}
      c="neutral"
      className={cx(
        'flex',
        'hover:text-primary dark:hover:text-primary-contrast',
        'group-hover:text-primary dark:group-hover:text-primary-contrast', // Support for .group parenting
        '[&>i]:hover:translate-x-xs [&>i]:group-hover:translate-x-xs',
        className
      )}
      {...props}
    >
      {children}
      <Icon className="transition-transform" name="chevron" c="primary" ml="xs" size={24} />
    </UnstyledButton>
  )
);
