import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import { Input, InputProps } from './Input';
import { Search, SearchProps } from './Search';
import { Email, EmailProps } from './Email';
import { Rich, RichProps } from './Rich';
import { Area, AreaProps } from './Area'

import {
    Label, LabelProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps
} from '../../internal/FormCommon/Components';

type Props = FormFieldProps<string> & {
    
}

interface ITextComposition {
    /** Equivalent of `<label>` */
    Label: React.FC<LabelProps>

    /** Equivalent of `<input type='text'>` */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>

    /** 
     * Jams a standard ORIS/UI search result pair into 
     * a single string value bind in the form `key|name`
     */
    Search: React.FC<SearchProps>

    /** 
     * Email input field with automatic validation for invalid 
     * email addresses 
     */
    Email: React.ForwardRefExoticComponent<EmailProps & React.RefAttributes<HTMLInputElement>>

    /** Equivalent of `<textarea>` */
    Area: React.ForwardRefExoticComponent<AreaProps & React.RefAttributes<HTMLTextAreaElement>>

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
    bind: new NullFieldBind<string>()
});

/**
 * Text-like content input fields
 */
const Text: React.FC<Props> & ITextComposition = ({
    children,
    ...props
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <Context.Provider value={{ bind }}>
            {children}
        </Context.Provider>
    );
}

Text.Input = Input;
Text.Search = Search;
Text.Email = Email;
Text.Area = Area;
Text.Rich = Rich;
Text.Label = withFormContext<LabelProps>(Label, Context);
Text.Help = withFormContext<HelpProps>(Help, Context);
Text.Error = withFormContext<ErrorProps>(Error, Context);
Text.Success = withFormContext<SuccessProps>(Success, Context);

export default Text;
