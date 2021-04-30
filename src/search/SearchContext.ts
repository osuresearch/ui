import React, { Context, createContext } from 'react';
import { IFilter, SearchTerms, SearchOffset, SearchLimit, SortFields } from '.';

/** A set of common states shared by search components */
export interface ISearchContext<TResponse> {
    /** Read-only copy of the current search terms */
    terms: SearchTerms

    /** Read-only copy of current search filters */
    filters: IFilter[]

    /** Current sort rules */
    sort: SortFields | undefined

    /** Current search offset */
    offset: SearchOffset

    /** Current search limit */
    limit: SearchLimit

    /** Search is being executed */
    searching: boolean

    /** Response from search. Structure depends on the backend. */
    response?: TResponse

    /** Error */
    error?: string

    /** Ref of the div that wraps around the children of the SearchProvider */
    ref: React.RefObject<HTMLDivElement>

    /** Update search terms */
    setTerms(value: SearchTerms): void

    /** Update sort rules */
    setSort(sort: SortFields | undefined): void

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

    /** Update the search offset */
    setOffset(offset: SearchOffset): void

    /** Update the search limit */
    setLimit(limit: SearchLimit): void

    /** Set searching state */
    setSearching(searching: boolean): void

    /** Set response payload */
    setResponse(results?: TResponse): void

    /** Set error */
    setError(error?: string): void;
}

/** Shorthand for typing a React Context storing search data */
export type SearchContext<TResponse> = Context<ISearchContext<TResponse>>;

/** Singleton storing all dynamic SearchContext instances during the app lifecycle */
const __dynamicContextMap = new Map<string, SearchContext<any>>();

/**
 * Create a new dynamic SearchContext tied to a named provider
 */
export function initDynamicContext<TResponse>(provider: string, data: ISearchContext<TResponse>): SearchContext<TResponse> {
    // TODO: This *is* an implementation error for apps, but Styleguidist examples
    // need to be able to re-instantiate a provider when an example changes.
    // if (__dynamicContextMap.has(provider)) {
    //     throw new Error(
    //         `SearchProvider "${provider}" is already registered. Registering again is an implementation error.`
    //     );
    // }

    console.debug(`[initDynamicContext(${provider})]`, data);

    const context = createContext<ISearchContext<TResponse>>(data);
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
export function getDynamicContext<TResponse>(provider: string): SearchContext<TResponse> {
    const context = __dynamicContextMap.get(provider);

    // Ensure it exists - for type safe useContext() calls.
    if (!context) {
        throw new Error(
            `Cannot get SearchContext for "${provider}". Are you missing the parent SearchProvider?`
        );
    }

    return context;
}
