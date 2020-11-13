import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../../internal/FormCommon/types';
import useFieldBindOrProps from '../../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../../internal/FormCommon/HOC/withFormContext';

import Input, { InputProps } from './Input';
import Label, { LabelProps } from './Label';

import {
    ICommonComposition,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps,
} from '../../../internal/FormCommon/Components';

type Props = FormFieldProps<boolean> & {
    // Add your other top level props here.
    // foo: number
}

interface ICheckboxComposition extends Omit<ICommonComposition, 'Label'> {
    /**
     * `<Checkbox.Input />` sub-component. 
     * 
     * Accepts all 
     * [HTMLInputElement attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
     * as props.
     */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>

    Label: React.FC<LabelProps>
}

export const Context = React.createContext<IFormFieldContext<boolean>>({
    bind: new NullFieldBind<boolean>()
});

/**
 * A single checkbox. 
 * 
 * Requires `<Checkbox.Input />` and `<Checkbox.Label />` child components.
 */
const Checkbox: React.FC<Props> & ICheckboxComposition = (props) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <Context.Provider value={{ bind }}>
            <div className={`ui-form-element custom-control custom-checkbox ${bind.required ? 'is-required' : ''} ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'}`}>
                {props.children}
            </div>
        </Context.Provider>
    )
}

Checkbox.Input = Input;
Checkbox.Label = withFormContext<LabelProps>(Label, Context);
Checkbox.Help = withFormContext<HelpProps>(Help, Context);
Checkbox.Success = withFormContext<SuccessProps>(Success, Context);
Checkbox.Error = withFormContext<ErrorProps>(Error, Context);

export default Checkbox;

// Compound Component pattern adapted from https://blog.martindidiego.com/compound-components-typescript/