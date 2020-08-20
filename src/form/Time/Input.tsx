import React, { useState, useEffect, useRef, useContext } from 'react';
import { Context } from '.';

import { getHourValue, getMinuteValue, getMeridiemValue } from './helpers';

import HourInput from './HourInput';
import MinutesInput from './MinutesInput';
import MeridiemInput from './MeridiemInput';

import SRDescriptions from './SRDescriptions';

export interface InputProps {
    /** Default time value (optional) - must be an hour:minutes string in 24h format  */
    defaultValue?: string;

    /** Explicit value (optional) - must be an hour:minutes string in 24h format */
    value?: string;

    /** 
     * Callback called when the time is updated. 
     * Returns the time in a 24h format, e.g. `14:05` 
     */
    onChange?(newValue: string): void;

    /** className */
    className?: string;

    /** readonly (optional) - Makes the field readonly */
    readOnly?: boolean;

    /** 
     * ID - INTERNAL USE ONLY 
     * (for DateTimePicker compatability) 
     */
    id?: string;
}

export function Input({
    defaultValue,
    value,
    onChange,
    className,
    readOnly,
    id
}: InputProps) {
    const { bind } = useContext(Context);

    const [hour, setHour] = useState<string>(getHourValue(defaultValue));
    const [minutes, setMinutes] = useState<string>(getMinuteValue(defaultValue));
    const [meridiem, setMeridiem] = useState<string>(getMeridiemValue(defaultValue));

    const hourRef = useRef<HTMLInputElement>(null);
    const minutesRef = useRef<HTMLInputElement>(null);
    const meridiemRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const hourInt = parseInt(hour);
        const newTime = (meridiem === 'AM' ? hourInt : (hourInt === 12) ? 12 : hourInt + 12).toString() + ':' + minutes;

        // Fire onChange handler IFF there's a time and the 
        // time does not differ from the driving `value` prop
        if (hour && minutes && meridiem && newTime !== value && onChange) {
            onChange(newTime);
        }
    }, [hour, minutes, meridiem, value, onChange]);

    // Detect when the parent component updates the controlling value
    // and update internal states - without firing onChange
    useEffect(() => {
        if (value) {
            setHour(getHourValue(value));
            setMinutes(getMinuteValue(value))
            setMeridiem(getMeridiemValue(value));
        }
    }, [value]);

    // Select the input text
    const handleClick = (e: React.MouseEvent) => (e.target as HTMLInputElement).select();

    return (
        <div className={
            'time-field form-control ' +
            (className ? className : '') +
            (readOnly ? 'readonly' : '')
        }>
            <span className='fa fa-clock-o' aria-hidden='true'></span>

            <HourInput
                ref={hourRef}
                id={id || bind.id}
                hour={hour}
                setHour={setHour}
                setMeridiem={setMeridiem}
                handleClick={handleClick}
                minutesRef={minutesRef}
                meridiemRef={meridiemRef}
                readOnly={readOnly}
                required={bind.required}
            />

            <span>:</span>

            <MinutesInput
                ref={minutesRef}
                id={id || bind.id}
                minutes={minutes}
                setMinutes={setMinutes}
                handleClick={handleClick}
                hourRef={hourRef}
                meridiemRef={meridiemRef}
                readOnly={readOnly}
            />

            <MeridiemInput
                ref={meridiemRef}
                id={id || bind.id}
                meridiem={meridiem}
                setMeridiem={setMeridiem}
                handleClick={handleClick}
                hourRef={hourRef}
                minutesRef={minutesRef}
                readOnly={readOnly}
            />

            <SRDescriptions
                readOnly={readOnly}
                id={id || bind.id}
                hour={hour}
                minutes={minutes}
                meridiem={meridiem}
            />
        </div>
    )
}