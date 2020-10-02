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

type Props = FormFieldProps<string[]> & {

}

interface IMultiSelectComposition extends ICommonComposition {
    // Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>
    Input: React.FC<InputProps>;
}

export const Context = React.createContext<IFormFieldContext<string[]>>({
    bind: new NullFieldBind<string[]>()
});

/**
 * MultiSelect is used to select multiple items from a collection.
 */
const MultiSelect: React.FC<Props> & IMultiSelectComposition = ({
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

MultiSelect.Input = Input;
MultiSelect.Label = withFormContext<LabelProps>(Label, Context);
MultiSelect.Help = withFormContext<HelpProps>(Help, Context);
MultiSelect.Error = withFormContext<ErrorProps>(Error, Context);
MultiSelect.Success = withFormContext<SuccessProps>(Success, Context);

export default MultiSelect;
