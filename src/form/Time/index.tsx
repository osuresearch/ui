
import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import { Input, InputProps } from './Input';

import {
    ICommonComposition,
    Label, LabelProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps,
} from '../../internal/FormCommon/Components';

type Props = FormFieldProps<string> & {
    // Add your other top level props here.
}

interface ITimeComposition extends ICommonComposition {
    Input: React.FC<InputProps>;
}

export const Context = React.createContext<IFormFieldContext<string>>({
    bind: new NullFieldBind<string>(),
});

/**
 * Provides a time input.
 *
 * This component replicates the `<input type='time' />` Firefox/
 * Chrome element to work in all browsers.
 * 
 * The component expects/returns an `hour:minutes` string in 
 * 24-hour time format.
 */
const Time: React.FC<Props> & ITimeComposition = ({
    children,
    ...props
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <Context.Provider value={{ bind }}>
            <div className={`ui-form-element ui-form-time ${bind.required ? 'is-required' : ''} ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'} ${props.className ? props.className : ''}`}
            >
                {children}
            </div>
        </Context.Provider>
    );
}

Time.Input = Input;
Time.Label = withFormContext<LabelProps>(Label, Context);
Time.Help = withFormContext<HelpProps>(Help, Context);
Time.Error = withFormContext<ErrorProps>(Error, Context);
Time.Success = withFormContext<SuccessProps>(Success, Context);

export default Time;
