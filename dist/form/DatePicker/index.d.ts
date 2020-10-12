import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { ICommonComposition } from '../../internal/FormCommon/Components';
import { InputProps } from './Input';
declare type Props = FormFieldProps<string> & {};
interface IDatePickerComposition extends ICommonComposition {
    /**
     * Wrapper around [react-datepicker](https://reactdatepicker.com/).
     *
     * This component will accept *most* props supported by react-datepicker
     * with the exception of the following for failing to meet accessibility standards:
     *
     * ```ts
     * type DisabledReactDatePickerProps =
     * 'customTimeInput' | 'timeInputLabel' | 'disabledKeyboardNavigation'
     *  | 'showMonthYearPicker' | 'showMonthYearDropdown' | 'monthsShown'
     *  | 'withPortal' | 'showQuarterYearPicker' | 'showTimeSelect'
     *  | 'showTimeSelectOnly' | 'todayButton' | 'showYearPicker'
     *  | 'onChange' | 'selected'
     *  ```
     *
     * If you wish to use one of these, please submit a merge request with a patch that resolves the issues.
     */
    Input: React.FC<InputProps>;
}
export declare const Context: React.Context<IFormFieldContext<string>>;
/**
 * Provides a date and (optional) time picker
 */
declare const DatePicker: React.FC<Props> & IDatePickerComposition;
export default DatePicker;
//# sourceMappingURL=index.d.ts.map