import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes, forwardRef, useRef } from 'react';
import { AriaTextFieldOptions, AriaTextFieldProps, mergeProps, useTextField } from 'react-aria';

import { AriaNecessityIndicator, SlotType, StyleSystemProps } from '~/types';
import { cx, mergeRefs } from '~/utils';

import { Box } from '../Box';
import { FocusRing } from '../FocusRing';
import { InputField } from '../InputField';

export type TextFieldSlots = {
  leftSlot?: React.ReactElement;
  leftWidth?: number;
  rightSlot?: React.ReactElement;
  rightWidth?: number;
};

export type TextFieldProps = StyleSystemProps &
  AriaTextFieldProps &
  AriaNecessityIndicator &
  TextFieldSlots;

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
    <InputField
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      {...props}
    >
      <TextInputSlot ref={mergeRefs(inputRef, ref)} {...inputProps} />
    </InputField>
  );
});
