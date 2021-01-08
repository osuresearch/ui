import React from 'react';
import { KeyValuePairs } from '../Common';
export declare type Props = {
    name: string;
    /** Title - must either be defined at the component level or in the parent `Filters.Group` */
    title?: string;
    options: KeyValuePairs;
};
/**
 * Radioset of options where the user may only pick one.
 *
 * Each option is represented as a `Term` filter.
 */
declare const OneOf: React.FC<Props>;
export default OneOf;
//# sourceMappingURL=index.d.ts.map