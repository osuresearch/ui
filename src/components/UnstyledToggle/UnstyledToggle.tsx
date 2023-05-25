import React, { forwardRef, useRef } from 'react';
import { AriaToggleButtonProps, mergeProps, useToggleButton } from 'react-aria';
import { useToggleState } from 'react-stately';

import { StyleSystemProps } from '../../types';
import { mergeRefs } from '../../utils';
import { Box } from '../Box';
import { FocusRing } from '../FocusRing';

// onChange is omitted to handle a conflict with react-aria
// See: https://github.com/adobe/react-spectrum/issues/1860#issuecomment-849833808

export type UnstyledToggleProps = StyleSystemProps &
  AriaToggleButtonProps & {
    /**
     * Button content
     */
    children?: React.ReactNode;
  };

/**
 * Unstyled toggle button
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
 */
export const UnstyledToggle = forwardRef<HTMLButtonElement, UnstyledToggleProps>((props, ref) => {
  const { children } = props;
  const buttonRef = useRef<HTMLButtonElement>(null);

  const state = useToggleState(props);
  const { buttonProps, isPressed } = useToggleButton(
    {
      ...props
    },
    state,
    buttonRef
  );

  return (
    <FocusRing>
      <Box
        as="button"
        ref={mergeRefs(ref, buttonRef)}
        {...buttonProps}
        {...mergeProps(props as UnstyledToggleProps, buttonProps)}
        data-active={isPressed}
      >
        {children}
      </Box>
    </FocusRing>
  );
});
