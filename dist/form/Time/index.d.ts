import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { InputProps } from './Input';
import { LabelProps, HelpProps, ErrorProps, SuccessProps } from '../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string> & {};
interface ITimeComposition {
    /** Equivalent of `<label>` */
    Label: React.FC<LabelProps>;
    /** Help text for the `<Time>` */
    Help: React.FC<HelpProps>;
    /**
     * * **Props**
     *  * `defaultValue` – must be an hour:minutes string in 24h format
     *  * `value` – must be an hour:minutes string in 24h format
     *  * `onChange` – Returns the time in a 24h format, e.g. `14:05`
     */
    Input: React.FC<InputProps>;
    /**
     * Provides instructions on how to resolve the validation
     * error; will display when `error` is set in `<Time>`
     */
    Error: React.FC<ErrorProps>;
    /**
     * Feedback for when the set meets the validation rules;
     * will display when `success` is set in `<Time>`
     */
    Success: React.FC<SuccessProps>;
}
export declare const Context: React.Context<IFormFieldContext<string>>;
/**
 * Provides a time input.
 *
 * This component replicates the `<input type='time' />` Firefox/
 * Chrome element to work in all browsers.
 *
 * The component expects/returns an `hour:minutes` string in
 * 24-hour time format.
 *
 * ### Subcomponents
 *
 * #### `<Time.Input>` (required) *
 * * **Props**
 *  * `defaultValue` – must be an hour:minutes string in 24h format
 *  * `value` – must be an hour:minutes string in 24h format
 *  * `onChange` – Returns the time in a 24h format, e.g. `14:05`
 *
 *
 * #### `<Time.Label>` (required)
 * Equivalent of `<label>`
 *
 * * **Props**
 *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 *
 *
 * #### `<Time.Help>`
 * Help text for the `<Time>`
 *
 *
 * #### `<Time.Error>` (required if `<Time>` requires validation)
 * Provides instructions on how to resolve the validation error;
 * will display when `error` is set in `<Time>`
 *
 *
 * #### `<Time.Success>`
 * Feedback for when the set meets the validation rules; will
 * display when `success` is set in `<Time>`
 *
 */
declare const Time: React.FC<Props> & ITimeComposition;
export default Time;
//# sourceMappingURL=index.d.ts.map