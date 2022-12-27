import React, { MouseEventHandler, forwardRef } from 'react';

import { Box, Center, Group } from '@osuresearch/ui';
import { cx } from '@osuresearch/ui/theme';
import { createPolymorphicComponent } from '@osuresearch/ui/utils';

export type ButtonProps = {
  /** Alternate rendering styles */
  variant?: 'default' | 'outline';

  /**
   * Optional handler for when the button is clicked
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

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

export const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, onClick, small, variant = 'default', leftSlot, rightSlot, children }, ref) => (
    <Group
      component="button"
      ref={ref}
      type="button"
      onClick={onClick}
      disabled={disabled}
      fw="semibold"
      justify="center"
      px={small ? 'sm' : 'md'}
      py={small ? 'xs' : 'sm'}
      fs={small ? 'sm' : 'base'}
      className={cx({
        'focus:rui-ring': true,
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
 * ### Accessibility
 *
 * - Small buttons meet the minimum touch target of 44px for Success Criterion [2.5.5 Target Size (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size)
 */
export const Button = createPolymorphicComponent<'button', ButtonProps>(_Button);
