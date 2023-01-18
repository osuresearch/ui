import React from 'react';

import { cx } from '~/utils';
import { polymorphicForwardRef } from '~/utils';

import { Group } from '../Group';
import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';

export type ButtonProps = UnstyledButtonProps & {
  /** Alternate rendering styles */
  variant?: 'default' | 'primary' | 'subtle' | 'accented';

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
 * A `data-pressed` attribute is available while the button is in a pressed state.
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
        'rui-relative',
        'rui-whitespace-nowrap',

        // Default variant
        {
          'rui-text-dark-shade': variant === 'default',
          'rui-bg-light-shade dark:rui-bg-light': variant === 'default' && !isDisabled,
          'hover:rui-bg-dimmed-tint hover:dark:rui-bg-light-shade':
            variant === 'default' && !isDisabled,
          'data-[pressed=true]:rui-bg-dimmed data-[pressed=true]:dark:rui-bg-dimmed-tint':
            variant === 'default' && !isDisabled
        },

        // Subtle variant
        {
          'hover:rui-bg-light hover:rui-text-dark': variant === 'subtle',
          'data-[pressed=true]:rui-bg-light-shade': variant === 'subtle'
        },

        // Primary variant
        {
          'rui-bg-primary rui-text-primary-contrast': variant === 'primary',
          'hover:rui-bg-primary-shade': variant === 'primary',
          'data-[pressed=true]:rui-bg-black': variant === 'primary'
        },

        // Accented variant, color inherits, :before drives background color
        {
          'before:rui-absolute before:rui-inset-0 before:rui-mix-blend-multiply':
            variant === 'accented',

          'before:rui-bg-gray-tint-80': variant === 'accented',
          'hover:before:rui-bg-gray-tint-60': variant === 'accented' && !isDisabled,
          'data-[pressed=true]:before:rui-bg-gray-tint-40': variant === 'accented' && !isDisabled

          // 'rui-mix-blend-multiply': variant === 'subtle',

          // 'rui-text-black': variant === 'accented',
          // 'rui-mix-blend-hard-light': variant === 'accented',
          // 'rui-bg-gray-tint-80': variant === 'accented',
          // 'hover:rui-bg-gray-tint-60': variant === 'accented' && !isDisabled,
          // 'data-[pressed=true]:rui-bg-gray-tint-40': variant === 'accented',
        },

        // Disabled
        {
          'rui-bg-light rui-border-light rui-cursor-not-allowed': isDisabled,
          'hover:rui-bg-light': isDisabled
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
