import React from 'react';
declare type Props = {
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
};
/**
 * Provides a date picker and time input for a datetime field.
 *
 * This is a wrapper around [react-datepicker](https://reactdatepicker.com) and [TimeField](#timefield).
 *
 * For Date-only fields, use [DatePicker](#datepicker).
 * For Time-only fields, use [TimeField](#timefield).
 */
declare const DateTimePicker: React.FC<Props>;
export default DateTimePicker;
//# sourceMappingURL=index.d.ts.map