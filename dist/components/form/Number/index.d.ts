import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../../internal/FormCommon/types';
import { InputProps } from './Input';
import { ICommonComposition } from '../../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string> & {};
interface INumberComposition extends ICommonComposition {
    /**
     * Equivalent of `<input type='number'>`
     *
     * Accepts all
     * [HTMLInputElement attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
     * as props.
     */
    Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
}
export declare const Context: React.Context<IFormFieldContext<string>>;
/**
 * Numeric input
 */
declare const Number: React.FC<Props> & INumberComposition;
export default Number;
//# sourceMappingURL=index.d.ts.map