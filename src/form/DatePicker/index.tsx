import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import {
    Label, LabelProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps
} from '../../internal/FormCommon/Components';

import Input, { InputProps } from './Input';

type Props = FormFieldProps<string> & {
    // Add your other top level props here.
    // foo: number
}

interface IDatePickerComposition {
    /**
     * Equivalent of `<label>`
     * 
     * * **Props**
     *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
     * 
     */
    Label: React.FC<LabelProps>

    /** Help text for the `<DatePicker>` */
    Help: React.FC<HelpProps>

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
    Input: React.FC<InputProps>

    /**
     * Provides instructions on how to resolve the validation 
     * error; will display when `error` is set in `<DatePicker>`
     */
    Error: React.FC<ErrorProps>

    /**
     * Feedback for when the set meets the validation rules; 
     * will display when `success` is set in `<DatePicker>`
     */
    Success: React.FC<SuccessProps>
}

export const Context = React.createContext<IFormFieldContext<string>>({
    bind: new NullFieldBind<string>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

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
const DatePicker: React.FC<Props> & IDatePickerComposition = ({
    // foo = 1
    children,
    ...props // everything else is of FormFieldProps<string>
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <Context.Provider value={{ bind, /* foo */ }}>
            {children}
        </Context.Provider>
    );
}

DatePicker.Input = Input;
DatePicker.Label = withFormContext<LabelProps>(Label, Context);
DatePicker.Help = withFormContext<HelpProps>(Help, Context);
DatePicker.Error = withFormContext<ErrorProps>(Error, Context);
DatePicker.Success = withFormContext<SuccessProps>(Success, Context);

export default DatePicker;