
import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import { Input, InputProps } from './Input';

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

interface ITimeComposition {
    Label: React.FC<LabelProps>
    Help: React.FC<HelpProps>
    Input: React.FC<InputProps>
    Error: React.FC<ErrorProps>
    Success: React.FC<SuccessProps>
}

export const Context = React.createContext<IFormFieldContext<string>>({
    bind: new NullFieldBind<string>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

/**
 * Provides a time input.
 *
 * This component replicates the `<input type='time' />` Firefox/
 * Chrome element to work in all browsers.
 * 
 * The component expects/returns an `hour:minutes` string in 
 * 24-hour time format.
 * 
 * ### Subcomponents
 * 
 * #### `<Time.Input>` (required) * 
 * * **Props**
 *  * `defaultValue` – must be an hour:minutes string in 24h format 
 *  * `value` – must be an hour:minutes string in 24h format
 *  * `onChange` – Returns the time in a 24h format, e.g. `14:05`
 * 
 * 
 * #### `<Time.Label>` (required)
 * Equivalent of `<label>`
 * 
 * * **Props**
 *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 * 
 * 
 * #### `<Time.Help>`
 * Help text for the `<Time>`
 * 
 * 
 * #### `<Time.Error>` (required if `<Time>` requires validation)
 * Provides instructions on how to resolve the validation error; 
 * will display when `error` is set in `<Time>`
 * 
 * 
 * #### `<Time.Success>`
 * Feedback for when the set meets the validation rules; will 
 * display when `success` is set in `<Time>`
 * 
 */
const Time: React.FC<Props> & ITimeComposition = ({
    // foo = 1
    children,
    ...props // everything else is of FormFieldProps<string>
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <Context.Provider value={{ bind, /* foo */ }}>
            {children}
        </Context.Provider>
    );
}

Time.Input = Input;
Time.Label = withFormContext<LabelProps>(Label, Context);
Time.Help = withFormContext<HelpProps>(Help, Context);
Time.Error = withFormContext<ErrorProps>(Error, Context);
Time.Success = withFormContext<SuccessProps>(Success, Context);

export default Time;
