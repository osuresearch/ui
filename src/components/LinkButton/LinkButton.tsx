import React from 'react';

import { StyleSystemProps } from '../../types';
import { cx, polymorphicForwardRef } from '../../utils';
import { Icon } from '../Icon';
import { UnstyledButton } from '../UnstyledButton';

export type LinkButtonProps = StyleSystemProps & {
  children?: React.ReactNode;
};

/**
 * Link button / call to action button.
 *
 * This is an alternative button style from Buckeye UX.
 *
 * Wrap this within a `.group` parent to capture hover events on the parent.
 *
 * <!-- @ruiPolymorphic -->
 */
export const LinkButton = polymorphicForwardRef<'button', LinkButtonProps>(
  ({ as, className, children, ...props }, ref) => (
    <UnstyledButton
      as={as || 'button'}
      ref={ref}
      c="light-contrast"
      className={cx(
        'flex',
        'hover:text-primary dark:hover:text-primary-contrast',
        'group-hover:text-primary dark:group-hover:text-primary-contrast', // Support for .group parenting
        '[&>i]:hover:translate-x-sm [&>i]:group-hover:translate-x-sm',
        className
      )}
      {...props}
    >
      {children}
      <Icon className="transition-transform" name="chevron" c="primary" ml="sm" size={24} />
    </UnstyledButton>
  )
);
