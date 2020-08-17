import React from 'react';

import { Label, LabelProps } from './Label';
import { Control, ControlProps } from './Control';
import { Option, OptionProps } from './Option';
import Help, { HelpProps } from '../../internal/FormCommon/Help';
import { InvalidFeedback, InvalidFeedbackProps } from './InvalidFeedback';
import { ValidFeedback, ValidFeedbackProps } from './ValidFeedback';

interface SelectComposition {
    Label: React.FC<LabelProps>;
    Control: React.FC<ControlProps>;
    Option: React.FC<OptionProps>;
    Help: React.FC<HelpProps>;
    InvalidFeedback: React.FC<InvalidFeedbackProps>;
    ValidFeedback: React.FC<ValidFeedbackProps>;
}

interface Props {
    id: string;
    invalid?: boolean | undefined;
    valid?: boolean | undefined;
    required?: boolean | undefined;
}

export const Context = React.createContext<Props>({
    id: '',
    invalid: undefined,
    valid: undefined,
    required: undefined
})

/**
 * A styled Select drop-down component
 * 
 * ### Subcomponents
 * * `Select.Label` (required) – The label that corresponds with the `Select.Control`
 *  * **Props**
 *      * `hide` – Visually hide the label. The content will continue to be readable in screen readers. Use this with caution; hiding the label can lead to usability and accessibility issues.
 *      * Accepts [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).
 * * `Select.Control` (required) - A control container for options (this is `<select>` in native HTML)
 *  * **Props** – Accepts [`<select> attributes`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select) and React event handler attributes
 * * `Select.Option` (required) - An option nested in a `Select.Control` list (this is `<option>` in native HTML)
 *  * **Props**
 *      * `value` (required)
 *      * Accepts [`<option>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 * * `Select.Help` – Help text for the `Select`
 * * `Select.InvalidFeedback` (required if `Select` requires validation) – Provides instructions on how to resolve the validation error; will display when `invalid` is set in `Select`
 * * `Select.ValidFeedback` – Feedback for when the set meets the validation rules; will display when `valid` is set in `Select`
 * 
 */

const Select: React.FC<Props> & SelectComposition = ({
    children,
    id,
    invalid,
    valid,
    required
}) => {
    return (
        <Context.Provider value={{ id, invalid, valid, required }}>
            <div className='form-group'>
                {children}
            </div>
        </Context.Provider>
    )
}

Select.Label = Label;
Select.Control = Control;
Select.Option = Option;
Select.Help = Help;
Select.InvalidFeedback = InvalidFeedback;
Select.ValidFeedback = ValidFeedback;

export default Select;