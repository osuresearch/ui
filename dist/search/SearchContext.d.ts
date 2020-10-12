import { Context } from 'react';
import { IFilter, SearchTerms, Sort } from '.';
/** A set of common states shared by search components */
export interface ISearchContext {
    /** Read-only copy of the current search terms */
    terms: SearchTerms;
    /** Read-only copy of current search filters */
    filters: IFilter[];
    /** Current sort rules */
    sort: Sort | undefined;
    /** Update search terms */
    setTerms(value: SearchTerms): void;
    /** Update sort rules */
    setSort(sort: Sort | undefined): void;
    addFilter(filter: IFilter): void;
    /** Get a filter by name, returning defaultValue if it isn't set */
    getFilter<T extends IFilter>(name: string, defaultValue?: T): T | undefined;
    /** Check if a filter with the given name exists */
    hasFilter(name: string): boolean;
    /** Delete a filter with the given name */
    deleteFilter(name: string): void;
    /** Replace the whole set of search filters with a new set */
    replaceFilters(filters: IFilter[]): void;
}
/** Shorthand for typing a React Context storing search data */
export declare type SearchContext = Context<ISearchContext>;
/**
 * Create a new dynamic SearchContext tied to a named provider
 */
export declare function initDynamicContext(provider: string, data: ISearchContext): SearchContext;
/**
 * Destroy a dynamic SearchContext by name
 */
export declare function destroyDynamicContext(provider: string): void;
/**
 * Get a dynamic SearchContext tied to a named provider.
 *
 * @throws {Error} if the provider is not yet registered through a SearchProvider component
 */
export declare function getDynamicContext(provider: string): SearchContext;
//# sourceMappingURL=SearchContext.d.ts.map