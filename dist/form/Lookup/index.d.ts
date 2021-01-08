import React from 'react';
import { FormFieldProps, IFormFieldContext } from '../../internal/FormCommon/types';
import { Props as InputProps } from './Input';
import { ICommonComposition } from '../../internal/FormCommon/Components';
import { SearchDriver } from '../../search';
import './index.scss';
/**
 * Arbitrary string-keyed JSON object
 */
export declare type JsonObject = {
    [key: string]: unknown;
};
declare type Props = FormFieldProps<JsonObject> & {
    /**
     * Search provider to use for interacting with a search API.
     *
     * You MUST specify EITHER the `provider` or `driver` prop.
     */
    provider?: string;
    /**
     * Search driver to use for interacting with a search API.
     *
     * You MUST specify EITHER the `provider` or `driver` prop.
     */
    driver?: SearchDriver;
};
interface ILookupComposition extends ICommonComposition {
    /** Search input and selection */
    Input: React.FC<InputProps>;
}
declare type LookupContext = IFormFieldContext<JsonObject> & {
    provider: string;
};
export declare const Context: React.Context<LookupContext>;
/**
 * Lookup a value from a selection of options
 */
declare const Lookup: React.FC<Props> & ILookupComposition;
export default Lookup;
//# sourceMappingURL=index.d.ts.map