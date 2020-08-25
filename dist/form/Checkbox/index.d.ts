import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { InputProps } from './Input';
import { ControlLabelProps, HelpProps, ErrorProps, SuccessProps } from '../../internal/FormCommon/Components';
declare type Props = FormFieldProps<boolean> & {};
interface ICheckboxComposition {
    /**
     * Equivalent of `<label>`
     *
     * * **Props**
     *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
    */
    Label: React.FC<ControlLabelProps>;
    /** Help text for the `Checkbox` */
    Help: React.FC<HelpProps>;
    /**
     * Equivalent of `<input type='checkbox'>`
     *
     * * **Props**
     *  * [`checkbox` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
     *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
     *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
    */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
    /**
     * (required if single `<Checkbox>` that requires validation)
     *
     * Provides instructions on how to resolve the validation
     * error; will display when `error` is set in `<Checkbox>`
    */
    Error: React.FC<ErrorProps>;
    /**
     * Feedback for when the set meets the validation rules;
     * will display when `success` is set in `<Checkbox>`
     */
    Success: React.FC<SuccessProps>;
}
export declare const Context: React.Context<IFormFieldContext<boolean>>;
/**
 * A single checkbox
 *
 * ### Subcomponents
 *
 * #### `<Checkbox.Input>` (required)
 * Equivalent of `<input type='checkbox'>`
 *
 * * **Props**
 *  * [`checkbox` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
 *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
 *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
 *
 *
 * #### `<Checkbox.Label>` (required)
 * Equivalent of `<label>`
 *
 * * **Props**
 *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 *
 *
 * #### `<Checkbox.Help>`
 * Help text for the `<Checkbox>`
 *
 *
 * #### `<Checkbox.Error>` (required if single `<Checkbox>` that requires validation)
 * Provides instructions on how to resolve the validation error;
 * will display when `error` is set in `<Checkbox>`
 *
 *
 * #### `<Checkbox.Success>`
 * Feedback for when the set meets the validation rules; will
 * display when `success` is set in `<Checkbox>`
 *
 */
declare const Checkbox: React.FC<Props> & ICheckboxComposition;
export default Checkbox;
//# sourceMappingURL=index.d.ts.map