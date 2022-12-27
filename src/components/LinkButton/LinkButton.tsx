import React, { forwardRef } from 'react';

import { Box, Icon, UnstyledButton } from '@osuresearch/ui';
import { cx } from '@osuresearch/ui/theme/utils';
import { DefaultProps } from '@osuresearch/ui/types';
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
      c="light-contrast"
      className={cx(
        'rui-flex',
        'hover:rui-text-primary dark:hover:rui-text-primary-contrast',
        'group-hover:rui-text-primary dark:group-hover:rui-text-primary-contrast', // Support for .group parenting
        '[&>i]:hover:rui-translate-x-sm [&>i]:group-hover:rui-translate-x-sm',
        className
      )}
      {...props}
    >
      {children}
      <Icon className="rui-transition-transform" name="chevron" c="primary" ml="sm" size={24} />
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
