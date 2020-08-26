import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import {
    Legend, LegendProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps
} from '../../internal/FormCommon/Components';

import Inline, { InlineProps } from './Inline';

interface IFieldSetComposition {
    /**
     * Serves as a label for all of the components in the 
     * `FieldSet`
     */
    Legend: React.FC<LegendProps>

    /** Display the form components inline */
    Inline: React.FC<InlineProps>

    /** Help text for the `<FieldSet>` */
    Help: React.FC<HelpProps>

    /** 
     * (required if `<FieldSet>` requires validation)
     * 
     * Provides instructions on how to resolve the validation 
     * error; will display when `error` is set in `<FieldSet>`
    */
    Error: React.FC<ErrorProps>

    /**
     * Feedback for when the set meets the validation rules; 
     * will display when `success` is set in `<FieldSet>`
     */
    Success: React.FC<SuccessProps>
}

type Props = FormFieldProps<boolean> & {
    /**
     * The value of the `name` prop will cascade down to be the 
     * `name` in each child component in the `<FieldSet>`.
     */
    name?: string;

    children: React.ReactElement[];
}

export const Context = React.createContext<IFormFieldContext<boolean>>({
    bind: new NullFieldBind<boolean>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

const IsInput = (element: React.ReactElement) => {
    // @ts-ignore
    switch (element?.type.name) {
        case 'FieldSet':
        case 'Radio':
        case 'Text':
            return true;
        default:
            return false;
    }
}

/**
 * A set of related input components
 * 
 * ### Subcomponents
 * #### `<FieldSet.Legend>` (required)
 * Serves as a label for all of the components in the `FieldSet`
 * 
 * 
 * #### `<FieldSet.Help>`
 * Help text for the `<FieldSet>`
 * 
 * 
 * #### `<FieldSet.Error>` (required if `<FieldSet>` requires validation)
 * Provides instructions on how to resolve the validation error; 
 * will display when `error` is set in `<FieldSet>`
 * 
 * 
 * #### `<FieldSet.Success>`
 * Feedback for when the set meets the validation rules; will 
 * display when `success` is set in `<FieldSet>`
 * 
 */
const FieldSet: React.FC<Props> & IFieldSetComposition = ({
    children,
    ...props // everything else is of FormFieldProps<string>
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <Context.Provider value={{ bind }}>
            <fieldset
                className={
                    (bind.required ? "is-required" : "") +
                    (bind.error ? " is-invalid" : "")
                }
                name={bind.name}
            >
                {children.map(element => {
                    if (IsInput(element)) {
                        // Add the name, success, and error 
                        // props to the inputs
                        return React.cloneElement(element, {
                            name: props.name,
                            error: bind.error,
                            success: bind.success
                        })
                    }

                    return React.cloneElement(element);
                })}
            </fieldset>
        </Context.Provider>
    )
}

FieldSet.Inline = Inline;
FieldSet.Legend = withFormContext<LegendProps>(Legend, Context);
FieldSet.Help = withFormContext<HelpProps>(Help, Context);
FieldSet.Error = withFormContext<ErrorProps>(Error, Context);
FieldSet.Success = withFormContext<SuccessProps>(Success, Context);

export default FieldSet;