import React from 'react';
export declare type Props = {
    name: string;
    /** Prefix for the filter name */
    prefix: string;
    /** Title - must either be defined at the component level or in the parent `Filters.Group` */
    title?: string;
    /** HTML title attribute for the input */
    inputTitle?: string;
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