import React from 'react';

import { cx } from '../../utils';
import { polymorphicForwardRef } from '../../utils';
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

  renderLeft?: React.ReactNode;

  renderRight?: React.ReactNode;
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
 * <!-- @ruiStatus In Development -->
 * <!-- @ruiPolymorphic -->
 */
export const PrimaryButton = polymorphicForwardRef<'button', PrimaryButtonProps>(
  ({ as, disabled, small, variant = 'default', renderLeft, renderRight, children }, ref) => (
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
        'focus-ring': true,
        'text-center': true,
        'border-2': true,

        // Primary theme
        'bg-primary': variant === 'default' && !disabled,
        'border-primary': !disabled,
        'text-primary-contrast': variant === 'default' && !disabled,
        'text-primary': variant === 'outline' && !disabled,

        // outline variant against a dark theme
        'dark:text-dark': variant === 'outline' && !disabled,
        'dark:border-dark': variant === 'outline' && !disabled,

        // Hover state
        'hover:bg-dark-shade': !disabled,
        'hover:border-dark-shade': !disabled,
        'hover:text-dark-contrast': !disabled,
        'hover:text-primary-contrast': variant === 'outline' && !disabled,

        // Disabled state
        'bg-light-shade': disabled,
        'border-light-shade': disabled,
        'text-dark-tint': disabled,
        'cursor-not-allowed': disabled
      })}
    >
      {renderLeft}
      {children}
      {renderRight}
    </Group>
  )
);
