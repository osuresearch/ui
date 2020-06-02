
import React, { useState, useEffect } from 'react';

// @ts-ignore
import RDatePicker from 'react-datepicker';

export interface Props {
    /**
     * Default value
     */
    defaultValue?: Date;

    /**
     * onChange handler (required) - a state setter for the parent component
     */
    onChange: (date: Date) => Function;

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
 * Provides a calendar date picker for a date field.
 *
 * This is a wrapper around [react-datepicker](https://reactdatepicker.com)
 * 
 * For Date & Time fields, use [DateTimePicker](#datetimepicker). 
 * For Time fields, use [TimeField](#timefield).
 */
const DatePicker: React.FC<Props> = ({ defaultValue, onChange, filterDate, minDate, maxDate, disabled }) => {
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        setDate(defaultValue);
    }, [defaultValue]);

    const handleChange = (newDate: Date) => {
        setDate(newDate);
        onChange(newDate);
    }

    return (
        <div className="input-group datepicker">
            <span className="input-group-prefix">
                <i className='fa fa-calendar' aria-hidden="true"></i>
            </span>

            <RDatePicker
                selected={date}
                className='form-control date'
                onChange={handleChange}
                filterDate={filterDate}
                minDate={minDate}
                maxDate={maxDate}
                dateFormat='MM/dd/yyyy'
                disabled={disabled}
            />
        </div>
    );
}

export default DatePicker;
