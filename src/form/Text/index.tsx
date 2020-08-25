import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import { Input, InputProps } from './Input';
import { Search, SearchProps } from './Search';
import { Email, EmailProps } from './Email';
import Rich, { RichProps } from './Rich';
import { TextArea, TextAreaProps } from './Area'

import {
    Label, LabelProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps
} from '../../internal/FormCommon/Components';

type Props = FormFieldProps<string> & {
    // Add your other top level props here.
    // foo: number
}

interface ITextComposition {
    /** Equivalent of `<label>` */
    Label: React.FC<LabelProps>

    /** Equivalent of `<input type='text'>` */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement> & InputProps>

    /** 
     * Jams a standard ORIS/UI search result pair into 
     * a single string value bind in the form `key|name`
     */
    Search: React.FC<SearchProps>

    /** 
     * Email input field with automatic validation for invalid 
     * email addresses 
     */
    Email: React.FC<EmailProps>

    /** Equivalent of `<textarea>` */
    Area: React.FC<TextAreaProps>

    /** A rich text editor (RTE) based on CKEditor */
    Rich: React.FC<RichProps>

    /** Help text for the `<Text>` */
    Help: React.FC<HelpProps>

    /**
     * (required if `<Text>` requires validation)
     * Provides instructions on how to resolve the validation 
     * error; will display when `error` is set in `<Text>`
     */
    Error: React.FC<ErrorProps>

    /**
     * Feedback for when the set meets the validation rules; 
     * will display when `success` is set in `<Text>`
     */
    Success: React.FC<SuccessProps>
}

export const Context = React.createContext<IFormFieldContext<string>>({
    bind: new NullFieldBind<string>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

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

const Text: React.FC<Props> & ITextComposition = ({
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


Text.Input = Input;
Text.Search = Search;
Text.Email = Email;
Text.Area = TextArea;
Text.Rich = Rich;
Text.Label = withFormContext<LabelProps>(Label, Context);
Text.Help = withFormContext<HelpProps>(Help, Context);
Text.Error = withFormContext<ErrorProps>(Error, Context);
Text.Success = withFormContext<SuccessProps>(Success, Context);

export default Text;
