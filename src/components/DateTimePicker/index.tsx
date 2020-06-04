
import React, { useState } from 'react';

// @ts-ignore
import RDatePicker from 'react-datepicker';
import TimeField from '../TimeField';

type Props = {
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
 * Provides a date picker and time input for a datetime field.
 *
 * This is a wrapper around [react-datepicker](https://reactdatepicker.com) and [TimeField](#timefield).
 * 
 * For Date-only fields, use [DatePicker](#datepicker).
 * For Time-only fields, use [TimeField](#timefield).
 */
const DateTimePicker: React.FC<Props> = ({
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
        <div className="input-group datetimepicker">
            <span className="input-group-prefix">
                <i className='fa fa-calendar' aria-hidden="true"></i>
                <i className='fa fa-clock-o' aria-hidden="true"></i>
            </span>

            <RDatePicker
                id={id}
                selected={date}
                className={'form-control datetime ' + (className ? className : '')}
                onChange={handleChange}
                filterDate={filterDate}
                minDate={minDate}
                maxDate={maxDate}
                timeInputLabel={<label htmlFor={id + '-time'}>Time</label>}
                showTimeInput
                customTimeInput={<TimeField id={id + '-time'} />}
                dateFormat='MM/dd/yyyy h:mm aa'
                readOnly={readOnly}
                disabled={disabled}
            />
        </div>
    );
}

export default DateTimePicker;
