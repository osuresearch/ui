import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { InputProps } from './Input';
import { LabelProps, HelpProps, ErrorProps, SuccessProps } from '../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string> & {};
interface INumberComposition {
    /** Equivalent of `<label>` */
    Label: React.FC<LabelProps>;
    /** Equivalent of `<input type='text'>` */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
    /** Help text for the `<Number>` */
    Help: React.FC<HelpProps>;
    /**
     * (required if `<Number>` requires validation)
     * Provides instructions on how to resolve the validation
     * error; will display when `error` is set in `<Number>`
     */
    Error: React.FC<ErrorProps>;
    /**
     * Feedback for when the set meets the validation rules;
     * will display when `success` is set in `<Number>`
     */
    Success: React.FC<SuccessProps>;
}
export declare const Context: React.Context<IFormFieldContext<string>>;
/**
 * Number input
 *
 * ### Subcomponents
 *
 * #### `<Number.Label>` (required)
 * Equivalent of `<label>`
 *
 *
 * #### `<Number.Input>` (required)
 * Equivalent of `<input type='number'>`
 *
 *
 * #### `<Number.Help>`
 * Help text for the `<Number>`
 *
 *
 * #### `<Number.Error>` (required if `<Number>` requires validation)
 * Provides instructions on how to resolve the validation error;
 * will display when `error` is set in `<Number>`
 *
 *
 * #### `<Number.Success>`
 * Feedback for when the set meets the validation rules; will
 * display when `success` is set in `<Number>`
 *
 */
declare const Number: React.FC<Props> & INumberComposition;
export default Number;
//# sourceMappingURL=index.d.ts.map