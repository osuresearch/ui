export function getMeridiemValue(value: string | undefined) {
    if (typeof (value) === 'undefined' || !value.length) {
        return '';
    }

    const parts = value.split(':').map(Number);
    return parts[0] < 12 ? 'AM' : 'PM';
}