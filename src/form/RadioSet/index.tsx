import React, { ReactNode, ReactElement } from 'react';
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

import Radio from '../Radio';

interface IRadioSetComposition {
    /**
     * Serves as a label for all of the components in the 
     * `RadioSet`
     */
    Legend: React.FC<LegendProps>

    /** Display the form components inline */
    Inline: React.FC

    /** Help text for the `<RadioSet>` */
    Help: React.FC<HelpProps>

    /** 
     * (required if `<RadioSet>` requires validation)
     * 
     * Provides instructions on how to resolve the validation 
     * error; will display when `error` is set in `<RadioSet>`
    */
    Error: React.FC<ErrorProps>

    /**
     * Feedback for when the set meets the validation rules; 
     * will display when `success` is set in `<RadioSet>`
     */
    Success: React.FC<SuccessProps>
}


type Props = FormFieldProps<string | string[]> & {
    /**
     * The value of the `name` prop will cascade down 
     * to be the `name` in each child component in the 
     * `<RadioSet>`. If no name is 
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
 * A set of radio form components.
 */
const RadioSet: React.FC<Props> & IRadioSetComposition = ({
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

    return (
        <Context.Provider value={{ bind }}>
            <fieldset
                id={bind.id}
                className={className}
                name={name}
                aria-describedby={`${bind.id}-help`}
            >
                {deepMap(children, (child: ReactNode) => {
                    if (child && React.isValidElement(child) && child.type === Radio) {
                        const cloneProps = {
                            // Add the RadioSet props to the
                            // inputs (if the inputs have not
                            // already defined them)
                            name: child.props.name || name,
                            error: child.props.error || bind.error,
                            success: child.props.success || bind.success,
                            readOnly: child.props.readOnly || bind.readOnly,
                            required: child.props.required || bind.required
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

RadioSet.Inline = Inline;
RadioSet.Legend = withFormContext<LegendProps>(Legend, Context);
RadioSet.Help = withFormContext<HelpProps>(Help, Context);
RadioSet.Error = withFormContext<ErrorProps>(Error, Context);
RadioSet.Success = withFormContext<SuccessProps>(Success, Context);

export default RadioSet;