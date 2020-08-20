import React from 'react';
import { NullFieldBind, FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import useFieldBindOrProps from '../../internal/FormCommon/hooks/useFieldBindOrProps';

import { withFormContext } from '../../internal/FormCommon/HOC/withFormContext';

import { Fields, FieldsProps } from './Fields';

import {
    Legend, LegendProps,
    Help, HelpProps,
    Error, ErrorProps,
    Success, SuccessProps
} from '../../internal/FormCommon/Components';

interface ICheckboxSetComposition {
    Legend: React.FC<LegendProps>;
    Fields: React.FC<FieldsProps>;
    Help: React.FC<HelpProps>;
    Error: React.FC<ErrorProps>;
    Success: React.FC<SuccessProps>;
}

type Props = FormFieldProps<boolean> & {
    // Add your other top level props here.
    // foo: number
}

export const Context = React.createContext<IFormFieldContext<boolean>>({
    bind: new NullFieldBind<boolean>(),

    // Add your other prop defaults here that should be made available to consumers
    // foo: 1
});

/**
 * A set of related checkbox components
 * 
 * ### Subcomponents
 * 
 * Unless otherwise noted, all subcomponents accept [HTML 
 * Global attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes) 
 * and React event handler attributes as props.
 * 
 * * `CheckboxSet.Legend` (required) – Serves as a label for all of the `Checkbox` components in the set
 * * `CheckboxSet.Fields` (required) – Wrapper around the `Checkbox` components in the set
 *  * **Props**
 *      * `name` – The value of the `name` prop will cascade down to be the `name` in each `Checkbox` in the set. You may also set the `name` prop on child `Checkbox` components; however, `name` on child components will be overridden if `name` is set on this component
 *      * `inline` – Display the `Checkbox` fields inline
 *      * Does not accept any global props/react event props
 * * `CheckboxSet.Help` – Help text for the `CheckboxSet`
 * * `CheckboxSet.InvalidFeedback` (required if `CheckboxSet` requires validation) – Provides instructions on how to resolve the validation error; will display when `invalid` is set in `CheckboxSet`
 * * `CheckboxSet.ValidFeedback` – Feedback for when the set meets the validation rules; will display when `valid` is set in `CheckboxSet`
 * 
 * @param {boolean} required
 * @param {boolean} invalid
 * @param {boolean} valid
 */
const CheckboxSet: React.FC<Props> & ICheckboxSetComposition = ({
    children,
    ...props // everything else is of FormFieldProps<string>
}) => {
    const { bind } = useFieldBindOrProps(props);

    return (
        <Context.Provider value={{ bind }}>
            <fieldset
                className={
                    "form-group" +
                    (bind.required ? " is-required" : "")
                }
            >
                {children}
            </fieldset>
        </Context.Provider>
    )
}

CheckboxSet.Legend = withFormContext<LegendProps>(Legend, Context);
CheckboxSet.Fields = Fields;
CheckboxSet.Help = withFormContext<HelpProps>(Help, Context);
CheckboxSet.Error = withFormContext<ErrorProps>(Error, Context);
CheckboxSet.Success = withFormContext<SuccessProps>(Success, Context);

export default CheckboxSet;