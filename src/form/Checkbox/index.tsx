import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import { Input, InputProps } from './Input';

import {
    ControlLabel, ControlLabelProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps
} from '../../internal/FormCommon/Components';

type Props = FormFieldProps<boolean> & {
    // Add your other top level props here.
    // foo: number
}

interface ICheckboxComposition {
    /**
     * Equivalent of `<label>`
     * 
     * * **Props**
     *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
    */
    Label: React.FC<ControlLabelProps>

    /** Help text for the `Checkbox` */
    Help: React.FC<HelpProps>

    /**
     * Equivalent of `<input type='checkbox'>`
     * 
     * * **Props**
     *  * [`checkbox` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
     *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
     *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
    */
    Input: React.FC<InputProps>

    /** 
     * (required if single `<Checkbox>` that requires validation)
     * 
     * Provides instructions on how to resolve the validation 
     * error; will display when `error` is set in `<Checkbox>`
    */
    Error: React.FC<ErrorProps>

    /**
     * Feedback for when the set meets the validation rules; 
     * will display when `success` is set in `<Checkbox>`
     */
    Success: React.FC<SuccessProps>
}

export const Context = React.createContext<IFormFieldContext<boolean>>({
    bind: new NullFieldBind<boolean>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

/**
 * A single checkbox
 * 
 * ### Subcomponents
 * 
 * #### `<Checkbox.Input>` (required)
 * Equivalent of `<input type='checkbox'>`
 * 
 * * **Props**
 *  * [`checkbox` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
 *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
 *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
 * 
 * 
 * #### `<Checkbox.Label>` (required)
 * Equivalent of `<label>`
 * 
 * * **Props**
 *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 * 
 * 
 * #### `<Checkbox.Help>`
 * Help text for the `<Checkbox>`
 * 
 * 
 * #### `<Checkbox.Error>` (required if single `<Checkbox>` that requires validation)
 * Provides instructions on how to resolve the validation error; 
 * will display when `error` is set in `<Checkbox>`
 * 
 * 
 * #### `<Checkbox.Success>`
 * Feedback for when the set meets the validation rules; will 
 * display when `success` is set in `<Checkbox>`
 * 
 */
const Checkbox: React.FC<Props> & ICheckboxComposition = ({
    children,
    ...props // everything else is of FormFieldProps<string>
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <Context.Provider value={{ bind }}>
            <div className='custom-control custom-checkbox'>
                {children}
            </div>
        </Context.Provider>
    )
}

Checkbox.Input = Input;
Checkbox.Label = withFormContext<ControlLabelProps>(ControlLabel, Context);
Checkbox.Help = withFormContext<HelpProps>(Help, Context);
Checkbox.Success = withFormContext<SuccessProps>(Success, Context);
Checkbox.Error = withFormContext<ErrorProps>(Error, Context);

export default Checkbox;

// Compound Component pattern adapted from https://blog.martindidiego.com/compound-components-typescript/