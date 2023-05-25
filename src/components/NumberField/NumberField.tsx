import { NumberFieldProps as BaseNumberFieldProps } from '@react-types/numberfield';
import React, { forwardRef, useRef } from 'react';
import { useLocale, useNumberField } from 'react-aria';
import { useNumberFieldState } from 'react-stately';

import { mergeRefs } from '../../utils';
import { FormField, FormFieldBase } from '../FormField';
import { IconButton } from '../IconButton';
import { Interactive } from '../Interactive';

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
      <div className="relative w-full">
        <input type="hidden" name={name} value={state.inputValue ? state.numberValue : ''} />

        <Interactive as="input"
          {...inputPropsWithoutName}
          pr="xxl"
          ref={mergeRefs(inputRef, ref)}
        />

        <div className="flex flex-col absolute inset-[2px] left-auto">
          <IconButton
            size={14}
            px="xs"
            h="50%"
            label="increment"
            iconProps={{ rotate: 270 }}
            name="chevron"
            {...incrementButtonProps}
          />
          <IconButton
            size={14}
            px="xs"
            h="50%"
            label="decrement"
            iconProps={{ rotate: 90 }}
            name="chevron"
            {...decrementButtonProps}
          />
        </div>
      </div>
    </FormField>
  );
});
