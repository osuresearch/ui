import React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    /** Foo prop */
    foo?: number;
}
/**
 * `<Checkbox.Input />` sub-component.
 *
 * Accepts all
 * [HTMLInputElement attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
 * as props.
 */
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=index.d.ts.map