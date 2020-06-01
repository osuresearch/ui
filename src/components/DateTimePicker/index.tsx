
import React, { useState, useEffect, } from 'react';

// @ts-ignore
import RDatePicker from 'react-datepicker';
import TimeField from '../TimeField';

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
 * This is a wrapper around [react-datepicker](https://reactdatepicker.com) and [TimeField](#timefield).
 * 
 * For Date-only fields, use [DatePicker](#datepicker).
 * For Time-only fields, use [TimeField](#timefield).
 */
const DateTimePicker: React.FC<Props> = ({ defaultValue, filterDate, minDate, maxDate, disabled }) => {
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        setDate(defaultValue);
    }, [defaultValue]);

    const TimeFieldWrapper = ({ value, onChange }) => {
        console.log(value);
        console.log(onChange);
        return (
            <TimeField
                label="Time:"
                value={value}
                defaultValue={value}
                onChange={onChange}
            />
        );
    };

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
                filterDate={filterDate}
                minDate={minDate}
                maxDate={maxDate}
                timeInputLabel=""
                showTimeInput
                customTimeInput={<TimeFieldWrapper />}
                dateFormat='MM/dd/yyyy h:mm aa'
                disabled={disabled}
            />
        </div>
    );
}

export default DateTimePicker;
