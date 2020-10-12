import React from 'react';
export declare type Props = {
    name: string;
    /** Prefix displayed in the pill for this filter */
    prefix: string;
    /** HTML title attribute for the input */
    title?: string;
    /** HTML input placeholder */
    placeholder?: string;
};
/**
 * Match an exact value for a given field.
 *
 * The display name of the filter will be in the form of `{prefix}: "{value}"`.
 * For example: `Protocol: "2019H0023"`
 */
declare const Match: React.FC<Props>;
export default Match;
//# sourceMappingURL=index.d.ts.map