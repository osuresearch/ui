
import React, { useState, useEffect } from 'react';

// @ts-ignore
import RDatePicker from 'react-datepicker';

export interface Props {
    /**
     * Default value
     */
    defaultValue?: Date;

    /**
     * Disable input
     */
    disabled?: boolean;
}

/**
 * Provides a time input for a time field.
 *
 * This is a wrapper around [react-datepicker](https://reactdatepicker.com)
 * 
 * For Date fields, use [DatePicker](#datepicker). 
 * For Datetime fields, use [DateTimePicker](#datetimepicker).
 */
const TimeField: React.FC<Props> = ({ label, defaultValue, disabled }) => {
    const [date, setDate] = useState<Date>();

    useEffect(() => {
        setDate(defaultValue);
    }, [defaultValue]);

    return (
        <div className="input-group oris-datetime">
            <span className="input-group-prefix">
                <i className='fa fa-clock-o' aria-hidden="true"></i>
            </span>
            <label htmlFor="another-time-input">Label</label>
            <input type="time" id="another-time-input" value="20:55" />
        </div>
    );
}

export default TimeField;
