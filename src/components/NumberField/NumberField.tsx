import { FocusableElement } from '@react-types/shared';
import React, { DOMAttributes, forwardRef, useRef } from 'react';
import {
  AriaTextFieldOptions,
  AriaTextFieldProps,
  mergeProps,
  useLocale,
  useNumberField,
  useTextField
} from 'react-aria';
import { NumberFieldStateOptions, useNumberFieldState } from 'react-stately';

import { AriaNecessityIndicator, SlotType, StyleSystemProps } from '~/types';
import { cx, mergeRefs } from '~/utils';

import { Box } from '../Box';
import { FocusRing } from '../FocusRing';
import { IconButton } from '../IconButton';
import { InputField } from '../InputField';
import { TextInputSlot } from '../TextField';

export type NumberFieldProps = StyleSystemProps & NumberFieldStateOptions & AriaNecessityIndicator;

/**
 * Number fields allow users to enter a number, and increment
 * or decrement the value using stepper buttons.
 *
 * <!-- @ruiAtomic Number -->
 */
export const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>((props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { locale } = useLocale();
  const state = useNumberFieldState({ ...props, locale });

  const {
    groupProps,
    labelProps,
    errorMessageProps,
    descriptionProps,
    inputProps,
    incrementButtonProps,
    decrementButtonProps
  } = useNumberField(props, state, inputRef);

  return (
    <InputField
      groupProps={groupProps}
      label={props.label}
      labelProps={labelProps}
      isRequired={props.isRequired}
      necessityIndicator={props.necessityIndicator}
      description={props.description}
      descriptionProps={descriptionProps}
      errorMessage={props.errorMessage}
      errorMessageProps={errorMessageProps}
    >
      <div className="rui-relative rui-w-full">
        <div className="rui-absolute rui-inset-[2px] rui-right-auto">
          <IconButton
            bgc="light"
            size={24}
            px="xs"
            h="100%"
            label="decrement"
            name="dash"
            {...decrementButtonProps}
          />
        </div>
        <TextInputSlot {...inputProps} px="xxl" ref={mergeRefs(inputRef, ref)} />
        <div className="rui-absolute rui-inset-[2px] rui-left-auto">
          <IconButton
            bgc="light"
            size={24}
            px="xs"
            h="100%"
            label="increment"
            name="plus"
            {...incrementButtonProps}
          />
        </div>
      </div>
    </InputField>
  );
});
