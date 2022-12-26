import React, { MouseEventHandler, forwardRef } from 'react';

import { cx } from '@osuresearch/ui/theme/utils';

import { DefaultProps } from '../../types';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { Box } from '../Box';

export type UnstyledButtonProps = DefaultProps & {
  /**
   * Optional handler for when the button is clicked
   */
  onClick?: MouseEventHandler<HTMLButtonElement>;

  /**
   * Should the button listen to click events
   */
  disabled?: boolean;

  /**
   * Button content
   */
  children: React.ReactNode;
};

export const _UnstyledButton = forwardRef<
  HTMLButtonElement,
  UnstyledButtonProps & { component: any }
>(({ disabled, onClick, children, component = 'button', className, ...props }, ref) => (
  <Box
    component={component}
    // className={cx({
    //   'focus:ring hover:ring': !disabled
    // }, className)}
    className={className}
    ref={ref}
    type="button"
    onClick={onClick}
    disabled={disabled}
    {...props}
  >
    {children}
  </Box>
));

/**
 * Unstyled polymorphic button
 */
export const UnstyledButton =
  createPolymorphicComponent<'button', UnstyledButtonProps>(_UnstyledButton);
