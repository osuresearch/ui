import React from 'react';

import { StyleSystemProps } from '~/types';
import { cx } from '~/utils';
import { polymorphicForwardRef } from '~/utils';

import { Group } from '../Group';
import { UnstyledButton, UnstyledButtonProps } from '../UnstyledButton';

export type ButtonProps = Omit<UnstyledButtonProps, 'leftSlot' | 'rightSlot'> & {
  /** Alternate rendering styles */
  variant?: 'default' | 'alt';

  /**
   * Button content
   */
  children: React.ReactNode;

  leftSlot?: React.ReactNode;

  rightSlot?: React.ReactNode;
};

/**
 * Buttons are used to initialize an action.
 *
 * The actions that buttons describe should be informative and concise.
 * With few exceptions, button text should not wrap onto multiple lines.
 *
 * ## Polymorphic
 *  - You can use the `as` prop to change the root element for this component.
 *
 * ## Accessibility
 * - Keyboard users may activate buttons using the `Space` or `Enter` keys.
 * - If a visual label is not provided (e.g. an icon only button) then an `aria-label` or `aria-labelledby`
 * prop must be passed to identify the button to assistive technologies.
 * - Buttons must have a minimum touch target of 44px to meet Success Criterion [2.5.5 Target Size (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size)
 */
export const Button = polymorphicForwardRef<'button', ButtonProps>(
  ({ as, className, variant = 'default', leftSlot, rightSlot, children, ...props }, ref) => (
    <UnstyledButton
      as={as || 'button'}
      ref={ref}
      c={!props.isDisabled ? 'light-contrast' : 'dark'}
      py="xxs"
      px="sm"
      className={cx(
        'rui-focus-ring',
        'rui-border-2 rui-border-clear',
        { 'hover:rui-bg-light': !props.isDisabled },

        { 'rui-border-dimmed': variant === 'default' },
        { 'rui-bg-light rui-border-light': props.isDisabled },
        className
      )}
      {...props}
    >
      {leftSlot}
      {children}
      {rightSlot}
    </UnstyledButton>
  )
);
