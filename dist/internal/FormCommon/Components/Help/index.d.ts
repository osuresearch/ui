import React from 'react';
import { IFormFieldContext } from '../../types';
export declare type HelpProps = React.HTMLAttributes<HTMLDivElement> & {
    /**
     * Will automatically be provided by an HOC
     * @ignore
     */
    context?: React.Context<IFormFieldContext<any>>;
};
/**
 * Additional (small) help text to go alongside the field
 *
 * Supports all
 * [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 * props.
 */
export declare function Help(props: HelpProps): JSX.Element;
//# sourceMappingURL=index.d.ts.map