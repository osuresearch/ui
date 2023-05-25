import React, { forwardRef } from 'react';

import { cx } from '../../utils';
import { Group } from '../Group';
import { UnstyledToggle, UnstyledToggleProps } from '../UnstyledToggle';

export type ToggleButtonProps = UnstyledToggleProps & {
  variant?: 'default';

  renderLeft?: React.ReactNode;
  renderRight?: React.ReactNode;
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
    { className, variant = 'default', isDisabled, renderLeft, renderRight, children, ...props },
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
          'text-neutral': variant === 'default',

          'bg-interactive': variant === 'default' && !isDisabled,
          'hover:bg-interactive-hover': variant === 'default' && !isDisabled,
          'data-[active=true]:bg-interactive-active': variant === 'default' && !isDisabled,

          'aria-pressed:bg-interactive-active': variant === 'default' && !isDisabled,
          'aria-pressed:text-neutral': variant === 'default' && !isDisabled
        },

        // Disabled
        {
          'bg-interactive-disabled cursor-not-allowed': isDisabled,
          'hover:bg-light': isDisabled
        },
        className
      )}
      {...props}
    >
      <Group justify="center" align="center">
        {renderLeft}
        {children}
        {renderRight}
      </Group>
    </UnstyledToggle>
  )
);
