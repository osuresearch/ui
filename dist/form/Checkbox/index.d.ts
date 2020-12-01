import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { InputProps } from './Input';
import { LabelProps } from './Label';
import { ICommonComposition } from '../../internal/FormCommon/Components';
declare type Props = FormFieldProps<boolean> & {};
interface ICheckboxComposition extends Omit<ICommonComposition, 'Label'> {
    /**
     * `<Checkbox.Input />` sub-component.
     *
     * Accepts all
     * [HTMLInputElement attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
     * as props.
     */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
    Label: React.FC<LabelProps>;
}
export declare const Context: React.Context<IFormFieldContext<boolean>>;
/**
 * A single checkbox.
 *
 * Requires `<Checkbox.Input />` and `<Checkbox.Label />` child components.
 */
declare const Checkbox: React.FC<Props> & ICheckboxComposition;
export default Checkbox;
//# sourceMappingURL=index.d.ts.map