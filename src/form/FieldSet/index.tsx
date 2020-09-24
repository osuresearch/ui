import React, { useCallback } from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import {
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps,
} from '../../internal/FormCommon/Components';

import { Legend, LegendProps } from './Legend';

import Inline from './Inline';

interface IFieldSetComposition {
    /**
     * Serves as a label for all of the components in the 
     * `FieldSet`
     */
    Legend: React.FC<LegendProps>

    /** Display the form components inline */
    Inline: React.FC

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

type Props = FormFieldProps<string | string[]> & {
    /**
     * The value of the `name` prop will cascade down to be the 
     * `name` in each child component in the `<FieldSet>`.
     */
    name?: string;
}

export const Context = React.createContext<IFormFieldContext<string | string[]>>({
    bind: new NullFieldBind<string | string[]>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

// @ts-ignore
const IsCheckbox = (element: React.ReactElement) => element.type.name === 'Checkbox';

// @ts-ignore
const IsRadio = (element: React.ReactElement) => element.type.name === 'Radio';

/**
 * A set of related form components.
 */
const FieldSet: React.FC<Props> & IFieldSetComposition = ({
    children,
    ...props // everything else is of FormFieldProps<string>
}) => {
    const { bind } = useFieldBindOrProps(props);

    const handleCheckboxChange = useCallback((value: boolean, id: string) => {
        if (!bind.readOnly) {
            // Store the checked (i.e. true) Checkbox names in an array
            let bindValue = Array.isArray(bind.value) ? [...bind.value] : [];

            if (!value) {
                bindValue = bindValue.filter(checkbox => checkbox !== id);
            } else {
                bindValue.push(id);
            }

            bind.value = bindValue;
        }
    }, [bind]);

    return (
        <Context.Provider value={{ bind }}>
            <fieldset
                className={`ui-form-element ${bind.required ? 'is-required' : ''} ${bind.error && 'is-invalid'} ${bind.success && 'is-valid'}`}
                name={bind.name}
                aria-describedBy={`${bind.id}-help`}
            >
                {React.Children.map<React.ReactNode, React.ReactNode>(children, node => {
                    if (React.isValidElement(node)) {
                        const cloneProps = {
                            // Add the FieldSet props to the
                            // inputs (if the inputs have not
                            // already defined them)
                            name: node.props.name || bind.id,
                            error: node.props.error || bind.error,
                            success: node.props.success || bind.success,
                            readOnly: node.props.readOnly || bind.readOnly,
                            required: node.props.required || bind.required
                        }

                        if (IsCheckbox(node)) {
                            return React.cloneElement(node, {
                                ...cloneProps,
                                onChange: (value: boolean) => handleCheckboxChange(value, node.props.id)
                            })
                        }

                        if (IsRadio(node)) {
                            return React.cloneElement(node, {
                                ...cloneProps,
                                onChange: (value: string) => bind.value = value
                            })
                        } else { // Else, clone it as-is
                            return React.cloneElement(node)
                        }
                    } else {
                        return node
                    }
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