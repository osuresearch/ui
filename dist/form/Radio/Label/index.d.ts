import React from 'react';
import { IFormFieldContext } from '../../../internal/FormCommon/types';
export declare type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    /**
     * Will automatically be provided by an HOC
     * @ignore
     */
    context?: React.Context<IFormFieldContext<any>>;
};
export default function Label(props: LabelProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map