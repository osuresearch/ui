import { GregorianCalendar, parseDate } from '@internationalized/date';
import { DateValue } from '@react-types/datepicker';
import React, { forwardRef, useEffect, useRef, useState } from 'react';
import { AriaDatePickerProps, useDateField, useDateSegment, useLocale } from 'react-aria';
import { DateFieldState, DateSegment, useDateFieldState } from 'react-stately';

import { cx, mergeRefs } from '../../utils';
import { FormField, FormFieldBase } from '../FormField';
import { Group } from '../Group';
import { Text } from '../Text';
import { VisuallyHidden } from '../VisuallyHidden';
import { DateFieldPropsConverted } from '../DateField'
import { Box } from '../Box';

export type DateRangeFieldProps = FormFieldBase<(string | undefined)[] | undefined>;

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
        const clickOutside = (event: { target: any; }) => {
            if (!document.getElementsByClassName('date-range-input')[0].contains(event.target)) {
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
        < FormField<(string | undefined)[] | undefined>
            labelAs="span"
            labelProps={labelPropsStart}
            descriptionProps={descriptionPropsStart}
            errorMessageProps={errorMessagePropsStart}
            {...props}
        >
            <Group
                {...fieldPropsStart}
                ref={mergeRefs(ref, inputRefStart)}
                p="xs"
                gap="xxs"
                bgc="light-tint"
                className={cx(
                    'rui-border-2 rui-border-light-shade',
                    'focus-within:rui-border-dark-shade',
                    'rui-w-3/4',
                    { 'rui-border-dimmed rui-bg-light-shade': props.isDisabled },
                    { 'rui-border-error': props.errorMessage },
                    'date-range-input'
                )}
            >
                {/* Hidden input for form submission support */}
                <VisuallyHidden>
                    <input aria-hidden="true" name={props.name} type="text" value={(stateStart?.value || stateEnd?.value) ? [stateStart?.value?.toString(), stateEnd?.value?.toString()] : ''} />
                </VisuallyHidden>

                {(stateStart.value || showStartInput) ?
                    stateStart.segments.map((segment, i) => (
                        <Segment key={i} segment={segment} state={stateStart} />
                    ))
                    :
                    <Box hidden={showStartInput} onClick={() => editDate('start')} className={cx(
                        'rui-block rui-w-full rui-text-center',
                        'rui-text-gray-shade-40 group-focus:rui-text-light-contrast'
                    )}>Anytime</Box>
                }

                <div>→</div>

                {(stateEnd.value || showEndInput) ?
                    stateEnd.segments.map((segment, i) => (
                        <Segment key={i} segment={segment} state={stateEnd} />
                    ))
                    :
                    <Box hidden={showEndInput} onClick={() => editDate('end')} className={cx(
                        'rui-block rui-w-full rui-text-center',
                        'rui-text-gray-shade-40 group-focus:rui-text-light-contrast'
                    )}>Anytime</Box>
                }
            </Group>
        </FormField >
    );
});