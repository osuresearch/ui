/* eslint-disable jsx-a11y/no-redundant-roles */
import React from 'react';
import { addLeadingZero } from '../helpers';

interface Props {
    id?: string;
    minutes: string;
    setMinutes: (minutes: string) => void;
    handleClick: (e: React.MouseEvent) => void;
    hourRef?: React.RefObject<HTMLInputElement>;
    meridiemRef?: React.RefObject<HTMLInputElement>;
    readOnly?: boolean;
    required?: boolean;
    invalid?: boolean;
}

const MinutesInput = React.forwardRef<HTMLInputElement, Props>(({
    id,
    minutes,
    setMinutes,
    handleClick,
    hourRef,
    meridiemRef,
    readOnly,
    required,
    invalid
}, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        const { key } = e;
        const { value, min, max, readOnly } = e.target as HTMLInputElement;

        /* Prevent non-numeric characters from being input for hour/minutes */
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

                setMinutes('');
                break;
            case 'ArrowRight':
                // Minutes to AM/PM input
                meridiemRef?.current?.select();
                break;
            case 'ArrowLeft':
                // Minutes to Hour input
                hourRef?.current?.select();
                break;
            case 'ArrowDown':
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                if (value <= min) {
                    setMinutes('59');
                    e.preventDefault();
                }
                break;
            case 'ArrowUp':
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                if (value === max || value === '') {
                    setMinutes('00');
                    e.preventDefault();
                }
                break;
            case 'Home':
                // Spinbutton behavior: https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                setMinutes('00');
                e.preventDefault();
                break;
            case 'End':
                // Spinbutton behavior: https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                setMinutes('59');
                e.preventDefault();
                break;
            default:
                break;
        }
    }

    const handleKeyUp = (e: React.KeyboardEvent) => {
        /* Reselect value on arrow key up */
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') (e.target as HTMLInputElement).select();
    }

    const handleKeyPress = (e: React.KeyboardEvent) => {
        const { key } = e;

        /* Change input to next field when key is greater than the highest possible first digit of the minute */
        if (/[6-9]/.test(key)) {
            meridiemRef?.current?.select();
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
            meridiemRef?.current?.select();
            setMinutes(value.slice(-2));
        }
    }

    return (
        <input
            ref={ref}
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
            readOnly={readOnly}
            aria-required={required}
            aria-invalid={invalid}
        />
    )
});

export default MinutesInput;