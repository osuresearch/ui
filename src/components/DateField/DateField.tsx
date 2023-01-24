import { GregorianCalendar } from '@internationalized/date';
import { DateValue } from '@react-types/datepicker';
import React, { forwardRef, useRef } from 'react';
import { AriaDatePickerProps, useDateField, useDateSegment, useLocale } from 'react-aria';
import { DateFieldState, DateSegment, useDateFieldState } from 'react-stately';

import { cx, mergeRefs } from '~/utils';

import { FormField, FormFieldBase } from '../FormField';
import { Group } from '../Group';
import { Text } from '../Text';
import { VisuallyHidden } from '../VisuallyHidden';

export type DateFieldProps = FormFieldBase<DateValue> &
  AriaDatePickerProps<DateValue> & {
    rows?: number;
  };

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

type SegmentProps = {
  segment: DateSegment;
  state: DateFieldState;
};

function Segment({ segment, state }: SegmentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { segmentProps } = useDateSegment(segment, state, ref);

  return (
    <Text
      {...segmentProps}
      ref={ref}
      ta="right"
      style={{
        ...segmentProps.style,
        minWidth: segment.maxValue != null ? String(segment.maxValue).length + 'ch' : undefined
      }}
      className={cx(
        'rui-box-content rui-tabular-nums',
        'rui-outline-none focus:rui-border-dark-shade',
        'rui-group',
        'focus:rui-bg-light-shade',
        {
          'rui-text-dimmed': !segment.isEditable
        }
      )}
    >
      {/* Always reserve space for the placeholder, to prevent layout shift when editing. */}
      <span
        aria-hidden="true"
        className={cx(
          'rui-block rui-w-full rui-text-center rui-italic',
          'rui-text-light-shade group-focus:rui-text-light-contrast'
        )}
        style={{
          visibility: segment.isPlaceholder ? 'visible' : 'hidden',
          height: segment.isPlaceholder ? undefined : 0,
          pointerEvents: 'none'
        }}
      >
        {segment.placeholder}
      </span>
      {segment.isPlaceholder ? '' : segment.text}
    </Text>
  );
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
export const DateField = forwardRef<HTMLDivElement, DateFieldProps>(({ rows, ...props }, ref) => {
  const inputRef = useRef<HTMLDivElement>(null);

  const { locale } = useLocale();
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar
  });

  const { labelProps, fieldProps, descriptionProps, errorMessageProps } = useDateField(
    props,
    state,
    inputRef
  );

  return (
    <FormField<DateValue>
      labelAs="span"
      labelProps={labelProps}
      descriptionProps={descriptionProps}
      errorMessageProps={errorMessageProps}
      {...props}
    >
      <Group
        {...fieldProps}
        ref={mergeRefs(ref, inputRef)}
        p="xs"
        gap="xxs"
        bgc="light-tint"
        className={cx(
          'rui-border-2 rui-border-light-shade',

          'focus-within:rui-border-dark-shade',
          { 'rui-border-dimmed rui-bg-light-shade': props.isDisabled },
          { 'rui-border-error': props.errorMessage }
        )}
      >
        {/* Hidden input for form submission support */}
        <VisuallyHidden>
          <input aria-hidden="true" name={props.name} type="text" value={state.value?.toString()} />
        </VisuallyHidden>

        {state.segments.map((segment, i) => (
          <Segment key={i} segment={segment} state={state} />
        ))}
      </Group>
    </FormField>
  );
});
