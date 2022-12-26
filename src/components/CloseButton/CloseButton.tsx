import { IconButton } from '@osuresearch/ui';
import React, { MouseEventHandler, forwardRef } from 'react';

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
      className={cx('hover:rui-ring hover:rui-opacity-70 rui-text-light-contrast', className)}
      label={label}
      name="xmark"
      size="xxl"
      iconSize={16}
      {...props}
    />
  )
);
