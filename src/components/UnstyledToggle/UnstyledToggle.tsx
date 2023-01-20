import React, { useRef } from 'react';
import { AriaButtonProps, AriaToggleButtonProps, mergeProps, useToggleButton } from 'react-aria';
import { ToggleProps, useToggleState } from 'react-stately';

import { StyleSystemProps } from '~/types';
import { mergeRefs, polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';
import { FocusRing } from '../FocusRing';

// TODO: Deal with onChange conflict.
// See: https://github.com/adobe/react-spectrum/issues/1860#issuecomment-849833808
// (pertains specifically to RHF as well)

export type UnstyledToggleProps = StyleSystemProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> &
  AriaToggleButtonProps & {
    /**
     * Button content
     */
    children?: React.ReactNode;
  };

/**
 * Unstyled polymorphic toggle button
 *
 * ## 🛑 Disclaimer
 *
 * You should not use this component directly in your application.
 * Use one of the styled toggle components.
 *
 * ## Press Events
 *
 * Use the `onPress` handler in place of `onClick` to support a wider range
 * of input devices. For detailed information see [Adobe's blog post](https://react-spectrum.adobe.com/blog/building-a-button-part-1.html).
 *
 * A `data-active` attribute is available while the button is in a pressed state.
 * Use this instead of the CSS `:active` psuedo class to properly handle when
 * the user drags their pointer off the button, along with keyboard support
 * and better touchscreen support.
 *
 * ## Accessibility
 * - Wrapped by the `FocusRing` component for consistent focus
 * - Toggles `aria-pressed` on the root element
 *
 * <!-- @ruiPolymorphic -->
 */
export const UnstyledToggle = polymorphicForwardRef<'button', UnstyledToggleProps>(
  ({ as, ...props }, ref) => {
    const { children } = props;
    const buttonRef = useRef<HTMLButtonElement>(null);

    const state = useToggleState(props);
    const { buttonProps, isPressed } = useToggleButton(
      {
        ...props,
        elementType: as
      },
      state,
      buttonRef
    );

    return (
      <FocusRing>
        <Box
          as={as || 'button'}
          ref={mergeRefs(ref, buttonRef)}
          {...buttonProps}
          {...mergeProps(props as UnstyledToggleProps, buttonProps)}
          data-active={isPressed}
        >
          {children}
        </Box>
      </FocusRing>
    );
  }
);
