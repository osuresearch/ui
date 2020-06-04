
import React, { useState } from 'react';

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
     * ID
     */
    id: string;

    /**
     * Additional classes to append to field
     */
    className?: string;

    /**
     * Make field read only
     */
    readOnly?: boolean;

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
const DatePicker: React.FC<Props> = ({
    defaultValue = null,
    onChange,
    filterDate,
    minDate,
    maxDate,
    id,
    className,
    readOnly,
    disabled
}) => {
    const [date, setDate] = useState<Date | null>(defaultValue);

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
                id={id}
                selected={date}
                className={'form-control date ' + (className ? className : '')}
                onChange={handleChange}
                filterDate={filterDate}
                minDate={minDate}
                maxDate={maxDate}
                dateFormat='MM/dd/yyyy'
                readOnly={readOnly}
                disabled={disabled}
            />
        </div>
    );
}

export default DatePicker;
