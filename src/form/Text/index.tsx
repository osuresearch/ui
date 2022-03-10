import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import Input, { InputProps } from './Input';
import Search, { SearchProps } from './Search';
import Email, { EmailProps } from './Email';
import Rich, { RichProps } from './Rich';
import Area, { AreaProps } from './Area'

import {
    ICommonComposition,
    Label, LabelProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps,
} from '../../internal/FormCommon/Components';

type Props = FormFieldProps<string> & {

}

interface ITextComposition extends ICommonComposition {
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

    let className = `
        ui-form-element
        ${bind.className ? bind.className : ''}
        ${bind.required ? 'is-required' : ''}
        ${bind.error ? 'is-invalid' : ''}
        ${bind.success ? 'is-valid' : ''}
    `;
    // Remove new lines and trim
    className = className.replace(/\n/g, ' ').trim();

    return (
        <Context.Provider value={{ bind }}>
            <div className={className}>
                {children}
            </div>
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
