import React from 'react';
export interface Props {
    /**
     * Default value
     */
    defaultValue?: Date;
    /**
     * onChange handler (required) - a state setter for the parent component
     */
    onChange: (date: Date) => Function;
    /**
     * Apply a filter function to disallow certain dates
     */
    filterDate?(date: Date): boolean;
    /**
     * Minimum selectable date
     */
    minDate?: Date;
    /**
     * Maximum selectable date
     */
    maxDate?: Date;
    /**
     * ID
     */
    id: string;
    /**
     * Additional classes to append to field
     */
    className?: string;
    /**
     * Make field read only
     */
    readOnly?: boolean;
    /**
     * Disable field
     */
    disabled?: boolean;
}
/**
 * Provides a calendar date picker for a date field.
 *
 * This is a wrapper around [react-datepicker](https://reactdatepicker.com)
 *
 * For Date & Time fields, use [DateTimePicker](#datetimepicker).
 * For Time fields, use [TimeField](#timefield).
 */
declare const DatePicker: React.FC<Props>;
export default DatePicker;
//# sourceMappingURL=index.d.ts.map