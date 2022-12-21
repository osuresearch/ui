import React, { forwardRef, MouseEventHandler } from 'react';
import { cx } from '../../styles';
import { Box } from '../Box';
import { DefaultProps } from '../../types';
import { UnstyledButton } from '../UnstyledButton';
import { Icon } from '../Icon';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';

export type CloseButtonProps = DefaultProps & {
  /**
   * Optional handler for when the button is clicked
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  label?: string;
};

/**
 * Button to close or dismiss another component.
 *
 * ### Accessibility
 *
 * * `aria-label` will always be set on the button by either the user supplied `label`
 *  prop or the default message of "Close"
 */
export const CloseButton = forwardRef<HTMLButtonElement, CloseButtonProps>(
  ({ className, label = 'Close', ...props }, ref) => (
    <UnstyledButton
      ref={ref}
      aria-label={label}
      className={cx('flex', 'hover:opacity-70', className)}
      {...props}
    >
      <Icon name="xmark" size={22} p="md" />
    </UnstyledButton>
  )
);
