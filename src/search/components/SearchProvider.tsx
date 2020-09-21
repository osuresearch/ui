
import React, { useState, useEffect, useMemo } from 'react';
import { 
    SearchFilters, 
    initDynamicContext, 
    SearchContext, 
    destroyDynamicContext, 
    SearchTerms, 
    Sort,
    IFilter, 
    ISearchContext,
} from '../index';

export type Props = {
    id: string
    defaultTerms?: SearchTerms
    defaultFilters?: SearchFilters
}

/**
 * Provider for a named set of search filters and queries
 */
const SearchProvider: React.FC<Props> = ({ 
    id, 
    defaultTerms = '', 
    defaultFilters = undefined,
    children 
}) => {
    const [terms, setTerms] = useState<string>(defaultTerms);
    const [filters, setFilters] = useState<SearchFilters>(
        () => defaultFilters ? defaultFilters.clone() : new SearchFilters()
    );

    // Prepare for some magic.

    // The tl;dr: I'm dynamically creating named contexts stored in a
    // singleton map and providing each one mapped directly to a named (id) search provider.
    // This allows me to reuse a context structure for more than dataset, since each
    // provider needs its own unique set of search data to pass onto components.

    // Note that a change to `id` isn't supported here. Could potentially
    // add a useEffect on change but really it should be a usage error.
    // The callback argument for useState is done so that we don't overwrite an 
    // existing provider (only executes init once when initially setting up the state)
    const [context, ] = useState<SearchContext>(
        () => initDynamicContext(id, {} as ISearchContext)
    );

    // Destroy the dynamic context on unmount.
    useEffect(() => {
        return () => destroyDynamicContext(id);
    }, [id]);

    console.debug(`[SearchProvider(${id})] Redraw`, terms, filters);

    // TODO: Can totally memoize this whole thing off of terms & filters
    const contextValue = useMemo<ISearchContext>(() => ({
        terms,
        filters: filters.filters,
        sort: filters.sort,
        setTerms,
        setSort(sort: Sort | undefined) {
            setFilters((prev) => prev.sortBy(sort));
        },
        addFilter(filter: IFilter) {
            setFilters((prev) => prev.add(filter));
        },
        getFilter<T extends IFilter>(name: string, defaultValue?: T): T | undefined {
            return filters.get(name, defaultValue);
        },
        hasFilter(name: string): boolean {
            return filters.has(name);
        },
        deleteFilter(name: string) {
            setFilters((prev) => prev.delete(name));
        },
        replaceFilters(filters: IFilter[]) {
            setFilters(new SearchFilters(filters));
        },
    }), [terms, filters, setTerms, setFilters]);

    // Note this can't just be value={context} because we need to be
    // able to rewrite query/filters on state change.
    return (
        <context.Provider value={contextValue}>
            {children}
        </context.Provider>
    );
}

export default SearchProvider;
