import React from 'react';
import { KeyValuePairs } from '../Common';
export declare type Props = {
    options: KeyValuePairs;
    /**
     * Values to set to the filter per option. If omitted, boolean `true` will be used instead.
     */
    values?: KeyValuePairs;
    /**
     * Toggle group name.
     *
     * This does not typically need to match any backend field
     * as all toggle fields are individual terms combined with `AND/OR`
     */
    name: string;
    /** Title - must either be defined at the component level or in the parent `Filters.Group` */
    title?: string;
    /**
     * Minimum options displayed before the clear button is also displayed.
     */
    minimumOptionsForClearButton?: number;
    /**
     * How should individual terms be combined
     */
    operator?: 'AND' | 'OR';
};
/**
 * Batch of multiple <Toggle> components matching to an enumeration
 * between filter names and titles. Each filter will be set as a boolean
 * `true` value when checked, or deleted when unchecked.
 */
declare const Toggles: React.FC<Props>;
export default Toggles;
//# sourceMappingURL=index.d.ts.map