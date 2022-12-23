import React, { forwardRef } from 'react';

import { Box, Icon, UnstyledButton } from '@osuresearch/ui';
import { DefaultProps } from '@osuresearch/ui/types';
import { cx } from '@osuresearch/ui/theme';
import { createPolymorphicComponent } from '@osuresearch/ui/utils';

export type LinkButtonProps = DefaultProps & {
  children?: React.ReactNode;
};

/**
 * LinkButton documentation
 *
 * ### Accessibility
 * - a11y info (used aria tags, keyboard behaviour, etc)
 */
export const _LinkButton = forwardRef<HTMLButtonElement, LinkButtonProps & { component: any }>(
  ({ className, children, ...props }, ref) => (
    <UnstyledButton
      ref={ref}
      className={cx(
        'flex',
        'text-neutral-100',
        'hover:text-primary dark:hover:text-neutral-80',
        'group-hover:text-primary dark:group-hover:text-neutral-80', // Support for .group parenting
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

/**
 * Link button / call to action button
 *
 * Wrap this within a `.group` parent to capture hover events on the parent.
 *
 * ### Polymorphic Component
 *
 * You can use `component` prop to change the root element for this component.
 */
export const LinkButton = createPolymorphicComponent<'button', LinkButtonProps>(_LinkButton);
