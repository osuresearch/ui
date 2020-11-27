import React from 'react';
import { IFormFieldContext } from '../../types';
export declare type SuccessProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Will automatically be provided by an HOC
     * @ignore
     */
    context?: React.Context<IFormFieldContext<any>>;
};
/**
 * Feedback for when the form component meets the validation rules.
 *
 * Will display when `success` is set in the parent form component
 *
 * Supports all
 * [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 * props.
 */
export declare function Success(props: SuccessProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map