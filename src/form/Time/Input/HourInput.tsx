/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { addLeadingZero } from '../helpers';

interface Props {
    id?: string;
    hour: string;
    setHour: (hour: string) => void;
    setMeridiem: (meridiem: string) => void;
    handleClick: (e: React.MouseEvent) => void;
    minutesRef?: React.RefObject<HTMLInputElement>;
    meridiemRef?: React.RefObject<HTMLInputElement>;
    required?: boolean;
    readOnly?: boolean;
}

const HourInput = React.forwardRef<HTMLInputElement, Props>(({
    id,
    hour,
    setHour,
    setMeridiem,
    handleClick,
    minutesRef,
    meridiemRef,
    required,
    readOnly
}, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        const { key } = e;
        const { value, min, max, readOnly } = e.target as HTMLInputElement;

        /* Prevent non-numeric characters from being input */
        if (key.length === 1 && /\D/.test(key)) {
            e.preventDefault();
            return;
        }

        switch (key) {
            /* Clear field on Delete/Backspace */
            case 'Delete':
            case 'Backspace':
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                setHour('');
                break;
            case 'ArrowRight':
                minutesRef?.current?.select();
                break;
            case 'ArrowLeft':
                meridiemRef?.current?.select();
                break;
            case 'ArrowDown':
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                if (value <= min) {
                    setHour('12');
                    e.preventDefault();
                }
                break;
            case 'ArrowUp':
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                if (value === max || value === '') {
                    setHour('01');
                    e.preventDefault();
                }
                break;
            case 'Home':
                // Spinbutton behavior: https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                setHour('01');
                e.preventDefault();
                break;
            case 'End':
                // Spinbutton behavior: https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                setHour('12');
                e.preventDefault();
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

        /* Change input to next field when key is greater than the highest possible first digit of the hour/minute */
        if (/[3-9]/.test(key)) {
            minutesRef?.current?.select();
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
                setMeridiem('PM');
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

    return (
        <label>
            <span className='sr-only'>,,,Hour (HH)</span> {/* commas for short screen reader pause */}
            <input
                ref={ref}
                id={id}
                type='number'
                name='hour'
                min='01'
                max='12'
                step='1'
                placeholder='--'
                role='textbox' // Linter is mad about this; it fixes VoiceOver bug
                aria-describedby={`${id}-help hours-description-${id}`}
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
    )
});

export default HourInput;