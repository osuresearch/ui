import React, { createContext } from 'react';
import { NullFieldBind, IFieldBind, FormFieldProps } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { Label, LabelProps } from './Label';
import { Help, HelpProps } from './Help';
import { Error, ErrorProps } from './Error';
import { Success, SuccessProps } from './Success';
import { Control, ControlProps } from './Control';
import { Option, OptionProps } from './Option';

type Props = FormFieldProps<string> & {
    // Add your other top level props here.
    // foo: number
}

interface ISelectComposition {
    Label: React.FC<LabelProps>
    Help: React.FC<HelpProps>
    Control: React.FC<ControlProps>
    Option: (props: OptionProps) => JSX.Element | JSX.Element[]
    Error: React.FC<ErrorProps>
    Success: React.FC<SuccessProps>
}

interface ISelectContext {
    bind: IFieldBind<string>

    // Add your other props  here that should be made available to consumers
    // foo: number
}

export const SelectContext = createContext<ISelectContext>({
    bind: new NullFieldBind<string>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

/**
 * A styled Select drop-down component
 * 
 * ### Subcomponents
 * * `Select.Label` (required) – The label that corresponds with the `Select.Control`
 *  * **Props**
 *      * `hide` – Visually hide the label. The content will continue to be readable in screen readers. Use this with caution; hiding the label can lead to usability and accessibility issues.
 *      * Accepts [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).
 * * `Select.Control` (required) - A control container for options (this is `<select>` in native HTML)
 *  * **Props** – Accepts [`<select>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) and React event handler attributes
 * * `Select.Option` (required) - An option nested in a `Select.Control` list (this is `<option>` in native HTML)
 *  * **Props**
 *      * `value` (required)
 *      * Accepts [`<option>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 * * `Select.Help` – Help text for the `Select`
 * * `Select.Error` (required if `Select` requires validation) – Provides instructions on how to resolve the validation error; will display when `invalid` is set in `Select`
 * * `Select.Success` – Feedback for when the set meets the validation rules; will display when `valid` is set in `Select`
 * 
 */
const Select: React.FC<Props> & ISelectComposition = ({
    // foo = 1
    children,
    ...props // everything else is of FormFieldProps<string>
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <SelectContext.Provider value={{ bind, /* foo */ }}>
            <div className="form-group">
                {children}
            </div>
        </SelectContext.Provider>
    );
}

Select.Label = Label;
Select.Control = Control;
Select.Option = Option;
Select.Help = Help;
Select.Error = Error;
Select.Success = Success;

export default Select;