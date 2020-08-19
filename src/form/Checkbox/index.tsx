import React from 'react';

// Basically, import components from the FormCommon, unless
// the component needs to be wrapped in this component's
// context - in which case, they need to be their own component
import { Input, InputProps } from './Input';
import { Label, LabelProps } from './Label';
import Help, { HelpProps } from '../../internal/FormCommon/Components/Help';
import { ValidFeedback, ValidFeedbackProps } from './ValidFeedback';
import { InvalidFeedback, InvalidFeedbackProps } from './InvalidFeedback';

interface CheckboxComposition {
    Input: React.FC<InputProps>;
    Label: React.FC<LabelProps>;
    Help: React.FC<HelpProps>;
    ValidFeedback: React.FC<ValidFeedbackProps>;
    InvalidFeedback: React.FC<InvalidFeedbackProps>;
}

interface Props {
    /** ID cascades down to `Checkbox.Input` and `Checkbox.Label` */
    id: string;
    name?: string;
    invalid?: boolean;
    valid?: boolean;
}

interface Context {
    id: string;
    name: string | undefined;
    invalid: boolean | undefined;
    valid: boolean | undefined;
}

export const CheckboxContext = React.createContext<Context>({
    id: '',
    name: undefined,
    invalid: undefined,
    valid: undefined,
});

/**
 * A single checkbox and label
 * 
 * ### Subcomponents
 * 
 * * `Checkbox.Input` (required) – Input field for the `Checkbox`. 
 *  * **Props** – Accepts [`checkbox` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox), React event handler attributes, and all common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
 * * `Checkbox.Label` (required) - Label for the `Checkbox`
 *  * **Props** – Accepts [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes).
 * * `Checkbox.Help` – Help text for the `Checkbox`
 * * `Checkbox.InvalidFeedback` (required if `Checkbox` requires validation) – Provides instructions on how to resolve the validation error; will display when `invalid` is set in `Checkbox`
 * * `Checkbox.ValidFeedback` – Feedback for when the set meets the validation rules; will display when `valid` is set in `Checkbox`
 * 
 */
const Checkbox: React.FC<Props> & CheckboxComposition = ({ children, id, name, invalid, valid }) => {
    return (
        <CheckboxContext.Provider value={{ id, name, invalid, valid }}>
            <div className='custom-control custom-checkbox'>
                {children}
            </div>
        </CheckboxContext.Provider>
    )
}

Checkbox.Input = Input;
Checkbox.Label = Label;
Checkbox.Help = Help;
Checkbox.ValidFeedback = ValidFeedback;
Checkbox.InvalidFeedback = InvalidFeedback;

export default Checkbox;

// Compound Component pattern adapted from https://blog.martindidiego.com/compound-components-typescript/