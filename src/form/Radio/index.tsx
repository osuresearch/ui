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
     * Label for `Radio` (equivalent of `<label>`)
     * 
     * * **Props**
     *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
     */
    Label: React.FC<ControlLabelProps>

    /**
     * #### `Radio.Input` (required)
     * Input field for `Radio` (equivalent of `<input type='radio'>`)
     * 
     * * **Props**
     *  * [`radio` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Additional_attributes)
     *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
     *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
     */
    Input: React.FC<InputProps>
}

export const Context = React.createContext<IFormFieldContext<string>>({
    bind: new NullFieldBind<string>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

/**
 * Radio input and label
 * 
 * ### Subcomponents
 * 
 * #### `Radio.Input` (required)
 * Input field for `Radio` (equivalent of `<input type='radio'>`)
 * 
 * * **Props**
 *  * [`radio` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Additional_attributes)
 *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
 *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
 * 
 * 
 * #### `Radio.Label` (required)
 * Label for `Radio` (equivalent of `<label>`)
 * 
 * * **Props**
 *  * [HTML Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
 * 
 */
const Radio: React.FC<Props> & IRadioComposition = ({
    children,
    ...props // everything else is of FormFieldProps<string>
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <Context.Provider value={{ bind }}>
            <div className='custom-control custom-radio'>
                {children}
            </div>
        </Context.Provider>
    )
}

Radio.Input = Input;
Radio.Label = withFormContext<ControlLabelProps>(ControlLabel, Context);

export default Radio;

// Compound Component pattern adapted from https://blog.martindidiego.com/compound-components-typescript/