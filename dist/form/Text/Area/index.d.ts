import React from 'react';
export declare type AreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    maxLength?: number;
    minLength?: number;
};
/**
 * Equivalent of `<textarea>`
 *
 * Accepts all
 * [HTMLTextAreaElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
 * props.
 */
declare const Area: React.ForwardRefExoticComponent<React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
    maxLength?: number | undefined;
    minLength?: number | undefined;
} & React.RefAttributes<HTMLTextAreaElement>>;
export default Area;
//# sourceMappingURL=index.d.ts.map