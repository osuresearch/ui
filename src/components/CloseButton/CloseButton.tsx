import React, { MouseEventHandler, forwardRef } from 'react';

import { StyleSystemProps } from '~/types';

import { IconButton, IconButtonProps } from '../IconButton';

export type CloseButtonProps = Omit<IconButtonProps, 'name' | 'label'> & {
  /**
   * Defines a string value that labels the current element
   */
  label?: string;
};

/**
 * Button to close or dismiss another component.
 *
 * ## Accessibility
 *
 * * `aria-label` will always be set on the button by either the user supplied `label`
 *  prop or the default message of "Close"
 * - Touch target of 44px meets Success Criterion [2.5.5 Target Size (Level AAA)](https://www.w3.org/WAI/WCAG21/Understanding/target-size)
 */
export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ label = 'Close', size = 16, className, ...props }, ref) => (
    <IconButton
      ref={ref}
      variant="fade"
      label={label}
      name="xmark"
      size={size}
      iconProps={{ p: 'sm' }}
      {...props}
    />
  )
);
