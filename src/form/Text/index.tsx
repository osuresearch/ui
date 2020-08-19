import React, { createContext } from 'react';
import { NullFieldBind, IFieldBind, FormFieldProps } from './etc';
import useFieldBindOrProps from './useFieldBindOrProps';

import { Label, LabelProps } from './Label';
import { Help, HelpProps } from './Help';
import { Error, ErrorProps } from './Error';
import { Input, InputProps } from './Input';
import { Search, SearchProps } from './Search';
import { Email, EmailProps } from './Email';

type Props = FormFieldProps<string> & {
    // Add your other top level props here.
    // foo: number
}

interface ITextComposition {
    Label: React.FC<LabelProps>
    Help: React.FC<HelpProps>
    Input: React.FC<InputProps>
    Error: React.FC<ErrorProps>
    Search: React.FC<SearchProps>
    Email: React.FC<EmailProps>
}

interface ITextContext {
    bind: IFieldBind<string>

    // Add your other props  here that should be made available to consumers
    // foo: number
}

export const TextContext = createContext<ITextContext>({
    bind: new NullFieldBind<string>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

const Text: React.FC<Props> & ITextComposition = ({ 
    // foo = 1
    children,
    ...props // everything else is of FormFieldProps<string>
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <TextContext.Provider value={{ bind, /* foo */ }}>
            <div className="form-group">
                {children}
            </div>
        </TextContext.Provider>
    );
}

Text.Label = Label;
Text.Help = Help;
Text.Input = Input;
Text.Error = Error;
Text.Search = Search;
Text.Email = Email;

export default Text;
