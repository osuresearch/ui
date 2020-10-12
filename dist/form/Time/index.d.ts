import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { InputProps } from './Input';
import { ICommonComposition } from '../../internal/FormCommon/Components';
declare type Props = FormFieldProps<string> & {};
interface ITimeComposition extends ICommonComposition {
    Input: React.FC<InputProps>;
}
export declare const Context: React.Context<IFormFieldContext<string>>;
/**
 * Provides a time input.
 *
 * This component replicates the `<input type='time' />` Firefox/
 * Chrome element to work in all browsers.
 *
 * The component expects/returns an `hour:minutes` string in
 * 24-hour time format.
 */
declare const Time: React.FC<Props> & ITimeComposition;
export default Time;
//# sourceMappingURL=index.d.ts.map