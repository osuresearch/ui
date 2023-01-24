import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes, forwardRef, useRef } from 'react';
import { AriaTextFieldProps, mergeProps, useTextField } from 'react-aria';

import { StyleSystemProps } from '~/types';
import { cx, mergeRefs } from '~/utils';

import { Box } from '../Box';
import { FocusRing } from '../FocusRing';
import { FormField, FormFieldBase } from '../FormField';

export type TextFieldSlots = {
  /** Slot content to absolutely position to the left of the input */
  leftSlot?: React.ReactElement;

  /**
   * Additional padding in pixels to apply to the left side of the input.
   *
   * This should match up with content size + additional padding to make
   * room for the `leftSlot` content.
   */
  leftWidth?: number;

  /** Slot content to absolutely position to the right of the input */
  rightSlot?: React.ReactElement;

  /**
   * Additional padding in pixels to apply to the right side of the input.
   *
   * This should match up with content size + additional padding to make
   * room for the `rightSlot` content.
   */
  rightWidth?: number;
};

export type TextFieldProps = FormFieldBase & AriaTextFieldProps & TextFieldSlots;

type InputSlotProps = StyleSystemProps &
  React.InputHTMLAttributes<HTMLInputElement> &
  DOMAttributes<FocusableElement>;

export const TextInputSlot = forwardRef<HTMLInputElement, InputSlotProps>((props, ref) => (
  <FocusRing isTextInput={true}>
    <Box
      as="input"
      p="xs"
      bgc="light-tint"
      c="light-contrast"
      w="100%"
      className={cx(
        'rui-border-2 rui-border-light-shade',
        'focus:rui-border-dark-shade',
        { 'rui-border-dimmed rui-bg-light-shade': props.disabled },
        { 'rui-border-error': props['aria-invalid'] }
      )}
      {...props}
      ref={ref}
    />
  </FocusRing>
));

/**
 * Single line of text input
 *
 * <!-- @ruiAtomic Text -->
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField<'input'>(
    props,
    inputRef
  );

  return (
    <FormField
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      {...props}
    >
      <div className="rui-relative rui-w-full">
        {props.leftSlot && (
          <div className="rui-absolute rui-inset-[2px] rui-right-auto">{props.leftSlot}</div>
        )}

        <TextInputSlot
          ref={mergeRefs(inputRef, ref)}
          {...mergeProps(inputProps, {
            style: {
              paddingLeft: props.leftWidth,
              paddingRight: props.rightWidth
            }
          })}
        />

        {props.rightSlot && (
          <div className="rui-absolute rui-inset-[2px] rui-left-auto">{props.rightSlot}</div>
        )}
      </div>
    </FormField>
  );
});
