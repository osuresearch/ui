import React from 'react';
import { IFormFieldContext } from '../../types';
export declare type LabelProps = React.LabelHTMLAttributes<HTMLLabelElement> & {
    /**
     * Will automatically be provided by an HOC
     * @ignore
     */
    context?: React.Context<IFormFieldContext<any>>;
};
/**
 * Primary instructions for filling out a field
 *
 * Supports all
 * [HTMLLabelElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
 * props.
 */
export declare function Label(props: LabelProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map