import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../../internal/FormCommon/types';
import useFieldBindOrProps from '../../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../../internal/FormCommon/HOC/withFormContext';

import Input, { InputProps } from './Input';

import {
    ICommonComposition,
    Label, LabelProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps,
} from '../../../internal/FormCommon/Components';

type Props = FormFieldProps<string> & {

}

interface INumberComposition extends ICommonComposition {
    /**
     * Equivalent of `<input type='number'>`
     * 
     * Accepts all 
     * [HTMLInputElement attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
     * as props.
     */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>
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
            <div className={`ui-form-element ${bind.required ? 'is-required' : ''} ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'}`}
            >
                {children}
            </div>
        </Context.Provider>
    );
}

Number.Input = Input;
Number.Label = withFormContext<LabelProps>(Label, Context);
Number.Help = withFormContext<HelpProps>(Help, Context);
Number.Error = withFormContext<ErrorProps>(Error, Context);
Number.Success = withFormContext<SuccessProps>(Success, Context);

export default Number;
