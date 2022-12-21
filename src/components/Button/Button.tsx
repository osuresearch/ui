import React, { forwardRef, MouseEventHandler } from 'react';
import { cx } from '../../styles';

import { Box } from '../Box';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';

export type ButtonProps = {
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
   * Bordered variant with an empty background
   */
  alternate?: boolean;

  /**
   * Button content
   */
  children: React.ReactNode;
};

export const _Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ disabled, onClick, small, alternate, children }, ref) => (
    <Box
      component="button"
      ref={ref}
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cx({
        'text-center': true,
        'font-semibold': true,
        'px-24 py-12': !small, // 20/10

        // Primary theme
        'bg-scarlet': !alternate,
        'border-scarlet': true,
        'text-white': !alternate && !disabled,
        'text-scarlet': alternate && !disabled,
        'border-2': true,

        // Hover state
        'hover:bg-gray-shade-60': !disabled,
        'hover:border-gray-shade-60': !disabled,
        'hover:text-white': !disabled,

        // Disabled state
        'bg-gray-tint-80': disabled,
        'border-gray-tint-80': disabled,
        'text-gray-shade-20': disabled,
        'cursor-not-allowed': disabled,

        // Small variant
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
