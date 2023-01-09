import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes, forwardRef, useRef } from 'react';
import { AriaTextFieldOptions, AriaTextFieldProps, mergeProps, useTextField } from 'react-aria';

import { AriaNecessityIndicator, StyleSystemProps } from '~/types';
import { cx, mergeRefs } from '~/utils';

import { Box } from '../Box';
import { FocusRing } from '../FocusRing';
import { InputField, InputFieldProps } from '../InputField';

export type TextFieldProps = AriaTextFieldProps & AriaNecessityIndicator;

type InputSlotProps = React.InputHTMLAttributes<HTMLInputElement> & DOMAttributes<FocusableElement>;

const TextInputSlot = forwardRef<HTMLInputElement, InputSlotProps>((props, ref) => (
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
      ref={mergeRefs(inputRef, ref)}
      inputSlot={TextInputSlot}
      labelProps={labelProps}
      inputProps={inputProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      {...props}
    />
  );
});
