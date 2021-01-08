import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { InputProps } from './Input';
import { ICommonComposition } from '../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string[]> & {};
interface IMultiSelectComposition extends ICommonComposition {
    Input: React.FC<InputProps>;
}
export declare const Context: React.Context<IFormFieldContext<string[]>>;
/**
 * MultiSelect is used to select multiple items from a collection.
 */
declare const MultiSelect: React.FC<Props> & IMultiSelectComposition;
export default MultiSelect;
//# sourceMappingURL=index.d.ts.map