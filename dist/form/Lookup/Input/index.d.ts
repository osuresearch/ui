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
};
/**
 * Lookup input
 */
declare const Input: React.FC<Props>;
export default Input;
//# sourceMappingURL=index.d.ts.map