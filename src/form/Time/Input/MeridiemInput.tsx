import React from 'react';

interface Props {
    id?: string;
    meridiem: string;
    setMeridiem: (meridiem: string) => void;
    handleClick: (e: React.MouseEvent) => void;
    hourRef?: React.RefObject<HTMLInputElement>;
    minutesRef?: React.RefObject<HTMLInputElement>;
    readOnly?: boolean;
}

const MeridiemInput = React.forwardRef<HTMLInputElement, Props>(({
    id,
    meridiem,
    setMeridiem,
    handleClick,
    hourRef,
    minutesRef,
    readOnly
}, ref) => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
        const { key } = e;
        const { value, readOnly } = e.target as HTMLInputElement;

        switch (key) {
            /* Clear field on Delete/Backspace */
            case 'Delete':
            case 'Backspace':
                if (readOnly) {
                    e.preventDefault();
                    return;
                }
                setMeridiem('');
                break;
            case 'ArrowRight':
                // AM/PM to Hour input
                hourRef?.current?.select();
                break;
            case 'ArrowLeft':
                // AM/PM to Minutes input
                minutesRef?.current?.select();
                break;
            case 'ArrowDown':
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                setMeridiem(value === 'AM' ? 'PM' : 'AM');
                break;
            case 'ArrowUp':
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                setMeridiem(value === 'AM' ? 'PM' : 'AM');
                break;
            case 'a':
            case 'A':
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                setMeridiem('AM');
                break;
            case 'p':
            case 'P':
                if (readOnly) {
                    e.preventDefault();
                    return;
                }

                setMeridiem('PM');
                break;
            default:
                break;
        }
    }

    const handleKeyUp = (e: React.KeyboardEvent) => {
        /* Reselect value on arrow key up */
        if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') (e.target as HTMLInputElement).select();
    }

    return (
        <input
            ref={ref}
            id={id + '-meridiem'}
            aria-label='AM or PM'
            type='text'
            name='am-pm'
            placeholder='--'
            aria-describedby={'meridiem-description-' + id}
            value={meridiem}
            onClick={handleClick}
            onKeyUp={handleKeyUp}
            onKeyDown={handleKeyDown}
            onChange={() => { }} // Surpress console warning - handleKeyDown sets the meridian value
            readOnly={readOnly}
        />
    )
});

export default MeridiemInput;