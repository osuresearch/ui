
import React, { useContext, useRef } from 'react';
import DatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { Context } from '..';

import dayjs from 'dayjs';

import { Diff } from '../../../internal/FormCommon/Utility/Diff';

import Time from '../../Time';

import DatePrefix from './DatePrefix';
import DateTimePrefix from './DateTimePrefix';
import Portal from './Portal';

// The following props are disabled due to not meeting accessibility standards
type DisabledReactDatePickerProps =
    'customTimeInput' | 'timeInputLabel' | 'disabledKeyboardNavigation'
    | 'showMonthYearPicker' | 'showMonthYearDropdown' | 'monthsShown'
    | 'withPortal' | 'showQuarterYearPicker' | 'showTimeSelect'
    | 'showTimeSelectOnly' | 'todayButton' | 'showYearPicker'
    | 'onChange' | 'selected'

export type InputProps = Omit<ReactDatePickerProps, DisabledReactDatePickerProps> & {
    /** The selected date - should be `YYYY-MM-DD` for dates and an ISO8601 string for datetimes **/
    value: string;

    /** Include time input in the calendar popup */
    showTimeInput?: boolean;

    /** Returns the updated date as `YYYY-MM-DD` for dates and ISO8601 for timestamps */
    onChange: (date: string) => void;
}

/**
 * Input and popup calendar to select a date (and optionally time).
 * 
 * This component will accept *most* props supported by [react-datepicker](https://reactdatepicker.com/)
 * with the exception of the following that fail to meet accessibility standards:
 * 
 * ```ts
 * type DisabledReactDatePickerProps = 
 * 'customTimeInput' | 'timeInputLabel' | 'disabledKeyboardNavigation'
 *  | 'showMonthYearPicker' | 'showMonthYearDropdown' | 'monthsShown'
 *  | 'withPortal' | 'showQuarterYearPicker' | 'showTimeSelect'
 *  | 'showTimeSelectOnly' | 'todayButton' | 'showYearPicker'
 *  ```
 * 
 * If you wish to use one of these, please submit a merge request with a patch that resolves the issues.
 */
const Input: React.FC<InputProps> = (props) => {
    const { bind } = useContext(Context);

    const selected: string | undefined = bind.value || props.value;

    const initial: string | undefined = bind.initialValue || undefined;

    const name = bind.name || props.name;
    const readOnly = bind.readOnly || props.readOnly;
    const required = bind.required || props.required;

    const classNames = `input-group ${props.showTimeInput && 'datetimepicker'} ${props.className ? props.className : ''} ${bind.error ? 'is-invalid' : ''} ${bind.success ? 'is-valid' : ''}`;

    const dateFormat = props.dateFormat || props.showTimeInput ? 'MM/dd/yyyy h:mm aa' : 'MM/dd/yyyy';

    // Transform selected date to appropriate return value
    const handleChange = (date: Date) => {
        // Default - return as `Y-m-d`, e.g. `2011-05-23`
        let newSelected = date ? dayjs(date).format('YYYY-MM-DD') : '';

        // If the time input is included, return it as an ISO8601 datetime string
        if (props.showTimeInput) {
            newSelected = date ? dayjs(date).toISOString() : '';
        }

        if (props.onChange) {
            props.onChange(newSelected);
        } else {
            bind.value = newSelected;
        }

        // Fire the blur event when a date is selected in the calendar and the calendar closes
        if (ref.current?.isCalendarOpen) {
            ref.current.setFocus();
        }
    };

    const ref = useRef<DatePicker>(null);

    const handleFocus = () => {
        if (ref) {
            // Add screen reader instructions onFocus. This
            // includes the instructions included in this
            // component, as well as any text in
            // `<DatePicker.Help>`
            // @ts-ignore
            ref.current?.input.setAttribute('aria-describedby', `sr-instructions ${bind.id}-help`);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent) => {
        // Close the Calendar popup on Tab if the user is 
        // focused in the input - this will NOT close the 
        // calendar when tabbing within the calendar, as 
        // that is how keyboard users navigate it
        // @ts-ignore
        if (e.key === 'Tab' && ref.current?.isCalendarOpen && ref.current?.state.focused) {
            ref.current.setOpen(false);
        }
    }

    const formatter = (timestamp: string | undefined) => {
        if (typeof (timestamp) === 'undefined') return undefined;

        let formatted = dayjs(timestamp).format('MM/DD/YYYY');
        if (props.showTimeInput) {
            formatted = dayjs(timestamp).format('MM/DD/YYYY hh:mm A');
        }
        return formatted;
    }

    if (bind.diff) {
        if (selected !== initial) {
            return (
                <Diff
                    removed={formatter(initial)}
                    added={formatter(selected)}
                />
            )
        }
    }



    return (
        <div className={classNames}>
            {!props.showTimeInput && <DatePrefix />}
            {props.showTimeInput && <DateTimePrefix />}

            <DatePicker
                ref={ref}
                {...props}
                id={bind.id}
                className={'form-control date'}
                value={undefined} // Ignores the passed-in value prop, or else the user cannot directly type data into the input
                selected={selected ? dayjs(selected).toDate() : null}
                onChange={handleChange}
                onFocus={handleFocus}
                onKeyDown={handleKeyDown}
                onBlur={props.onBlur}
                shouldCloseOnSelect={!props.showTimeInput}
                // @ts-ignore
                timeInputLabel={<label htmlFor={`${bind.id}-time`}>Time</label>}
                customTimeInput={
                    <Time.Input id={`${bind.id}-time`} />
                }
                popperContainer={({ children }) => <Portal>{children}</Portal>}
                dateFormat={dateFormat}
                readOnly={readOnly}
                autoComplete="off"
                aria-disabled={readOnly}
                aria-required={required}
                aria-invalid={bind.error ? true : false}
            >
                <div className='keyboard-notice'>
                    <small><em>Keyboard users: Exit this dialog with the <code>esc</code> key</em></small>
                </div>
                <div id='sr-instructions' className='sr-only'>
                    A calendar widget {props.showTimeInput && 'with a time input'} is open. To interact with the calendar, press the up or down arrow keys. {props.showTimeInput && 'To navigate to the time input, press the tab key.'} To exit, press the escape key,,
                </div>
            </DatePicker>
        </div>
    );
};

export default Input;
