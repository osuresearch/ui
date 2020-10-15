import React from 'react';
/**
 * Internal state data passed from <Search> to children via a context.
 */
export declare type SearchData = {
    loading: boolean;
    error?: string;
    results?: any[];
    totalResults?: number;
};
/**
 * Required props for a driver component provided to `Search.driver`
 */
export declare type DriverProps = {
    provider: string;
    updateSearchData: (data: SearchData) => void;
};
export declare type SearchDriver = React.FC<DriverProps>;
export declare type SearchTerms = string;
export interface IFilter {
    /** Human-readable name for this filter */
    name?: string;
}
export declare type TermValue = string | number | boolean;
export interface Term extends IFilter {
    term: {
        [field: string]: TermValue;
    };
}
export interface AnyOf extends IFilter {
    anyOf: {
        [field: string]: string[];
    };
}
export interface Between extends IFilter {
    between: {
        [field: string]: {
            from: string;
            to: string;
        };
    };
}
export interface AndFilters extends IFilter {
    AND: IFilter[];
}
export interface OrFilters extends IFilter {
    OR: IFilter[];
}
export declare type SortOrder = 'asc' | 'desc';
export interface SortField {
    /** The data field we're sorting on */
    field: string;
    /** What direction to sort */
    order: SortOrder;
}
/** Collection of fields to sort on */
export interface Sort {
    /** Human readable name for this sort */
    name?: string;
    sort: SortField[];
}
export declare function AND(filters: IFilter[], name?: string): AndFilters;
export declare function OR(filters: IFilter[], name?: string): OrFilters;
export declare function term(field: string, value: TermValue, name?: string): Term;
export declare function anyOf(field: string, values: string[], name?: string): AnyOf;
export declare function between(field: string, from: string, to: string, name?: string): Between;
/**
 * Simple use case of sorting on a single field.
 *
 * ```ts
 * filters.sort(
 *  sort('Relevance', 'rank', 'desc')
 * )
 * ```
 */
export declare function sort(name: string, field: string, order?: SortOrder): Sort;
export { default as SearchFilters } from './SearchFilters';
export type { ISearchContext, SearchContext } from './SearchContext';
export { default as SearchProvider } from './components/SearchProvider';
export { default as SearchDebugger } from './components/SearchDebugger';
export { default as SyncSearchWithURL } from './components/SyncSearchWithURL';
export { default as Search } from './components/Search';
export { default as Filters } from './components/Filters';
export { default as useSearch } from './hooks/useSearch';
//# sourceMappingURL=index.d.ts.map