import React from 'react';
import { JsonObject } from '..';
import { Nullable } from '../../../internal/FormCommon/types';
export declare type Props = {
    /**
     * Additional class names to add to the component
     */
    className?: string;
    /**
     * Initial value to populate the lookup in uncontrolled mode.
     *
     * Use the `onChange` prop of `Lookup` to get value updates.
     */
    defaultValue?: Nullable<JsonObject>;
    resultRenderer: (result: JsonObject) => JSX.Element;
    /**
     * If provided, this will be rendered in place of the default
     * message when there are no hits.
     *
     * Implement this to customize user feedback and provide
     * helpful search tips when the user cannot find what
     * they are looking for.
     */
    emptyRenderer?: () => JSX.Element;
    resultJsonPath?: string;
    hitsJsonPath?: string;
    /**
     * Change handler for use with React Hook Form's `<Controller>`.
     *
     * **Do not use this directly. This is not supported for usage outside of RHF.**
     * **Use the `onChange` prop in `<Lookup>` instead.**
     */
    onChange?: (newValue: Nullable<JsonObject>) => void;
    /**
     * Blur handler for use with React Hook Form's `<Controller>`.
     *
     * **Do not use this directly. This is not supported for usage outside of RHF.**
     */
    onBlur?: () => void;
    /**
     * Controlled value for use with React Hook Form's `<Controller>`.
     *
     * **Do not use this directly. This is not supported for usage outside of RHF.**
     * **Use a combination of defaultValue and the `onChange` prop in `<Lookup>` instead.**
     */
    value?: Nullable<JsonObject>;
};
/**
 * Lookup input
 *
 * Based on W3C Combobox pattern: https://w3c.github.io/aria-practices/examples/combobox/grid-combo.html
 *
 */
declare const Input: React.FC<Props>;
export default Input;
//# sourceMappingURL=index.d.ts.map