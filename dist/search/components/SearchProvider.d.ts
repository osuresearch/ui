import React from 'react';
import { SearchFilters, SearchTerms, SearchDriver } from '..';
export declare type Props = {
    /**
     * Unique identifier used by components to reference this provider.
     * This allows an application to use multiple entangled search providers
     */
    id: string;
    /**
     * Default search terms to use when loading up the application.
     *
     * If `SyncSearchWithURL` is attached to this provider, the defaults
     * defined here will be overridden by the URL data.
     */
    defaultTerms?: SearchTerms;
    /**
     * Default search filters to use when loading up the application.
     *
     * If `SyncSearchWithURL` is attached to this provider, the defaults
     * defined here will be overridden by the URL data.
     */
    defaultFilters?: SearchFilters;
    /** The API integration driver to submit search data */
    driver: SearchDriver;
};
/**
 * Provider for a named set of search filters and queries.
 *
 * All search components **must** be associated
 * with a provider to share state information.
 */
declare const SearchProvider: React.FC<Props>;
export default SearchProvider;
//# sourceMappingURL=SearchProvider.d.ts.map