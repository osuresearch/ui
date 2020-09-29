import React from 'react';
import { IFormFieldContext } from '../../../internal/FormCommon/types';
export declare type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    /** Will automatically be provided by an HOC */
    context?: React.Context<IFormFieldContext<any>>;
};
declare const Label: React.FC<LabelProps>;
export default Label;
//# sourceMappingURL=index.d.ts.map