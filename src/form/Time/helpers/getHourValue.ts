import { addLeadingZero } from '.';

export function getHourValue(value: string | undefined) {
    if (typeof (value) === 'undefined' || !value.length) {
        return '';
    }

    const parts = value.split(':').map(Number);
    return addLeadingZero((parts[0] <= 12 ? parts[0] : parts[0] - 12).toString());
}