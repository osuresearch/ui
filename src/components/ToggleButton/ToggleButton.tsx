import React from 'react';

import { cx, polymorphicForwardRef } from '../../utils';
import { Group } from '../Group';
import { UnstyledToggle, UnstyledToggleProps } from '../UnstyledToggle';

export type ToggleButtonProps = UnstyledToggleProps & {
  variant: 'default';

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
 *
 * <!-- @ruiPolymorphic -->
 */
export const ToggleButton = polymorphicForwardRef<'button', ToggleButtonProps>(
  (
    { as, className, variant = 'default', isDisabled, leftSlot, rightSlot, children, ...props },
    ref
  ) => (
    <UnstyledToggle
      as={as || 'button'}
      ref={ref}
      py="xxs"
      px="sm"
      isDisabled={isDisabled}
      className={cx(
        'rui-relative',
        'rui-whitespace-nowrap',

        // TODO: Refactor all of this. It's replicated from Button
        // and I want a more standardized system for defining variant
        // and stateful themes.

        // Default variant
        {
          'rui-text-dark-shade': variant === 'default',

          'rui-bg-light-shade': variant === 'default' && !isDisabled,
          'hover:rui-bg-dimmed-tint': variant === 'default' && !isDisabled,
          'data-[active=true]:rui-bg-dimmed': variant === 'default' && !isDisabled,

          'aria-pressed:rui-bg-primary': variant === 'default' && !isDisabled,
          'aria-pressed:rui-text-primary-contrast': variant === 'default' && !isDisabled
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
    </UnstyledToggle>
  )
);
