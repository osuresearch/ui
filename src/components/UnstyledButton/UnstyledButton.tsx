import { mergeProps } from '@react-aria/utils';
import React, { useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

import { StyleSystemProps } from '../../types';
import { mergeRefs, polymorphicForwardRef } from '../../utils';
import { Box } from '../Box';
import { FocusRing } from '../FocusRing';

// React.HTMLAttributes<HTMLElement> &
export type UnstyledButtonProps<T extends React.ElementType<any> = 'button'> = StyleSystemProps &
  AriaButtonProps<T> & {
    /**
     * Button content
     */
    children: React.ReactNode;
  };

/**
 * Unstyled polymorphic button
 *
 * ## 🛑 Disclaimer
 *
 * You should not use this component directly in your application.
 * Use one of the styled toggle components.
 *
 * ## Accessibility
 * - Wrapped by the `FocusRing` component for consistent focus
 *
 * <!-- @ruiPolymorphic -->
 */
export const UnstyledButton = polymorphicForwardRef<'button', UnstyledButtonProps>(
  ({ as, ...props }, ref) => {
    const { children } = props;
    const buttonRef = useRef<HTMLButtonElement>(null);
    const { buttonProps, isPressed } = useButton(
      {
        ...props,
        elementType: as
      },
      buttonRef
    );

    const { isDisabled, ...rest } = props;

    return (
      <FocusRing>
        <Box
          as={as || 'button'}
          ref={mergeRefs(ref, buttonRef)}
          {...mergeProps(rest as any, buttonProps)}
          data-active={isPressed}
          data-disabled={isDisabled}
        >
          {children}
        </Box>
      </FocusRing>
    );
  }
);
