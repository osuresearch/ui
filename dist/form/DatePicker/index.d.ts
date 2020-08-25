import React from 'react';
import { FormFieldProps, IFormFieldContext, RHFCustomElement } from '../../internal/FormCommon/types';
import { LabelProps, HelpProps, ErrorProps, SuccessProps } from '../../internal/FormCommon/Components';
import { InputProps } from './Input';
declare type Props = FormFieldProps<string> & {};
interface IDatePickerComposition {
    /**
     * Equivalent of `<label>`
     *
     * * **Props**
     *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
     *
     */
    Label: React.FC<LabelProps>;
    /** Help text for the `<DatePicker>` */
    Help: React.FC<HelpProps>;
    /**
     * * **Props**
     *  * `<DatePicker>` is a wrapper around [react-datepicker](https://reactdatepicker.com/). This component will accept *most* props supported by react-datepicker. See exceptions below this list
     *  * `defaultValue` – **must** be an ISO8601 timestamp string
     *  * `onChange` – Returns the date as an ISO8601 timestamp string
     *  * `showTimeInput` – Include a `<Time>` input field in the calendar popup
     *
     * * **Exceptions**
     *  * The following props are disabled due to not meeting accessibility standards:
     *      * `customTimeInput`, `timeInputLabel`, `disabledKeyboardNavigation`, `showMonthYearPicker`, `showMonthYearDropdown`, `monthsShown`, `withPortal`, `showQuarterYearPicker`, `showTimeSelect`, `showTimeSelectOnly`, `todayButton`, `showYearPicker`
     *  * `showMonthDropdown` and `showYearDropdown` MUST be used with `dropdownMode="select"` to meet accessibility requirements
     *  * If you wish to use one of these, please submit a merge request with a patch that resolves the issues.
     */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<RHFCustomElement>>;
    /**
     * Provides instructions on how to resolve the validation
     * error; will display when `error` is set in `<DatePicker>`
     */
    Error: React.FC<ErrorProps>;
    /**
     * Feedback for when the set meets the validation rules;
     * will display when `success` is set in `<DatePicker>`
     */
    Success: React.FC<SuccessProps>;
}
export declare const Context: React.Context<IFormFieldContext<string>>;
/**
 * Provides a date and (optional) time picker.
 *
  * ### Subcomponents
 *
 * #### `<DatePicker.Input>` (required)
 * * **Props**
 *  * `<DatePicker>` is a wrapper around [react-datepicker](https://reactdatepicker.com/). This component will accept *most* props supported by react-datepicker. See exceptions below this list
 *  * `defaultValue` – **must** be an ISO8601 timestamp string
 *  * `onChange` – Returns the date as an ISO8601 timestamp string
 *  * `showTimeInput` – Include a `<Time>` input field in the calendar popup
 *
 * * **Exceptions**
 *  * The following props are disabled due to not meeting accessibility standards:
 *      * `customTimeInput`, `timeInputLabel`, `disabledKeyboardNavigation`, `showMonthYearPicker`, `showMonthYearDropdown`, `monthsShown`, `withPortal`, `showQuarterYearPicker`, `showTimeSelect`, `showTimeSelectOnly`, `todayButton`, `showYearPicker`
 *  * `showMonthDropdown` and `showYearDropdown` MUST be used with `dropdownMode="select"` to meet accessibility requirements
 *  * If you wish to use one of these, please submit a merge request with a patch that resolves the issues.
 *
 *
 * #### `<DatePicker.Label>` (required)
 * Equivalent of `<label>`
 *
 * * **Props**
 *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 *
 *
 * #### `<DatePicker.Help>`
 * Help text for the `<DatePicker>`
 *
 *
 * #### `<DatePicker.Error>` (required if `<DatePicker>` requires validation)
 * Provides instructions on how to resolve the validation error;
 * will display when `error` is set in `<DatePicker>`
 *
 *
 * #### `<DatePicker.Success>`
 * Feedback for when the set meets the validation rules; will
 * display when `success` is set in `<DatePicker>`
 *
 */
declare const DatePicker: React.FC<Props> & IDatePickerComposition;
export default DatePicker;
//# sourceMappingURL=index.d.ts.map