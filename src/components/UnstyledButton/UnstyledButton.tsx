import { mergeProps } from '@react-aria/utils';
import React, { useRef } from 'react';
import { AriaButtonProps, useButton } from 'react-aria';

import { StyleSystemProps } from '~/types';
import { cx, polymorphicForwardRef } from '~/utils';

import { Box } from '../Box';
import { FocusRing } from '../FocusRing';

export type UnstyledButtonProps = StyleSystemProps &
  React.HTMLAttributes<HTMLElement> &
  AriaButtonProps & {
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

    return (
      <FocusRing>
        <Box
          as={as || 'button'}
          ref={ref}
          {...mergeProps(props as any, buttonProps)}
          data-pressed={isPressed}
        >
          {children}
        </Box>
      </FocusRing>
    );
  }
);
