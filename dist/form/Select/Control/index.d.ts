import React from 'react';
import { OptionProps } from '../Option';
export declare type ControlProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
    children: React.ReactElement<OptionProps>[] | React.ReactElement<OptionProps>;
};
/**
 * A control container for `<Select.Option>` children.
 *
 * Accepts all
 * [HTMLSelectElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
 * props.
 */
declare const Control: React.ForwardRefExoticComponent<React.SelectHTMLAttributes<HTMLSelectElement> & {
    children: React.ReactElement<OptionProps>[] | React.ReactElement<OptionProps>;
} & React.RefAttributes<HTMLSelectElement>>;
export default Control;
//# sourceMappingURL=index.d.ts.map