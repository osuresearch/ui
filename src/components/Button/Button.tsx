import React, { forwardRef, MouseEventHandler } from 'react';
import { cx } from '../../theme';

import { Box } from '../Box';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';

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
};

export const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, onClick, small, variant = 'default', children }, ref) => (
    <Box
      component="button"
      ref={ref}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cx({
        'focus:ring': true,
        'text-center': true,
        'font-semibold': true,
        'px-24 py-12': !small, // 20/10

        // Primary theme
        'bg-primary': variant === 'default' && !disabled,
        'border-primary': !disabled,
        'text-white': variant === 'default' && !disabled,
        'text-primary': variant === 'outline' && !disabled,
        'border-2': true,

        // outline variant against a dark theme
        'dark:text-neutral-100': variant === 'outline' && !disabled,
        'dark:border-neutral-40': variant === 'outline' && !disabled,

        // Hover state
        // TODO: I want to use a neutral here but
        // I don't have a good one between neutral-90 and neutral-100
        'hover:bg-gray-shade-60': !disabled,
        'hover:border-gray-shade-60': !disabled,
        'hover:text-white': !disabled,

        // Disabled state
        'bg-neutral-40': disabled,
        'border-neutral-40': disabled,
        'text-neutral-80': disabled,
        'cursor-not-allowed': disabled,

        // Small modifier
        'px-12 py-8': small, // 12/6
        'text-sm': small
      })}
    >
      {children}
    </Box>
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
 */
export const Button = createPolymorphicComponent<'button', ButtonProps>(_Button);
