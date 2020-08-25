import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { InputProps } from './Input';
import { SearchProps } from './Search';
import { EmailProps } from './Email';
import { RichProps } from './Rich';
import { TextAreaProps } from './Area';
import { LabelProps, HelpProps, ErrorProps, SuccessProps } from '../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string> & {};
interface ITextComposition {
    /** Equivalent of `<label>` */
    Label: React.FC<LabelProps>;
    /** Equivalent of `<input type='text'>` */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement> & InputProps>;
    /**
     * Jams a standard ORIS/UI search result pair into
     * a single string value bind in the form `key|name`
     */
    Search: React.FC<SearchProps>;
    /**
     * Email input field with automatic validation for invalid
     * email addresses
     */
    Email: React.FC<EmailProps>;
    /** Equivalent of `<textarea>` */
    Area: React.FC<TextAreaProps>;
    /** A rich text editor (RTE) based on CKEditor */
    Rich: React.FC<RichProps>;
    /** Help text for the `<Text>` */
    Help: React.FC<HelpProps>;
    /**
     * (required if `<Text>` requires validation)
     * Provides instructions on how to resolve the validation
     * error; will display when `error` is set in `<Text>`
     */
    Error: React.FC<ErrorProps>;
    /**
     * Feedback for when the set meets the validation rules;
     * will display when `success` is set in `<Text>`
     */
    Success: React.FC<SuccessProps>;
}
export declare const Context: React.Context<IFormFieldContext<string>>;
/**
 * Multiple types of text inputs
 *
 * ### Subcomponents
 *
 * #### `<Text.Label>` (required)
 * Equivalent of `<label>`
 *
 *
 * #### Input Components (one is required):
 *
 * ##### `<Text.Input>`
 * Equivalent of `<input type='text'>`
 *
 *
 * ##### `<Text.Area>`
 * Equivalent of `<textarea>`
 *
 *
 * ##### `<Text.Email>`
 * Email input field with automatic validation for invalid email
 * addresses
 *
 *
 * ##### `<Text.Rich>`
 * A rich text editor (RTE) based on CKEditor (additional
 * requirements must be met to use this component; see the
 * section on `<Text.Rich>` below for more details)
 *
 *
 * ##### `<Text.Search>`
 * Jams a standard ORIS/UI search result pair into a single
 * string value bind in the form `key|name`
 *
 *
 * #### `<Text.Help>`
 * Help text for the `<Text>`
 *
 *
 * #### `<Text.Error>` (required if `<Text>` requires validation)
 * Provides instructions on how to resolve the validation error;
 * will display when `error` is set in `<Text>`
 *
 *
 * #### `<Text.Success>`
 * Feedback for when the set meets the validation rules; will
 * display when `success` is set in `<Text>`
 *
 */
declare const Text: React.FC<Props> & ITextComposition;
export default Text;
//# sourceMappingURL=index.d.ts.map