import React from 'react';
import { IFormFieldContext } from '../../types';
export declare type ErrorProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Will automatically be provided by an HOC
     * @ignore
     */
    context?: React.Context<IFormFieldContext<any>>;
};
/**
 * Provides instructions on how to resolve a validation error.
 *
 * Will display when error is set in the parent form component or
 * the parent's `bind` prop is in an error state.
 *
 * Supports all
 * [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 * props.
 */
export declare function Error(props: ErrorProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map