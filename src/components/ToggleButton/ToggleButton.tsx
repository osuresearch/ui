import React, { forwardRef } from 'react';

import { cx } from '../../utils';
import { Group } from '../Group';
import { UnstyledToggle, UnstyledToggleProps } from '../UnstyledToggle';

export type ToggleButtonProps = UnstyledToggleProps & {
  variant?: 'default';

  leftSlot?: React.ReactNode;
  rightSlot?: React.ReactNode;
};

/**
 * Toggle buttons allow users to toggle a selection on or off,
 * for example switching between two states or modes.
 *
 * ## Accessibility
 * - Exposed as a toggle button via ARIA
 * - Mouse and touch event handling, and press state management
 * - Keyboard focus management and cross browser normalization
 * - Keyboard event support for `Space` and `Enter` keys
 */
export const ToggleButton = forwardRef<HTMLButtonElement, ToggleButtonProps>(
  (
    { className, variant = 'default', isDisabled, leftSlot, rightSlot, children, ...props },
    ref
  ) => (
    <UnstyledToggle
      ref={ref}
      py="xxs"
      px="sm"
      isDisabled={isDisabled}
      className={cx(
        'relative',
        'whitespace-nowrap',

        // TODO: Refactor all of this. It's replicated from Button
        // and I want a more standardized system for defining variant
        // and stateful themes.

        // Default variant
        {
          'text-dark-shade': variant === 'default',

          'bg-light-shade': variant === 'default' && !isDisabled,
          'hover:bg-dimmed-tint': variant === 'default' && !isDisabled,
          'data-[active=true]:bg-dimmed': variant === 'default' && !isDisabled,

          'aria-pressed:bg-primary': variant === 'default' && !isDisabled,
          'aria-pressed:text-primary-contrast': variant === 'default' && !isDisabled
        },

        // Disabled
        {
          'bg-light border-light cursor-not-allowed': isDisabled,
          'hover:bg-light': isDisabled
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
    </UnstyledToggle>
  )
);
