import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import { Control, ControlProps } from './Control';
import { Option, OptionProps } from './Option';

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

interface ISelectComposition {
    /**
     * Equivalent of `<label>`
     */
    Label: React.FC<LabelProps>

    /**
     * Help text for the `<Select>`
     */
    Help: React.FC<HelpProps>

    /**
     * A control container for options (this is `<select>` in 
     * native HTML)
     */
    Control: React.ForwardRefExoticComponent<ControlProps & React.RefAttributes<HTMLSelectElement>>

    /**
     * An option nested in a `Select.Control` list (this is 
     * `<option>` in native HTML)
     *  * **Props**
     *      * `value` (required)
     *      * Accepts [`<option>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
     */
    Option: React.FC<OptionProps>

    /**
     * Provides instructions on how to resolve the validation
     * error; will display when `error` is set in `<Select>`
     */
    Error: React.FC<ErrorProps>

    /**
     * Feedback for when the set meets the validation rules; 
     * will display when `success` is set in `<Select>`
     */
    Success: React.FC<SuccessProps>
}

export const Context = React.createContext<IFormFieldContext<string>>({
    bind: new NullFieldBind<string>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

/**
 * A styled Select drop-down component
 *
 */
const Select: React.FC<Props> & ISelectComposition = ({
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

Select.Control = Control;
Select.Option = Option;
Select.Label = withFormContext<LabelProps>(Label, Context);
Select.Help = withFormContext<HelpProps>(Help, Context);
Select.Error = withFormContext<ErrorProps>(Error, Context);
Select.Success = withFormContext<SuccessProps>(Success, Context);

export default Select;
