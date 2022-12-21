import React, { forwardRef, MouseEventHandler } from 'react';
import { cx } from '../../styles';
import { Box } from '../Box';
import { DefaultProps } from '../../types';
import { UnstyledButton } from '../UnstyledButton';
import { Icon } from '../Icon';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';

export type CallToActionProps = DefaultProps & {
  /**
   * Optional handler for when the button is clicked
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  children?: React.ReactNode;
};

export const _CallToAction = forwardRef<HTMLButtonElement, CallToActionProps & { component: any }>(
  ({ className, children, ...props }, ref) => (
    <UnstyledButton
      ref={ref}
      className={cx(
        'flex',
        'text-black dark:text-white',
        'hover:text-scarlet dark:hover:text-gray-tint-60',
        'group-hover:text-scarlet dark:group-hover:text-gray-tint-60',
        '[&>i]:hover:translate-x-sm [&>i]:group-hover:translate-x-sm',
        className
      )}
      {...props}
    >
      {children}
      <Icon className="transition-transform" name="chevron" c="scarlet" ml="sm" size={24} />
    </UnstyledButton>
  )
);

/**
 * Call to action button.
 *
 * Wrap this within a `.group` parent to capture hover events on the parent.
 *
 * ### Polymorphic Component
 *
 * You can use `component` prop to change the root element for this component.
 */
export const CallToAction = createPolymorphicComponent<'button', CallToActionProps>(_CallToAction);
