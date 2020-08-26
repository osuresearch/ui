import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import { Input, InputProps } from './Input';

import {
    ControlLabel, ControlLabelProps,
} from '../../internal/FormCommon/Components';

type Props = FormFieldProps<string> & {
    // Add your other top level props here.
    // foo: number
}

interface IRadioComposition {
    /**
     * #### `Radio.Label` (required)
     * Equivalent of `<label>`
     * 
     * * **Props**
     *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
     */
    Label: React.FC<ControlLabelProps>

    /**
     * #### `Radio.Input` (required)
     * Equivalent of `<input type='radio'>`
     * 
     * * **Props**
     *  * [`radio` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Additional_attributes)
     *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
     *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
     */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>
}

export const Context = React.createContext<IFormFieldContext<string>>({
    bind: new NullFieldBind<string>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

/**
 * Radio input and label
 * 
 * `<Radio>` components **must** always be contained within
 * a `<FieldSet>`
 * 
 * ### Subcomponents
 * 
 * #### `<Radio.Input>` (required)
 * Equivalent of `<input type='radio'>`
 * 
 * * **Props**
 *  * [`radio` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Additional_attributes)
 *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
 *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
 * 
 * 
 * #### `<Radio.Label>` (required)
 * Equivalent of `<label>`
 * 
 * * **Props**
 *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 * 
 */
const Radio: React.FC<Props> & IRadioComposition = (props) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <Context.Provider value={{ bind }}>
            <div className='custom-control custom-radio'>
                {props.children}
            </div>
        </Context.Provider>
    )
}

Radio.Input = Input;
Radio.Label = withFormContext<ControlLabelProps>(ControlLabel, Context);

export default Radio;

// Compound Component pattern adapted from https://blog.martindidiego.com/compound-components-typescript/