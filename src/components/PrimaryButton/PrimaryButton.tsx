import React from 'react';

import { cx } from '~/utils';
import { polymorphicForwardRef } from '~/utils';

import { Group } from '../Group';

export type PrimaryButtonProps = {
  /** Alternate rendering styles */
  variant?: 'default' | 'outline';

  /**
   * Should the button listen to click events
   */
  disabled?: boolean;

  /**
   * Render a smaller variant of the button
   */
  small?: boolean;

  /**
   * Button content
   */
  children: React.ReactNode;

  leftSlot?: React.ReactNode;

  rightSlot?: React.ReactNode;
};

/**
 * Buttons are used to initialize an action.
 *
 * The actions that buttons describe should be informative and concise.
 * With few exceptions, button text should not wrap onto multiple lines.
 *
 * ### When to use a Button
 *
 * - Opening or closing a modal or dialog
 * - Submitting data to the server
 *
 * ### When to consider something else
 *
 * - Navigating to a new page or view in your application
 * - Navigating to different web page, e.g. external documentation
 *
 * <!-- @ruiPolymorphic -->
 */
export const PrimaryButton = polymorphicForwardRef<'button', PrimaryButtonProps>(
  ({ as, disabled, small, variant = 'default', leftSlot, rightSlot, children }, ref) => (
    <Group
      as={as || 'button'}
      ref={ref}
      type="button"
      disabled={disabled}
      fw="semibold"
      justify="center"
      align="center"
      px={small ? 'sm' : 'md'}
      py={small ? 'xxs' : 'sm'}
      fs={small ? 'sm' : 'base'}
      className={cx({
        'rui-focus-ring': true,
        'rui-text-center': true,
        'rui-border-2': true,

        // Primary theme
        'rui-bg-primary': variant === 'default' && !disabled,
        'rui-border-primary': !disabled,
        'rui-text-primary-contrast': variant === 'default' && !disabled,
        'rui-text-primary': variant === 'outline' && !disabled,

        // outline variant against a dark theme
        'dark:rui-text-dark': variant === 'outline' && !disabled,
        'dark:rui-border-dark': variant === 'outline' && !disabled,

        // Hover state
        'hover:rui-bg-dark-shade': !disabled,
        'hover:rui-border-dark-shade': !disabled,
        'hover:rui-text-dark-contrast': !disabled,
        'hover:rui-text-primary-contrast': variant === 'outline' && !disabled,

        // Disabled state
        'rui-bg-light-shade': disabled,
        'rui-border-light-shade': disabled,
        'rui-text-dark-tint': disabled,
        'rui-cursor-not-allowed': disabled
      })}
    >
      {leftSlot}
      {children}
      {rightSlot}
    </Group>
  )
);
