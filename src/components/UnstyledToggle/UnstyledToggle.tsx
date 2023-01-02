import React, { useRef } from 'react';
import { AriaToggleButtonProps, useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';

import { StyleSystemProps } from '~/types';
import { polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';

// TODO: Deal with onChange conflict.
// See: https://github.com/adobe/react-spectrum/issues/1860#issuecomment-849833808
// (pertains specifically to RHF as well)

export type UnstyledToggleProps = StyleSystemProps &
  AriaToggleButtonProps & {
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
 *
 * ## Accessibility
 * - Toggles `aria-pressed` on the root element
 */
export const UnstyledToggle = polymorphicForwardRef<'button', UnstyledToggleProps>(
  ({ as, ...props }, ref) => {
    const { children } = props;

    const state = useToggleState(props);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { buttonProps } = useToggleButton(
      {
        ...props,
        elementType: as
      },
      state,
      buttonRef
    );

    return (
      <Box as={as || 'button'} ref={ref} {...props} {...buttonProps}>
        {children}
      </Box>
    );
  }
);
