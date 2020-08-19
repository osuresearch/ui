import React from 'react';
import Legend, { LegendProps } from '../../internal/FormCommon/Components/Legend';
import { Fields, FieldsProps } from './Fields';
import Help, { HelpProps } from '../../internal/FormCommon/Components/Help';
import { InvalidFeedback, InvalidFeedbackProps } from './InvalidFeedback';
import { ValidFeedback, ValidFeedbackProps } from './ValidFeedback';

interface CheckboxSetComposition {
    Legend: React.FC<LegendProps>;
    Fields: React.FC<FieldsProps>;
    Help: React.FC<HelpProps>;
    InvalidFeedback: React.FC<InvalidFeedbackProps>;
    ValidFeedback: React.FC<ValidFeedbackProps>;
}

interface Props {
    /** Make this fieldset required */
    required?: boolean;

    /** Indicate that this fieldset failed validation */
    invalid?: boolean;

    /** Indicate that this fieldset met validation (not recommended unless you have a good reason) */
    valid?: boolean;
};

interface Context {
    invalid: boolean | undefined;
    valid: boolean | undefined;
}

export const CheckboxSetContext = React.createContext<Context>({
    invalid: undefined,
    valid: undefined,
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

const CheckboxSet: React.FC<Props> & CheckboxSetComposition = ({
    children,
    required,
    invalid,
    valid
}) => {
    return (
        <CheckboxSetContext.Provider value={{ invalid, valid }}>
            <fieldset
                className={
                    "form-group" +
                    (required ? " is-required" : "")
                }
            >
                {children}
            </fieldset>
        </CheckboxSetContext.Provider>
    );
}

CheckboxSet.Legend = Legend;
CheckboxSet.Fields = Fields;
CheckboxSet.Help = Help;
CheckboxSet.InvalidFeedback = InvalidFeedback;
CheckboxSet.ValidFeedback = ValidFeedback;

export default CheckboxSet;