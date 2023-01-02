import React, { MouseEventHandler } from 'react';

import { StyleSystemProps } from '~/types';
import { cx, polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';

// TODO: How do we deal with applying hover styles,
// disabled styles, etc to this button?

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
      className={cx(
        {
          // Replace default focus ring with our own
          'focus-visible:rui-outline-none': !disabled,
          'focus:rui-ring-2 rui-ring-pink': !disabled
        },
        className
      )}
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
