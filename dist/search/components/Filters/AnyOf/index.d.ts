import React from 'react';
export declare type Props = {
    name: string;
    options: string[];
    /** Title - must either be defined at the component level or in the parent `Filters.Group` */
    title?: string;
    /**
     * Minimum options displayed before the clear button is also included.
     *
     * It's not included by default because it doesn't make sense for one or two options.
     */
    minimumOptionsForClearButton?: number;
};
/**
 * Enumeration of options that get combined together into a single `AnyOf` filter.
 *
 * Only supports strings for keys.
 */
declare const AnyOf: React.FC<Props>;
export default AnyOf;
//# sourceMappingURL=index.d.ts.map