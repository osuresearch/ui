import React, { useState, useContext } from 'react';
import { Context } from '.';

// @ts-ignore
import DatePicker from 'react-datepicker';
import Time from '../Time';

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

    /**
     * Make field read only
     */
    readOnly?: boolean;

    disabled?: boolean;
}

export default function Input({
    defaultValue,
    onChange,
    filterDate,
    minDate,
    maxDate,
    className,
    readOnly,
    disabled
}: InputProps) {
    const { bind } = useContext(Context);

    const [date, setDate] = useState<Date | undefined>(defaultValue);

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

            <DatePicker
                id={bind.id}
                selected={date}
                className={'form-control datetime ' + (className ? className : '')}
                onChange={handleChange}
                filterDate={filterDate}
                minDate={minDate}
                maxDate={maxDate}
                showTimeInput
                timeInputLabel={<label htmlFor={`${bind.id}-time`}>Time</label>}
                customTimeInput={
                    <Time.Input id={`${bind.id}-time`} />
                }
                dateFormat='MM/dd/yyyy h:mm aa'
                readOnly={readOnly}
                disabled={disabled}
            />
        </div>
    )
}