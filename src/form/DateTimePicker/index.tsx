
import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import {
    Label, LabelProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps
} from '../../internal/FormCommon/Components';

import Input, { InputProps } from './Input';

type Props = FormFieldProps<string> & {
    // Add your other top level props here.
    // foo: number
}

interface IDateTimePickerComposition {
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
 * Provides a date picker and time input for a datetime field.
 * 
 */
const DateTimePicker: React.FC<Props> & IDateTimePickerComposition = ({
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

DateTimePicker.Input = Input;
DateTimePicker.Label = withFormContext<LabelProps>(Label, Context);
DateTimePicker.Help = withFormContext<HelpProps>(Help, Context);
DateTimePicker.Error = withFormContext<ErrorProps>(Error, Context);
DateTimePicker.Success = withFormContext<SuccessProps>(Success, Context);

export default DateTimePicker;
