import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { LegendProps, HelpProps, ErrorProps, SuccessProps } from '../../internal/FormCommon/Components';
import { InlineProps } from './Inline';
interface IFieldSetComposition {
    /**
     * Serves as a label for all of the components in the
     * `FieldSet`
     */
    Legend: React.FC<LegendProps>;
    /** Display the form components inline */
    Inline: React.FC<InlineProps>;
    /** Help text for the `<FieldSet>` */
    Help: React.FC<HelpProps>;
    /**
     * (required if `<FieldSet>` requires validation)
     *
     * Provides instructions on how to resolve the validation
     * error; will display when `error` is set in `<FieldSet>`
    */
    Error: React.FC<ErrorProps>;
    /**
     * Feedback for when the set meets the validation rules;
     * will display when `success` is set in `<FieldSet>`
     */
    Success: React.FC<SuccessProps>;
}
declare type Props = FormFieldProps<string> & {
    /**
     * The value of the `name` prop will cascade down to be the
     * `name` in each child component in the `<FieldSet>`.
     */
    name?: string;
    children: React.ReactElement[] | React.ReactElement;
};
export declare const Context: React.Context<IFormFieldContext<string>>;
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
declare const FieldSet: React.FC<Props> & IFieldSetComposition;
export default FieldSet;
//# sourceMappingURL=index.d.ts.map