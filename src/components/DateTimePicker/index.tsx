
import React, { useState, useEffect, useRef } from 'react';

// @ts-ignore
import RDatePicker from 'react-datepicker';

export interface Props {
    /**
     * Default value
     */
    defaultValue?: Date;

    /**
     * Apply a filter function to disallow certain dates
     */
    filterDate?(date: Date): boolean;

    /**
     * Minimum selectable date
     */
    minDate?: Date;

    /**
     * Maximum selectable date
     */
    maxDate?: Date;

    /**
     * Disable field
     */
    disabled?: boolean;
}

/**
 * Provides a date picker and time input for a datetime field.
 *
 * This is a wrapper around [react-datepicker](https://reactdatepicker.com)
 * 
 * For Date-only fields, use [DatePicker](#datepicker). 
 * For Time-only fields, use [TimeField](#timefield).
 */
const DateTimePicker: React.FC<Props> = ({ defaultValue, filterDate, minDate, maxDate, disabled }) => {
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        setDate(defaultValue);
    }, [defaultValue]);

    const supportsTime = require('time-input-polyfill/supportsTime');
    const TimePolyfill = require('time-input-polyfill');

    const timeRef = useRef<HTMLInputElement>(null);

    const polyfillTime = () => {
        if (!supportsTime) {
            console.log(timeRef);
            if (!timeRef?.current?.hasAttribute('data-value')) {
                new TimePolyfill(timeRef?.current);
            }
        }
    }

    const TimeInput = ({ value, onChange }) => (
        <>
            <label htmlFor="mytime">My label</label>
            <input
                ref={timeRef}
                id="mytime"
                type="time"
                value={value}
                onChange={e => onChange(e.target.value)}
            />
        </>
    );

    return (
        <div className="input-group oris-datetimepickers">
            <span className="input-group-prefix">
                <i className='fa fa-calendar' aria-hidden="true"></i>
            </span>

            <RDatePicker
                selected={date}
                className='form-control datetime'
                onChange={(newDate: Date) => {
                    setDate(newDate);
                }}
                onBlur={polyfillTime}
                filterDate={filterDate}
                minDate={minDate}
                maxDate={maxDate}
                timeInputLabel="Time:"
                showTimeInput
                customTimeInput={<TimeInput />}
                dateFormat='MM/dd/yyyy h:mm aa'
                disabled={disabled}
            />
        </div>
    );
}

export default DateTimePicker;
