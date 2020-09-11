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
    
}

interface INumberComposition {
    /** Equivalent of `<label>` */
    Label: React.FC<LabelProps>

    /** Equivalent of `<input type='text'>` */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>

    /** Help text for the `<Number>` */
    Help: React.FC<HelpProps>

    /**
     * (required if `<Number>` requires validation)
     * Provides instructions on how to resolve the validation 
     * error; will display when `error` is set in `<Number>`
     */
    Error: React.FC<ErrorProps>

    /**
     * Feedback for when the set meets the validation rules; 
     * will display when `success` is set in `<Number>`
     */
    Success: React.FC<SuccessProps>
}

export const Context = React.createContext<IFormFieldContext<string>>({
    bind: new NullFieldBind<string>()
});

/**
 * Numeric input
 */
const Number: React.FC<Props> & INumberComposition = ({
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

Number.Input = Input;
Number.Label = withFormContext<LabelProps>(Label, Context);
Number.Help = withFormContext<HelpProps>(Help, Context);
Number.Error = withFormContext<ErrorProps>(Error, Context);
Number.Success = withFormContext<SuccessProps>(Success, Context);

export default Number;
