import { addLeadingZero } from '.';

export function getHourValue(value: string | undefined) {
    if (typeof (value) === 'undefined' || !value.length) {
        return '';
    }

    const hour = value.split(':').map(Number)[0];

    return addLeadingZero((hour > 12 ? hour - 12 : hour === 0 ? 12 : hour).toString());
}