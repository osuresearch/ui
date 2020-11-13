import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../../internal/FormCommon/types';
import useFieldBindOrProps from '../../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../../internal/FormCommon/HOC/withFormContext';

import Input, { InputProps } from './Input';

import {
    ICommonComposition,
    Label, LabelProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps,
} from '../../../internal/FormCommon/Components';

type Props = FormFieldProps<string[]> & {

}

interface IChipsComposition extends ICommonComposition {
    // Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>
    Input: React.FC<InputProps>;
}

export const Context = React.createContext<IFormFieldContext<string[]>>({
    bind: new NullFieldBind<string[]>()
});

/**
 * Chips is used to enter multiple values on an input field.
 */
const Chips: React.FC<Props> & IChipsComposition = ({
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

Chips.Input = Input;
Chips.Label = withFormContext<LabelProps>(Label, Context);
Chips.Help = withFormContext<HelpProps>(Help, Context);
Chips.Error = withFormContext<ErrorProps>(Error, Context);
Chips.Success = withFormContext<SuccessProps>(Success, Context);

export default Chips;
