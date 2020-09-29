import React from 'react';
import { ReactDatePickerProps } from 'react-datepicker';
declare type DisabledReactDatePickerProps = 'customTimeInput' | 'timeInputLabel' | 'disabledKeyboardNavigation' | 'showMonthYearPicker' | 'showMonthYearDropdown' | 'monthsShown' | 'withPortal' | 'showQuarterYearPicker' | 'showTimeSelect' | 'showTimeSelectOnly' | 'todayButton' | 'showYearPicker' | 'onChange' | 'selected';
export declare type InputProps = Omit<ReactDatePickerProps, DisabledReactDatePickerProps> & {
    /** The selected date - should be `YYYY-MM-DD` for dates and an ISO8601 string for datetimes **/
    value: string;
    /** Include time input in the calendar popup */
    showTimeInput?: boolean;
    /** Returns the updated date as `YYYY-MM-DD` for dates and ISO8601 for timestamps */
    onChange: (date: string) => void;
};
/**
 * Input and popup calendar to select a date (and optionally time).
 *
 * This component will accept *most* props supported by [react-datepicker](https://reactdatepicker.com/)
 * with the exception of the following that fail to meet accessibility standards:
 *
 * ```ts
 * type DisabledReactDatePickerProps =
 * 'customTimeInput' | 'timeInputLabel' | 'disabledKeyboardNavigation'
 *  | 'showMonthYearPicker' | 'showMonthYearDropdown' | 'monthsShown'
 *  | 'withPortal' | 'showQuarterYearPicker' | 'showTimeSelect'
 *  | 'showTimeSelectOnly' | 'todayButton' | 'showYearPicker'
 *  ```
 *
 * If you wish to use one of these, please submit a merge request with a patch that resolves the issues.
 */
declare const Input: React.FC<InputProps>;
export default Input;
//# sourceMappingURL=index.d.ts.map