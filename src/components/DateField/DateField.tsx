import { GregorianCalendar, parseDate } from '@internationalized/date';
import { DateValue } from '@react-types/datepicker';
import React, { forwardRef, useRef } from 'react';
import { AriaDatePickerProps, useDateField, useLocale } from 'react-aria';
import { useDateFieldState } from 'react-stately';

import { mergeRefs } from '../../utils';
import { FormField, FormFieldBase } from '../FormField';
import { Group } from '../Group';
import { Interactive } from '../Interactive';
import { DateSegment } from '../DateSegment';

export type DateFieldProps = FormFieldBase<string>;

export type DateFieldPropsConverted = FormFieldBase<DateValue> & AriaDatePickerProps<DateValue>;

// We only support the gregorian calendar to reduce bundle size.
// For more info, see React Aria's docs:
// https://react-spectrum.adobe.com/react-aria/useDateField.html#reducing-bundle-size
function createCalendar(name: string) {
  switch (name) {
    case 'gregory':
      return new GregorianCalendar();
    default:
      throw new Error(`Unsupported calendar ${name}`);
  }
}

/**
 * A date field allows users to enter and edit date and time
 * values using a keyboard. Each part of a date value is
 * displayed in an individually editable segment.
 *
 * ## Accessibility
 *
 * - Each date and time unit is displayed as an individually
 * focusable and editable segment, which allows users an easy
 * way to edit dates using the keyboard, in any date format and locale.
 * - Date segments are editable using an easy to use numeric keypad,
 * and all interactions are accessible using touch-based screen readers.
 *
 * <!-- @ruiAtomic Date -->
 */
export const DateField = forwardRef<HTMLDivElement, DateFieldProps>((props, ref) => {
  const inputRef = useRef<HTMLDivElement>(null);

  const { defaultValue, value, onChange, ...restProps } = props;

  const { locale } = useLocale();

  const state = useDateFieldState({
    locale,
    createCalendar,

    // TODO: Outstanding issue regarding controlled inputs and nullifying
    // the current value. See: https://github.com/adobe/react-spectrum/issues/3187
    defaultValue: defaultValue ? parseDate(defaultValue) : undefined,
    value: value ? parseDate(value) : undefined,
    onChange: (value?: DateValue) => onChange && onChange(value?.toString()),

    ...restProps,
  });

  const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useDateField(
    props,
    state,
    inputRef
  );

  return (
    <FormField<string>
      labelAs="span"
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      {...props}
    >
      <>
        <input name={props.name} type="hidden" value={state.value?.toString() ?? ''} />
        <Interactive as={Group}
          gap="xxs"
          ref={mergeRefs(ref, inputRef)}
          {...fieldProps}
          aria-invalid={state.validationState === "invalid"}
          disabled={state.isDisabled}
        >
          {state.segments.map((segment, i) => (
            <DateSegment key={i} segment={segment} state={state} />
          ))}
        </Interactive>
      </>
    </FormField>
  );
});
