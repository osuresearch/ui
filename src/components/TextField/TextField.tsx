import React, { forwardRef, useRef } from 'react';
import { AriaTextFieldProps, mergeProps, useTextField } from 'react-aria';

import { mergeRefs } from '../../utils';
import { FormField, FormFieldBase } from '../FormField';
import { Interactive } from '../Interactive';

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

export type TextFieldProps = FormFieldBase<string> & AriaTextFieldProps & TextFieldSlots;

/**
 * Single line of text input
 *
 * <!-- @ruiAtomic Text -->
 */
export const TextField = forwardRef<HTMLInputElement, TextFieldProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { labelProps, inputProps, descriptionProps, errorMessageProps } = useTextField<'input'>(
    {
      'aria-label': '',
      ...props,
    },
    inputRef
  );

  return (
    <FormField
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      {...props}
    >
      <div className="relative w-full">
        {props.leftSlot && (
          <div className="absolute inset-[2px] right-auto">{props.leftSlot}</div>
        )}

        <Interactive as="input"
          isTextInput
          ref={mergeRefs(inputRef, ref)}
          {...mergeProps(inputProps, {
            style: {
              paddingLeft: props.leftWidth,
              paddingRight: props.rightWidth
            }
          })}
        />

        {props.rightSlot && (
          <div className="absolute inset-[2px] left-auto">{props.rightSlot}</div>
        )}
      </div>
    </FormField>
  );
});
