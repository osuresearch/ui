import React, { forwardRef, MouseEventHandler } from 'react';
import { IconButton } from '@osuresearch/ui';
import { cx } from '../../theme/utils';
import { DefaultProps } from '../../types';

export type CloseButtonProps = DefaultProps & {
  /**
   * Handler for when the button is clicked
   */
  onClick: MouseEventHandler<HTMLButtonElement>;

  label?: string;
};

/**
 * Button to close or dismiss another component.
 *
 * ### Accessibility
 *
 * * `aria-label` will always be set on the button by either the user supplied `label`
 *  prop or the default message of "Close"
 * - Minimum touch target of 44px meets Success Criterion [2.5.5 Target Size (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size)
 */
export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ label = 'Close', className, ...props }, ref) => (
    <IconButton
      ref={ref}
      className={cx('hover:ring hover:opacity-70 text-light-contrast', className)}
      label={label}
      name="xmark"
      size={44}
      iconSize={16}
      {...props}
    />
  )
);
