import { addLeadingZero } from '.';

export function getMinuteValue(value: string | undefined) {
    if (typeof (value) === 'undefined' || !value.length) {
        return '';
    }

    const parts = value.split(':').map(Number);
    return addLeadingZero(parts[1].toString());
}