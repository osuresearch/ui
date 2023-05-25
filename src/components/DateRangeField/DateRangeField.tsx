import { GregorianCalendar, parseDate } from '@internationalized/date';
import { DateValue } from '@react-types/datepicker';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { useDateField, useLocale } from 'react-aria';
import { useDateFieldState } from 'react-stately';

import { mergeRefs } from '../../utils';
import { FormField, FormFieldBase } from '../FormField';
import { Group } from '../Group';
import { VisuallyHidden } from '../VisuallyHidden';
import { DateFieldPropsConverted } from '../DateField'
import { Box } from '../Box';
import { DateSegment } from '../DateSegment';
import { Interactive } from '../Interactive';


export type DateRange = (string | undefined)[];

export type DateRangeFieldProps = FormFieldBase<DateRange>;

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
 *
 * <!-- @ruiAtomic Date -->
 * <!-- @ruiStatus In Development -->
 */
export const DateRangeField = forwardRef<HTMLDivElement, DateRangeFieldProps>((props, ref) => {
  const inputRefStart = useRef<HTMLDivElement>(null);

  const { defaultValue, value, onChange, ...restProps } = props;

  const convertedPropsStart = {
    defaultValue: defaultValue && defaultValue[0] ? parseDate(defaultValue[0]) : undefined,
    value: value && value[0] ? parseDate(value[0]) : undefined,
    onChange: (value: DateValue | undefined) => onChange && onChange((value || stateEnd?.value) ? [value?.toString(), stateEnd?.value?.toString()] : undefined)
  }

  const newPropsStart: DateFieldPropsConverted = {
    ...restProps,
    ...convertedPropsStart
  }

  const { locale } = useLocale();

  const stateStart = useDateFieldState({
    ...newPropsStart,
    locale,
    createCalendar
  });

  const { labelProps: labelPropsStart, fieldProps: fieldPropsStart, descriptionProps: descriptionPropsStart, errorMessageProps: errorMessagePropsStart } = useDateField(
    props,
    stateStart,
    inputRefStart
  );

  const inputRefEnd = useRef<HTMLDivElement>(null);

  const convertedPropsEnd = {
    defaultValue: defaultValue && defaultValue[1] ? parseDate(defaultValue[1]) : undefined,
    value: value && value[1] ? parseDate(value[1]) : undefined,
    onChange: (value: DateValue | undefined) => onChange && onChange((stateStart?.value || value) ? [stateStart?.value?.toString(), value?.toString()] : undefined)
  }

  const newPropsEnd: DateFieldPropsConverted = {
    ...restProps,
    ...convertedPropsEnd
  }

  const stateEnd = useDateFieldState({
    ...newPropsEnd,
    locale,
    createCalendar
  });

  // TODO: add the props to the component for accessibility if needed
  const { labelProps: labelPropsEnd, fieldProps: fieldPropsEnd, descriptionProps: descriptionPropsEnd, errorMessageProps: errorMessagePropsEnd } = useDateField(
    props,
    stateEnd,
    inputRefEnd
  );

  // ----------Below is functions for displaying "Anytime" as a placeholder for undefined fields----------
  const [showStartInput, setShowStartInput] = useState<boolean>(false);

  const [showEndInput, setShowEndInput] = useState<boolean>(false);

  // Exit editing the field when clicking the outside of the DateRangeField component
  useEffect(() => {
    // TODO: Fix this logic. This assumes a single date range field exists on the page.
    // (and should really be more React-y anyway)
    const clickOutside = (event: { target: any; }) => {
      if (!document.getElementsByClassName('date-range-field-input')[0].contains(event.target)) {
        setShowStartInput(false);
        setShowEndInput(false);
      }
    };
    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, []);

  function editDate(side: string) {
    if (side === 'start') {
      setShowStartInput(true);
    }
    else {
      setShowEndInput(true);
    }
  }

  return (
    <FormField<DateRange>
      labelAs="span"
      labelProps={labelPropsStart}
      descriptionProps={descriptionPropsStart}
      errorMessageProps={errorMessagePropsStart}
      {...props}
    >
      <Interactive as={Group}
        ref={mergeRefs(ref, inputRefStart)}
        {...fieldPropsStart}
        p="xs"
        gap="xxs"
      >
        {/* Hidden input for form submission support */}
        <VisuallyHidden>
          <input
            name={props.name}
            type="text"
            value={(stateStart?.value || stateEnd?.value)
              ? [stateStart?.value?.toString(), stateEnd?.value?.toString()]
              : ''
            }
          />
        </VisuallyHidden>

        {(stateStart.value || showStartInput)
          ? stateStart.segments.map((segment, i) => (
            <DateSegment key={i} segment={segment} state={stateStart} />
          ))
          : <Box
              hidden={showStartInput}
              onClick={() => editDate('start')}
              className='text-gray-neutral-subtle'
            >Anytime</Box>
        }

        <div>→</div>

        {(stateEnd.value || showEndInput)
          ? stateEnd.segments.map((segment, i) => (
            <DateSegment key={i} segment={segment} state={stateEnd} />
          ))
          : <Box
              hidden={showEndInput}
              onClick={() => editDate('end')}
              className='text-gray-neutral-subtle'
            >Anytime</Box>
        }
      </Interactive>
    </FormField>
  );
});
