import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../../internal/FormCommon/types';
import { InputProps } from './Input';
import { ICommonComposition } from '../../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string[]> & {};
interface IChipsComposition extends ICommonComposition {
    Input: React.FC<InputProps>;
}
export declare const Context: React.Context<IFormFieldContext<string[]>>;
/**
 * Chips is used to enter multiple values on an input field.
 */
declare const Chips: React.FC<Props> & IChipsComposition;
export default Chips;
//# sourceMappingURL=index.d.ts.map