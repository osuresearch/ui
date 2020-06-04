/* eslint-disable jsx-a11y/no-redundant-roles */

import React, { useState, useEffect, useRef, memo } from 'react';

type Props = {
    /** Default time value (optional) - must be an hour:minutes string in 24h format  */
    defaultValue?: string;

    /** Explicit value (optional) - must be an hour:minutes string in 24h format */
    value?: string;

    /** 
     * Callback called when the time is updated. 
     * Returns the time in a 24h format, e.g. `14:05` 
     */
    onChange?(newValue: string): void;

    /** ID */
    id: string;

    /** className */
    className?: string;

    /** readonly (optional) - Makes the field readonly */
    readOnly?: boolean;

    /** required (optional) - Makes the form fields required */
    required?: boolean;
}

function addLeadingZero(value: string): string {
    return value.length === 1 ? "0" + value : value;
}

function getHourValue(value: string): string {
    if (!value.length) return '';

    const parts = value.split(':').map(Number);
    return addLeadingZero((parts[0] <= 12 ? parts[0] : parts[0] - 12).toString());
}

function getMinuteValue(value: string): string {
    if (!value.length) return '';

    const parts = value.split(':').map(Number);
    return addLeadingZero(parts[1].toString());
}

function getMeridiemValue(value: string): string {
    if (!value.length) return '';

    const parts = value.split(':').map(Number);
    return parts[0] < 12 ? 'AM' : 'PM';
}

/**
 * Provides a time input for a time field.
 *
 * This component replicates the `<input type='time' />` Firefox/Chrome element
 * to work in all browsers.
 * 
 * The component expects/returns an `hour:minutes` string in 24-hour time format.
 * 
 * For Date fields, use [DatePicker](#datepicker). 
 * For Datetime fields, use [DateTimePicker](#datetimepicker).
 * 
 * Still to-do: Allow minimum and maximum times
 */
const TimeField: React.FC<Props> = ({
    onChange,
    defaultValue = '',
    value = '',
    id,
    className,
    readOnly,
    required
}) => {
    const [hour, setHour] = useState<string>(getHourValue(defaultValue));
    const hourRef = useRef<HTMLInputElement>(null);
    const [minutes, setMinutes] = useState<string>(getMinuteValue(defaultValue));
    const minutesRef = useRef<HTMLInputElement>(null);
    const [amPm, setAmPm] = useState<string>(getMeridiemValue(defaultValue));
    const amPmRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const hourInt = parseInt(hour);
        const newTime = (amPm === 'AM' ? hourInt : (hourInt === 12) ? 12 : hourInt + 12).toString() + ':' + minutes;

        // Fire onChange handler IFF there's a time and the 
        // time does not differ from the driving `value` prop
        if (hour && minutes && amPm && newTime !== value && onChange) {
            onChange(newTime);
        }
    }, [hour, minutes, amPm, value, onChange]);

    // Detect when the parent component updates the controlling value
    // and update internal states - without firing onChange
    useEffect(() => {
        setHour(getHourValue(value));
        setMinutes(getMinuteValue(value))
        setAmPm(getMeridiemValue(value));
    }, [value]);

    // Select the input text
    const handleClick = (e: React.MouseEvent) => (e.target as HTMLInputElement).select();

    const handleKeyDown = (e: React.KeyboardEvent) => {
        const { key } = e;
        const { name, value, min, max, readOnly } = e.target as HTMLInputElement;

        /* Prevent non-numeric characters from being input for hour/minutes */
        if (key.length === 1 && /\D/.test(key) && name !== 'am-pm') {
            e.preventDefault();
            return;
        }

        switch (key) {
            /* Clear field on Delete/Backspace */
            case 'Delete':
            case 'Backspace':
                if (readOnly) { e.preventDefault(); return; }
                name === 'hour' && setHour('');
                name === 'minute' && setMinutes('');
                name === 'am-pm' && setAmPm('');
                break;
            case 'ArrowRight':
                // Hour To Minutes input
                if (name === 'hour') { minutesRef?.current?.select(); }
                // Minutes to AM/PM input
                if (name === 'minute') { amPmRef?.current?.select(); }
                // AM/PM to Hour input
                if (name === 'am-pm') { hourRef?.current?.select(); }
                break;
            case 'ArrowLeft':
                // Hour to AM/PM input
                if (name === 'hour') { amPmRef?.current?.select(); }
                // Minutes to Hour input
                if (name === 'minute') { hourRef?.current?.select(); }
                // AM/PM to Minutes input
                if (name === 'am-pm') { minutesRef?.current?.select(); }
                break;
            case 'ArrowDown':
                if (readOnly) { e.preventDefault(); return; }
                name === 'am-pm' && setAmPm(value === 'AM' ? 'PM' : 'AM');
                if (value <= min) {
                    name === 'hour' && setHour('12');
                    name === 'minute' && setMinutes('59');
                    e.preventDefault();
                }
                break;
            case 'ArrowUp':
                if (readOnly) { e.preventDefault(); return; }
                name === 'am-pm' && setAmPm(value === 'AM' ? 'PM' : 'AM');
                if (value === max || value === '') {
                    name === 'hour' && setHour('01');
                    name === 'minute' && setMinutes('00');
                    e.preventDefault();
                }
                break;
            case 'Home':
                // Spinbutton behavior: https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
                if (readOnly) { e.preventDefault(); return; }
                name === 'hour' && setHour('01');
                name === 'minute' && setMinutes('00');
                e.preventDefault();
                break;
            case 'End':
                // Spinbutton behavior: https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
                if (readOnly) { e.preventDefault(); return; }
                name === 'hour' && setHour('12');
                name === 'minute' && setMinutes('59');
                e.preventDefault();
                break;
            case 'a':
            case 'A':
                if (readOnly) { e.preventDefault(); return; }
                setAmPm('AM');
                break;
            case 'p':
            case 'P':
                if (readOnly) { e.preventDefault(); return; }
                setAmPm('PM');
                break;
            default:
                break;
        }
    }

    const handleKeyUp = (e: React.KeyboardEvent) => {
        /* Reselect value on arrow key up */
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') (e.target as HTMLInputElement).select();

        /* Set hour to 12 if the value is double zeros when the user tabs/arrows away from the field */
        if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'Tab') {
            hour === '00' && setHour('12');
        }
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        const { key } = e;
        const { name } = e.target as HTMLInputElement;

        /* Change input to next field when key is greater than the highest possible first digit of the hour/minute */
        if (name === "hour" && /[3-9]/.test(key)) {
            minutesRef?.current?.select();
        }
        if (name === 'minute' && /[6-9]/.test(key)) {
            amPmRef?.current?.select();
        }
    }

    const handleHourChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = addLeadingZero(e.target.value);

        if (value.length === 2) {
            /* Two-digit stepping */
            setHour(value);
        } else if (value.length > 2) {
            /* Two-digit typing, i.e. the value is going to be three digits */
            const intValue = parseInt(value);
            // Select the minutes input
            minutesRef?.current?.select();
            // Convert military time values to 12h time
            if (intValue >= 13 && intValue <= 23) {
                setAmPm('PM');
                setHour(addLeadingZero((intValue - 12).toString()));
            } else if (intValue === 0) {
                setHour('12');
            } else if (intValue <= 12) {
                // Standard time, 11 or 12
                setHour(value.slice(-2));
            } else if (intValue > 23) {
                // If someone inputs something like 29
                setHour('02');
            }
        }
    }

    const handleMinuteChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = addLeadingZero(e.target.value);

        if (value.length === 2) {
            /* Two-digit stepping */
            setMinutes(value);
        } else if (value.length > 2) {
            /* Two-digit typing, i.e. the value is going to be three digits */
            // Select AM/PM
            amPmRef?.current?.select();
            setMinutes(value.slice(-2));
        }
    }

    return (
        <div className={
            'time-field form-control ' +
            (className ? className : '') +
            (readOnly ? 'readonly' : '')
        }>
            <span className='fa fa-clock-o' aria-hidden='true'></span>
            <label>
                <span className='sr-only'>,,,Hour (HH)</span> {/** commas for short screen reader pause */}
                <input
                    ref={hourRef}
                    id={id}
                    type='number'
                    name='hour'
                    min='01'
                    max='12'
                    step='1'
                    placeholder='--'
                    role='textbox' // Linter is mad about this; it fixes VoiceOver bug
                    aria-describedby={'hours-description-' + id}
                    value={hour}
                    onClick={handleClick}
                    onKeyUp={handleKeyUp}
                    onKeyDown={handleKeyDown}
                    onKeyPress={handleKeyPress}
                    onChange={handleHourChange}
                    required={required}
                    readOnly={readOnly}
                />
            </label>
            <span>:</span>
            <input
                ref={minutesRef}
                id={id + '-minutes'}
                aria-label='Minutes (MM)'
                type='number'
                name='minute'
                min='00'
                max='59'
                step='1'
                placeholder='--'
                role='textbox' // Linter is mad about this; it fixes VoiceOver bug
                aria-describedby={'minutes-description-' + id}
                value={minutes}
                onClick={handleClick}
                onKeyUp={handleKeyUp}
                onKeyDown={handleKeyDown}
                onKeyPress={handleKeyPress}
                onChange={handleMinuteChange}
                required={required}
                readOnly={readOnly}
            />
            <input
                ref={amPmRef}
                id={id + '-meridiem'}
                aria-label='AM or PM'
                type='text'
                name='am-pm'
                placeholder='--'
                aria-describedby={'ampm-description-' + id}
                value={amPm}
                onClick={handleClick}
                onKeyUp={handleKeyUp}
                onKeyDown={handleKeyDown}
                required={required}
                readOnly={readOnly}
            />
            <div id={'hours-description-' + id} className='sr-only'>
                {readOnly && <span>This field is disabled. </span>}
                {!hour &&
                    <span>You have not yet selected an hour. </span>
                }
                {hour &&
                    <span>{hour} hour selected. </span>
                }
                {minutes &&
                    <span>{minutes} minutes selected. </span>
                }
                {amPm &&
                    <span>{amPm} selected. </span>
                }
                {!readOnly && <span>To increment the hour, press the up arrow. To decrement, press the down arrow. Tab or press the right arrow to move to the minutes selector.</span>}
            </div>
            <div id={'minutes-description-' + id} className='sr-only'>
                {readOnly && <span>This field is disabled. </span>}
                {!minutes &&
                    <span>You have not yet selected minutes. </span>
                }
                {minutes &&
                    <span>{minutes} minutes selected. </span>
                }
                {hour &&
                    <span>{hour} hour selected. </span>
                }
                {amPm &&
                    <span>{amPm} selected. </span>
                }
                {!readOnly && <span>To increment the minutes, press the up arrow. To decrement, press the down arrow. Tab or press the right arrow to move to the AM/PM selector. Press the left arrow to move to the hour selector.</span>}
            </div>
            <div id={'ampm-description-' + id} className='sr-only'>
                {readOnly && <span>This field is disabled. </span>}
                {!amPm &&
                    <span>You have not yet selected AM or PM. </span>
                }
                {amPm &&
                    <span>{amPm} selected. </span>
                }
                {hour &&
                    <span>{hour} hour selected. </span>
                }
                {minutes &&
                    <span>{minutes} minutes selected. </span>
                }
                {!readOnly && <span>To select {amPm === 'AM' ? 'PM' : 'AM'}, press the up or down arrow. Press the right arrow to return to the hour selector. Press the left arrow to return to the minutes selector.</span>}
            </div>
        </div>
    );
}

export default memo(TimeField);
