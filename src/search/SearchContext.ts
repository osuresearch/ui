import { Context, createContext } from 'react';
import { IFilter, SearchTerms, Sort } from '.';

/** A set of common states shared by search components */
export interface ISearchContext {
    /** Read-only copy of the current search terms */
    terms: SearchTerms

    /** Read-only copy of current search filters */
    filters: IFilter[]

    /** Current sort rules */
    sort: Sort | undefined

    /** Update search terms */
    setTerms(value: SearchTerms): void
    
    /** Update sort rules */
    setSort(sort: Sort | undefined): void

    // Filter operations
    addFilter(filter: IFilter): void

    /** Get a filter by name, returning defaultValue if it isn't set */
    getFilter<T extends IFilter>(name: string, defaultValue?: T): T | undefined

    /** Check if a filter with the given name exists */
    hasFilter(name: string): boolean

    /** Delete a filter with the given name */
    deleteFilter(name: string): void
    
    /** Replace the whole set of search filters with a new set */
    replaceFilters(filters: IFilter[]): void
}

/** Shorthand for typing a React Context storing search data */
export type SearchContext = Context<ISearchContext>;

/** Singleton storing all dynamic SearchContext instances during the app lifecycle */
const __dynamicContextMap = new Map<string, SearchContext>();

/**
 * Create a new dynamic SearchContext tied to a named provider
 */
export function initDynamicContext(provider: string, data: ISearchContext): SearchContext {
    // TODO: This *is* an implementation error for apps, but Styleguidist examples
    // need to be able to re-instantiate a provider when an example changes.
    // if (__dynamicContextMap.has(provider)) {
    //     throw new Error(
    //         `SearchProvider "${provider}" is already registered. Registering again is an implementation error.`
    //     );
    // }

    console.debug(`[initDynamicContext(${provider})]`, data);
    
    const context = createContext<ISearchContext>(data);
    __dynamicContextMap.set(provider, context);
    return context;
}

/**
 * Destroy a dynamic SearchContext by name
 */
export function destroyDynamicContext(provider: string) {
    console.debug(`[destroyDynamicContext(${provider})]`, __dynamicContextMap.get(provider));
    
    __dynamicContextMap.delete(provider);
}

/**
 * Get a dynamic SearchContext tied to a named provider.
 * 
 * @throws {Error} if the provider is not yet registered through a SearchProvider component
 */
export function getDynamicContext(provider: string): SearchContext {
    const context = __dynamicContextMap.get(provider);

    // Ensure it exists - for type safe useContext() calls.
    if (!context) {
        throw new Error(
            `Cannot get SearchContext for "${provider}". Are you missing the parent SearchProvider?`
        );
    }

    return context;
}
