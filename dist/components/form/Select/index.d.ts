import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../../internal/FormCommon/types';
import { ControlProps } from './Control';
import { OptionProps } from './Option';
import { ICommonComposition } from '../../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string> & {};
interface ISelectComposition extends ICommonComposition {
    /**
     * A control container for `<Select.Option>` children.
     *
     * Accepts all
     * [HTMLSelectElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
     * props.
     */
    Control: React.ForwardRefExoticComponent<ControlProps & React.RefAttributes<HTMLSelectElement>>;
    /**
     * An option nested in a `<Select.Control>`
     *
     * Requires *either* a `value` or `optionsBind` prop.
     *
     * Accepts all
     * [HTMLOptionElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
     * props.
     */
    Option: React.FC<OptionProps>;
}
export declare const Context: React.Context<IFormFieldContext<string>>;
/**
 * A styled Select drop-down component
 */
declare const Select: React.FC<Props> & ISelectComposition;
export default Select;
//# sourceMappingURL=index.d.ts.map