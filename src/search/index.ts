import React from 'react';

/**
 * Internal state data passed from <Search> to children via a context.
 */
export type SearchData = {
    loading: boolean
    error?: string
    results?: any[]
}

//#region Driver interfaces

/**
 * Required props for a driver component provided to `Search.driver`
 */
export type DriverProps = {
    provider: string
    updateSearchData: (data: SearchData) => void
}

export type SearchDriver = React.FC<DriverProps>;

//#endregion

//#region Filter interfaces

export type SearchTerms = string;

export interface IFilter {
    /** Human-readable name for this filter */
    name?: string
}

export type TermValue = string | number | boolean;

export interface Term extends IFilter {
    term: {
        [field: string]: TermValue
    }
}

export interface AnyOf extends IFilter {
    anyOf: {
        [field: string]: string[]
    }
}

export interface Between extends IFilter {
    between: {
        [field: string]: {
            from: string
            to: string
        }
    }
}

export interface AndFilters extends IFilter {
    AND: IFilter[]
}

export interface OrFilters extends IFilter {
    OR: IFilter[]
}

//#endregion

//#region Sort interfaces

export type SortOrder = 'asc' | 'desc';

export interface SortField {
    /** The data field we're sorting on */
    field: string

    /** What direction to sort */
    order: SortOrder
}

/** Collection of fields to sort on */
export interface Sort {
    /** Human readable name for this sort */
    name?: string
    sort: SortField[]
}

//#endregion

//#region Filter vanity functions

export function AND(filters: IFilter[], name?: string): AndFilters {
    return {
        name, 
        AND: filters
    };
}

export function OR(filters: IFilter[], name?: string): OrFilters {
    return {
        name, 
        OR: filters
    };
}

export function term(field: string, value: TermValue, name?: string): Term {
    return {
        name,
        term: {
            [field]: value
        }
    }
}

export function anyOf(field: string, values: string[], name?: string): AnyOf {
    return {
        name,
        anyOf: {
            [field]: values,
        }
    }
}

export function between(field: string, from: string, to: string, name?: string): Between {
    return {
        name,
        between: {
            [field]: {
                from,
                to
            }
        }
    }
}

//#endregion

//#region Sort vanity functions

/**
 * Simple use case of sorting on a single field.
 * 
 * ```ts
 * filters.sort(
 *  sort('Relevance', 'rank', 'desc')
 * )
 * ```
 */
export function sort(name: string, field: string, order: SortOrder = 'desc'): Sort {
    return {
        name,
        sort: [{
            field,
            order
        }]
    };
}

//#endregion

//#region Public API 

// Data structures and types
export { default as SearchFilters } from './SearchFilters';
export type { ISearchContext, SearchContext } from './SearchContext';

// Components
export { default as SearchProvider } from './components/SearchProvider';
export { default as SearchDebugger } from './components/SearchDebugger';
export { default as SyncSearchWithURL } from './components/SyncSearchWithURL';
export { default as Search } from './components/Search';
export { default as Filters } from './components/Filters';

// Hooks
export { default as useSearch } from './hooks/useSearch';

// Drivers are not exported here - import specific ones from `@oris/ui/search/drivers`
// This allows us to safely load only the drivers that are needed in a project.
// (e.g. a non-GraphQL project doesn't need to worry about GraphQL drivers)

//#endregion
