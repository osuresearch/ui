import React, { useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

import { StyleSystemProps } from '~/types';
import { cx, polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';
import { FocusRing } from '../FocusRing';

export type UnstyledButtonProps = StyleSystemProps &
  AriaButtonProps & {
    /**
     * Button content
     */
    children: React.ReactNode;
  };

/**
 * Unstyled polymorphic button
 *
 * ## Accessibility
 * - Is wrapped by the `FocusRing` component
 *
 * ## Polymorphic
 * - You can use the `as` prop to change the root element for this component.
 */
export const UnstyledButton = polymorphicForwardRef<'button', UnstyledButtonProps>(
  ({ as, ...props }, ref) => {
    const { children } = props;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { buttonProps } = useButton(
      {
        ...props,
        elementType: as
      },
      buttonRef
    );

    return (
      <FocusRing>
        <Box as={as || 'button'} ref={ref} {...props} {...buttonProps}>
          {children}
        </Box>
      </FocusRing>
    );
  }
);
