import { NumberFieldProps as BaseNumberFieldProps } from '@react-types/numberfield';
import React, { forwardRef, useRef } from 'react';
import { useLocale, useNumberField } from 'react-aria';
import { useNumberFieldState } from 'react-stately';

import { mergeRefs } from '../../utils';
import { FormField, FormFieldBase } from '../FormField';
import { IconButton } from '../IconButton';
import { TextInputSlot } from '../TextField';

export type NumberFieldProps = FormFieldBase<number> & BaseNumberFieldProps;

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

  const { name, ...inputPropsWithoutName } = inputProps;

  return (
    <FormField
      wrapperProps={groupProps}
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      {...props}
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
        <input type="hidden" name={name} value={state.inputValue ? state.numberValue : ''} />
        <TextInputSlot {...inputPropsWithoutName} px="xxl" ref={mergeRefs(inputRef, ref)} />
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
    </FormField>
  );
});
