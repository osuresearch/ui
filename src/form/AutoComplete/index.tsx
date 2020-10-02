import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import Input, { InputProps } from './Input';

import {
    ICommonComposition,
    Label, LabelProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps,
} from '../../internal/FormCommon/Components';

type Props = FormFieldProps<string[] | string> & {

}

interface IAutoCompleteComposition extends ICommonComposition {
    // Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>
    Input: React.FC<InputProps>;
}

export const Context = React.createContext<IFormFieldContext<string[] | string>>({
    bind: new NullFieldBind<string[] | string>()
});

/**
 * AutoComplete is an input component that provides real-time suggestions when being typed.
 */
const AutoComplete: React.FC<Props> & IAutoCompleteComposition = ({
    children,
    ...props
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <Context.Provider value={{ bind }}>
            <div className={`ui-form-element ${bind.required ? 'is-required' : ''} ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'}`}
            >
                {children}
            </div>
        </Context.Provider>
    );
}

AutoComplete.Input = Input;
AutoComplete.Label = withFormContext<LabelProps>(Label, Context);
AutoComplete.Help = withFormContext<HelpProps>(Help, Context);
AutoComplete.Error = withFormContext<ErrorProps>(Error, Context);
AutoComplete.Success = withFormContext<SuccessProps>(Success, Context);

export default AutoComplete;
