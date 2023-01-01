import React, { MouseEventHandler } from 'react';

import { StyleSystemProps } from '~/types';
import { polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';

export type UnstyledButtonProps = StyleSystemProps & {
  /**
   * Should the button listen to click events
   */
  disabled?: boolean;

  /**
   * Button content
   */
  children: React.ReactNode;
};

/**
 * Unstyled polymorphic button
 *
 * ## Polymorphic
 *  - You can use the `as` prop to change the root element for this component.
 */
export const UnstyledButton = polymorphicForwardRef<'button', UnstyledButtonProps>(
  ({ as, disabled, onClick, children, className, ...props }, ref) => (
    <Box
      as={as || 'button'}
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
  )
);
