import React, { ReactNode } from 'react';

import { Color } from '~/types';
import { cx, polymorphicForwardRef } from '~/utils';

import { StyleSystemProps } from '../../types';
import { Box } from '../Box';
import { FocusRing } from '../FocusRing';

// React.ComponentPropsWithoutRef<'input'> &
export type InputProps = StyleSystemProps & {
  /**
   * Defines input appearance
   */
  variant?: 'unstyled' | 'default' | 'filled';

  /**
   * Render a pointer instead of a caret when
   * the mouse cursor is over the input
   */
  pointer?: boolean;

  /**
   * Content to display on the left hand side of the input
   */
  leftContent?: ReactNode;

  /**
   * Width of the left content.
   * This allows us to define input content padding
   */
  leftWidth?: number;

  /**
   * Content to display on the right hand side of the input
   */
  rightContent?: ReactNode;

  /**
   * Width of the right content.
   * This allows us to define input content padding
   */
  rightWidth?: number;

  /**
   * Whether keyboard focus should be visible.
   */
  isFocusVisible?: boolean;
};

/**
 * Slot renderer for a text input.
 *
 * ## 🛑 Disclaimer
 *
 * In most cases, you should not use this component in your application.
 * This is a component that is solely responsible for rendering states
 * and does not meet accessibility requirements alone.
 *
 * ## Accessibility
 * - Requires `aria-invalid` to be set to visually represent an invalid state.
 *
 * ## Differences from BUX
 * - Focus outline is outside the main border. In BUX it is difficult to
 *  visually determine whether a field with an error has keyboard focus.
 * - Contrast has been increased for placeholder text to meet minimum WCAG AA.
 * - Disabled state does not perform the same grey-boxing.
 *
 * <!-- @ruiPolymorphic -->
 */
export const Input = polymorphicForwardRef<'input', InputProps>(
  (
    {
      as,
      className,
      style,

      variant = 'default',
      pointer,
      isFocusVisible,

      leftContent,
      leftWidth,

      rightContent,
      rightWidth,

      ...inputProps
    },
    ref
  ) => {
    const { disabled, readOnly, 'aria-invalid': invalid } = inputProps;

    return (
      <Box
        className={cx(
          'rui-relative'
          // 'rui-outline rui-outline-2 rui-outline-black',
        )}
      >
        {leftContent && (
          <div className="rui-absolute rui-left-0 rui-top-0 rui-bottom-0">{leftContent}</div>
        )}

        <FocusRing>
          <Box
            as={as || 'input'}
            ref={ref}
            style={{
              paddingLeft: leftWidth,
              paddingRight: rightWidth
            }}
            px="xs"
            py="xxs"
            w="100%"
            bgc={{
              dark: {
                default: 'light-tint',
                filled: 'light-shade',
                unstyled: undefined
              }[variant] as Color,

              light: {
                default: 'light-tint',
                filled: 'light-shade',
                unstyled: undefined
              }[variant] as Color
            }}
            className={cx(
              'rui-border-2 rui-text-light-contrast',

              // Variants
              {
                'rui-cursor-pointer': pointer,
                'rui-border-light-shade': variant !== 'unstyled',
                'rui-border-clear': variant === 'unstyled'
              },

              // Invalid
              { 'rui-border-error': invalid },

              // Disabled
              { 'rui-border-dimmed rui-bg-light-shade rui-cursor-not-allowed': disabled }
            )}
            {...inputProps}
          />
        </FocusRing>

        {rightContent && (
          <div className="rui-absolute rui-right-0 rui-top-0 rui-bottom-0">{rightContent}</div>
        )}
      </Box>
    );
  }
);
