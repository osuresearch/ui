import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../../internal/FormCommon/types';
import useFieldBindOrProps from '../../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../../internal/FormCommon/HOC/withFormContext';

import Input, { InputProps } from './Input';
import Label, { LabelProps } from './Label';

import {
    Help, HelpProps,
} from '../../../internal/FormCommon/Components';

type Props = FormFieldProps<string> & {
    // Add your other top level props here.
}

interface IRadioComposition {
    /** Labeling for the radio */
    Label: React.FC<LabelProps>

    /** Help text for the `Radio` */
    Help: React.FC<HelpProps>

    /**
     * Styled equivalent of `<input type="radio"/>`
     * 
     * Additional accepted props:
     *  * [`radio` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Additional_attributes)
     *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
     *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
     */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>
}

export const Context = React.createContext<IFormFieldContext<string>>({
    bind: new NullFieldBind<string>()
});

/**
 * Radio input and label
 * 
 * `<Radio>` components **must** always be contained within a `<FieldSet>`
 */
const Radio: React.FC<Props> & IRadioComposition = (props) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <Context.Provider value={{ bind }}>
            <div className={`ui-form-element custom-control custom-radio ${bind.required ? 'is-required' : ''} ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'}`}
            >
                {props.children}
            </div>
        </Context.Provider>
    )
}

Radio.Input = Input;
Radio.Help = withFormContext<HelpProps>(Help, Context);
Radio.Label = withFormContext<LabelProps>(Label, Context);

export default Radio;

// Compound Component pattern adapted from https://blog.martindidiego.com/compound-components-typescript/
