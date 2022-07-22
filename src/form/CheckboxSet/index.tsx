import React, { useCallback, ReactNode, ReactElement } from 'react';
import { deepMap } from 'react-children-utilities';
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

import Checkbox from '../Checkbox';

interface ICheckboxSetComposition {
    /**
     * Serves as a label for all of the components in the 
     * `CheckboxSet`
     */
    Legend: React.FC<LegendProps>

    /** Display the form components inline */
    Inline: React.FC

    /** Help text for the `<CheckboxSet>` */
    Help: React.FC<HelpProps>

    /** 
     * (required if `<CheckboxSet>` requires validation)
     * 
     * Provides instructions on how to resolve the validation 
     * error; will display when `error` is set in `<CheckboxSet>`
    */
    Error: React.FC<ErrorProps>

    /**
     * Feedback for when the set meets the validation rules; 
     * will display when `success` is set in `<CheckboxSet>`
     */
    Success: React.FC<SuccessProps>
}


type Props = FormFieldProps<string | string[]> & {
    /**
     * The value of the `name` prop will cascade down 
     * to be the `name` in each child component in the 
     * `<CheckboxSet>`. If no name is 
     * supplied, the id will act as
     * the name
     */
    name?: string;
}

export const Context = React.createContext<IFormFieldContext<string | string[]>>({
    bind: new NullFieldBind<string | string[]>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

/**
 * A set of checkbox form components.
 */
const CheckboxSet: React.FC<Props> & ICheckboxSetComposition = ({
    children,
    ...props // everything else is of FormFieldProps<string>
}) => {
    const { bind } = useFieldBindOrProps(props);

    const name = bind.name || bind.id;

    let className = `
        ui-form-element
        ${bind.className ? bind.className : ''}
        ${bind.required ? 'is-required' : ''}
        ${bind.error ? 'is-invalid' : ''}
        ${bind.success ? 'is-valid' : ''}
    `;
    // Remove new lines and trim
    className = className.replace(/\n/g, ' ').trim();

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
                id={bind.id}
                className={className}
                name={name}
                aria-describedby={`${bind.id}-help`}
            >
                {deepMap(children, (child: ReactNode) => {
                    if (child && React.isValidElement(child) && child.type === Checkbox) {
                        const cloneProps = {
                            // Add the CheckboxSet props to the
                            // inputs (if the inputs have not
                            // already defined them)
                            name: child.props.name || name,
                            error: child.props.error || bind.error,
                            success: child.props.success || bind.success,
                            readOnly: child.props.readOnly || bind.readOnly,
                            required: child.props.required || bind.required,
                            onChange: (value: boolean) => handleCheckboxChange(value, child.props.id)
                        }

                        return React.cloneElement(child as ReactElement, {
                            ...(child as ReactElement).props,
                            ...cloneProps
                        });
                    }
                    return child;
                })}
            </fieldset>
        </Context.Provider>
    )
}

CheckboxSet.Inline = Inline;
CheckboxSet.Legend = withFormContext<LegendProps>(Legend, Context);
CheckboxSet.Help = withFormContext<HelpProps>(Help, Context);
CheckboxSet.Error = withFormContext<ErrorProps>(Error, Context);
CheckboxSet.Success = withFormContext<SuccessProps>(Success, Context);

export default CheckboxSet;