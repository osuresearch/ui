import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import { Input, InputProps } from './Input';
import { Search, SearchProps } from './Search';
import { Email, EmailProps } from './Email';
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
    Label: React.FC<LabelProps>
    Help: React.FC<HelpProps>
    Input: React.FC<InputProps>
    Error: React.FC<ErrorProps>
    Success: React.FC<SuccessProps>
    Search: React.FC<SearchProps>
    Email: React.FC<EmailProps>
    Area: React.FC<TextAreaProps>
}

export const Context = React.createContext<IFormFieldContext<string>>({
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
        <Context.Provider value={{ bind, /* foo */ }}>
            {children}
        </Context.Provider>
    );
}


Text.Input = Input;
Text.Search = Search;
Text.Email = Email;
Text.Area = TextArea;
Text.Label = withFormContext<LabelProps>(Label, Context);
Text.Help = withFormContext<HelpProps>(Help, Context);
Text.Error = withFormContext<ErrorProps>(Error, Context);
Text.Success = withFormContext<SuccessProps>(Success, Context);

export default Text;
