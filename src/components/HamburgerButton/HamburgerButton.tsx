import React, { forwardRef } from 'react';
import { mergeProps } from 'react-aria';

import { cx } from '../../utils';
import { Icon } from '../Icon';
import { UnstyledToggle, UnstyledToggleProps } from '../UnstyledToggle';

export type HamburgerButtonProps = UnstyledToggleProps & {
  /**
   * Defines a string value that labels the current element
   */
  label?: string;
};

/**
 * Button to toggle a menu or navigation bar typically placed a
 * top corner of the UI.
 */
export const HamburgerButton = forwardRef<HTMLButtonElement, HamburgerButtonProps>(
  ({ label = 'Toggle menu', className, ...props }, ref) => (
    <UnstyledToggle
      ref={ref}
      aria-label={label}
      {...mergeProps(props, {
        className: cx({
          'aria-pressed:bg-primary': true,
          'aria-pressed:text-primary-contrast': true
        })
      })}
    >
      <Icon size={24} name="bars" p="sm" block />
    </UnstyledToggle>
  )
);
