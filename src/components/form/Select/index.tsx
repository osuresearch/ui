import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../../internal/FormCommon/types';
import useFieldBindOrProps from '../../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../../internal/FormCommon/HOC/withFormContext';

import Control, { ControlProps } from './Control';
import Option, { OptionProps } from './Option';

import {
    ICommonComposition,
    Label, LabelProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps,
} from '../../../internal/FormCommon/Components';

type Props = FormFieldProps<string> & {
    // Add your other top level props here.
    // foo: number
}

interface ISelectComposition extends ICommonComposition {
    /**
     * A control container for `<Select.Option>` children.
     * 
     * Accepts all 
     * [HTMLSelectElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
     * props.
     */
    Control: React.ForwardRefExoticComponent<ControlProps & React.RefAttributes<HTMLSelectElement>>

    /**
     * An option nested in a `<Select.Control>`
     * 
     * Requires *either* a `value` or `optionsBind` prop.
     * 
     * Accepts all 
     * [HTMLOptionElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
     * props.
     */
    Option: React.FC<OptionProps>
}

export const Context = React.createContext<IFormFieldContext<string>>({
    bind: new NullFieldBind<string>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

/**
 * A styled Select drop-down component
 */
const Select: React.FC<Props> & ISelectComposition = ({
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

Select.Control = Control;
Select.Option = Option;
Select.Label = withFormContext<LabelProps>(Label, Context);
Select.Help = withFormContext<HelpProps>(Help, Context);
Select.Error = withFormContext<ErrorProps>(Error, Context);
Select.Success = withFormContext<SuccessProps>(Success, Context);

export default Select;
