import React from 'react';
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value?: string | number;
}
/**
 * Styled equivalent of `<input type="radio"/>`
 *
 * Additional accepted props:
 *  * [`radio` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Additional_attributes)
 *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
 *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
 */
declare const Input: React.ForwardRefExoticComponent<InputProps & React.RefAttributes<HTMLInputElement>>;
export default Input;
//# sourceMappingURL=index.d.ts.map