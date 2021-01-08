import React from 'react';
import { SortFields } from '../../..';
export declare type Props = {
    /** Different sort options that a user can pick from */
    options: SortFields[];
    /** Title - must either be defined at the component level or in the parent `Filters.Group` */
    title?: string;
    name: string;
    /** Size - If needed, make the size of the select control large (lg) or small(sm) */
    size?: 'lg' | 'sm';
};
/**
 * Sort options for a search.
 *
 * Provide multiple `Sort` rules for the user to pick from.
 */
declare const SortBy: React.FC<Props>;
export default SortBy;
//# sourceMappingURL=index.d.ts.map