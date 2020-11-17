import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../../internal/FormCommon/types';
import { InputProps } from './Input';
import { ICommonComposition } from '../../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string[]> & {};
interface IDropdownComposition extends ICommonComposition {
    Input: React.FC<InputProps>;
}
export declare const Context: React.Context<IFormFieldContext<string[]>>;
/**
 * Dropdown is used to select an item from a collection of options.
 */
declare const Dropdown: React.FC<Props> & IDropdownComposition;
export default Dropdown;
//# sourceMappingURL=index.d.ts.map