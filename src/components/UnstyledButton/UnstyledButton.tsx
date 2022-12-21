import React, { forwardRef, MouseEventHandler } from 'react';
import { Box } from '../Box';
import { createPolymorphicComponent } from '../../utils/createPolymorphicComponent';
import { DefaultProps } from '../../types';

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
>(({ disabled, onClick, children, component = 'button', ...props }, ref) => (
  <Box
    component={component}
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
