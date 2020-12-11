export function addLeadingZero(value: string): string {
    return value.length === 1 ? "0" + value : value;
}