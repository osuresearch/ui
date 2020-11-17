import React from 'react';
import { IFieldBind } from '../../../../internal/FormCommon/types';
import '../../../../internal/FormCommon/style.scss';
export interface OptionKeyValuePair {
    [key: string]: string;
}
export declare type OptionProps = React.OptionHTMLAttributes<HTMLOptionElement> & {
    /**
     * FieldBind that contains an enumeration of key/value pairs.
     */
    optionsBind?: IFieldBind<OptionKeyValuePair>;
    children?: string;
};
/**
 * An option nested in a `<Select.Control>`
 *
 * Requires *either* a `value` or `optionsBind` prop.
 *
 * Accepts all
 * [HTMLOptionElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 * props.
 */
declare const Option: React.FC<OptionProps>;
export default Option;
//# sourceMappingURL=index.d.ts.map