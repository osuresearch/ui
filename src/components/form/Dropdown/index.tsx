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

interface IDropdownComposition extends ICommonComposition {
    // Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>
    Input: React.FC<InputProps>;
}

export const Context = React.createContext<IFormFieldContext<string[]>>({
    bind: new NullFieldBind<string[]>()
});

/**
 * Dropdown is used to select an item from a collection of options.
 */
const Dropdown: React.FC<Props> & IDropdownComposition = ({
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

Dropdown.Input = Input;
Dropdown.Label = withFormContext<LabelProps>(Label, Context);
Dropdown.Help = withFormContext<HelpProps>(Help, Context);
Dropdown.Error = withFormContext<ErrorProps>(Error, Context);
Dropdown.Success = withFormContext<SuccessProps>(Success, Context);

export default Dropdown;
