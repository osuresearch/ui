import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { ControlProps } from './Control';
import { OptionProps } from './Option';
import { LabelProps, HelpProps, ErrorProps, SuccessProps } from '../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string> & {};
interface ISelectComposition {
    /**
     * Equivalent of `<label>`
     */
    Label: React.FC<LabelProps>;
    /**
     * Help text for the `<Select>`
     */
    Help: React.FC<HelpProps>;
    /**
     * A control container for options (this is `<select>` in
     * native HTML)
     */
    Control: React.ForwardRefExoticComponent<ControlProps & React.RefAttributes<HTMLSelectElement>>;
    /**
     * An option nested in a `Select.Control` list (this is
     * `<option>` in native HTML)
     *  * **Props**
     *      * `value` (required)
     *      * Accepts [`<option>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
     */
    Option: React.FC<OptionProps>;
    /**
     * Provides instructions on how to resolve the validation
     * error; will display when `error` is set in `<Select>`
     */
    Error: React.FC<ErrorProps>;
    /**
     * Feedback for when the set meets the validation rules;
     * will display when `success` is set in `<Select>`
     */
    Success: React.FC<SuccessProps>;
}
export declare const Context: React.Context<IFormFieldContext<string>>;
/**
 * A styled Select drop-down component
 *
 * ### Subcomponents
 * #### `<Select.Label>` (required)
 * Equivalent of `<label>`
 *
 *  * **Props**
 *      * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 *
 *
 * #### `<Select.Control>` (required)
 * A control container for options (this is `<select>` in
 * native HTML)
 *
 *
 * #### `<Select.Option>` (required)
 * An option nested in a `<Select.Control>` (this is
 * `<option>` in native HTML)
 *  * **Props**
 *      * One of the following are required:
 *          * `value`
 *          * `optionsBind`
 *      * Accepts [`<option>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 *
 * #### `<Select.Help>`
 * Help text for the `<Select>`
 *
 *
 * #### `<Select.Error>` (required if component requires validation)
 * Provides instructions on how to resolve the validation error;
 * will display when `error` is set in `<Select>`
 *
 *
 * #### `<Select.Success>`
 * Feedback for when the set meets the validation rules; will
 * display when `success` is set in `<Select>`
 *
 */
declare const Select: React.FC<Props> & ISelectComposition;
export default Select;
//# sourceMappingURL=index.d.ts.map