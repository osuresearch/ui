import React from 'react';

import { cx } from '../../utils';
import { polymorphicForwardRef } from '../../utils';
import { Group } from '../Group';
import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';

export type ButtonProps = UnstyledButtonProps & {
  /** Alternate rendering styles */
  variant?: 'default' | 'primary' | 'subtle';

  // Slots

  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

/**
 * Buttons are used to initialize an action.
 *
 * The actions that buttons describe should be informative and concise.
 * With few exceptions, button text should not wrap onto multiple lines.
 *
 * ## Press Events
 *
 * Use the `onPress` handler in place of `onClick` to support a wider range
 * of input devices. For detailed information see [Adobe's blog post](https://react-spectrum.adobe.com/blog/building-a-button-part-1.html).
 *
 * A `data-active` attribute is available while the button is in a pressed state.
 * Use this instead of the CSS `:active` psuedo class to properly handle when
 * the user drags their pointer off the button, along with keyboard support
 * and better touchscreen support.
 *
 * ## Accessibility
 *
 * - Keyboard users may activate buttons using the <kbd>Space</kbd> or <kbd>Enter</kbd> keys.
 * - If a visual label is not provided (e.g. an icon only button) then an `aria-label` or `aria-labelledby`
 * prop must be passed to identify the button to assistive technologies.
 * - When using an icon alongside text, do not add a label to the icon.
 * Doing so will confuse people using screen readers.
 * - Buttons must have a minimum touch target of 44px to meet Success Criterion [2.5.5 Target Size (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size)
 *
 * <!-- @ruiPolymorphic -->
 */
export const Button = polymorphicForwardRef<'button', ButtonProps>(
  (
    { as, className, variant = 'default', isDisabled, leftSlot, rightSlot, children, ...props },
    ref
  ) => (
    <UnstyledButton
      as={as || 'button'}
      ref={ref}
      py="xxs"
      px="sm"
      isDisabled={isDisabled}
      className={cx(
        'inline-block',
        'relative',
        'whitespace-nowrap',

        // Default variant
        {
          'text-neutral': variant === 'default' && !isDisabled,
          'bg-interactive': variant === 'default' && !isDisabled,
          'hover:bg-interactive-hover': variant === 'default' && !isDisabled,
          'data-[active=true]:bg-interactive-active': variant === 'default' && !isDisabled
        },

        // Subtle variant
        {
          'text-neutral': variant === 'subtle' && !isDisabled,
          'hover:bg-interactive-subtle-hover': variant === 'subtle' && !isDisabled,
          'data-[active=true]:bg-interactive-active': variant === 'subtle' && !isDisabled
        },

        // Primary variant
        {
          'bg-primary text-primary-inverse': variant === 'primary' && !isDisabled,
          'hover:bg-primary-hover': variant === 'primary' && !isDisabled,
          'data-[active=true]:bg-primary-active': variant === 'primary' && !isDisabled
        },

        // Disabled
        {
          'text-neutral-subtle cursor-not-allowed': isDisabled
        },
        className
      )}
      {...props}
    >
      <Group justify="center" align="center">
        {leftSlot}
        {children}
        {rightSlot}
      </Group>
    </UnstyledButton>
  )
);
