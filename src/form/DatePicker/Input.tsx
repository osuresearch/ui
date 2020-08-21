
import React, { useState, useContext } from 'react';
import { Context } from '.';

// @ts-ignore
import DatePicker from 'react-datepicker';

export interface InputProps {
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
     * Additional classes to append to field
     */
    className?: string;

    disabled?: boolean;
}

const Input: React.FC<InputProps> = ({
    defaultValue = null,
    onChange,
    filterDate,
    minDate,
    maxDate,
    className,
    disabled
}) => {
    const { bind } = useContext(Context);

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

            <DatePicker
                id={bind.id}
                selected={date}
                className={'form-control date ' + (className ? className : '')}
                onChange={handleChange}
                filterDate={filterDate}
                minDate={minDate}
                maxDate={maxDate}
                dateFormat='MM/dd/yyyy'
                readOnly={bind.readOnly}
                disabled={disabled}
            >
                <div className='keyboard-notice'>
                    <small><em>Keyboard users: Exit this dialog with the <code>esc</code> key</em></small>
                </div>
            </DatePicker>
        </div>
    );
}

export default Input;
