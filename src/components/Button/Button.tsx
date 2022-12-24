import React, { forwardRef, MouseEventHandler } from 'react';
import { Center, Group, Box } from '@osuresearch/ui';
import { createPolymorphicComponent } from '@osuresearch/ui/utils';
import { cx } from '@osuresearch/ui/theme';

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
      align="center"
      px={small ? 'sm' : 'md'}
      py={small ? 'xs' : 'sm'}
      fs={small ? 'sm' : 'base'}
      className={cx({
        'focus:ring': true,
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
