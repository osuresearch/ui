import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { InputProps } from './Input';
import { ICommonComposition } from '../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string[] | string> & {};
interface IAutoCompleteComposition extends ICommonComposition {
    Input: React.FC<InputProps>;
}
export declare const Context: React.Context<IFormFieldContext<string | string[]>>;
/**
 * AutoComplete is an input component that provides real-time suggestions when being typed.
 */
declare const AutoComplete: React.FC<Props> & IAutoCompleteComposition;
export default AutoComplete;
//# sourceMappingURL=index.d.ts.map