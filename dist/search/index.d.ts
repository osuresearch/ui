import React from 'react';
/**
 * Required props for a driver component provided to `Search.driver`
 */
export declare type DriverProps = {
    provider: string;
};
export declare type SearchDriver = React.FC<DriverProps>;
export declare type SearchTerms = string;
export interface IFilter {
    /** Human-readable name for this filter. If this is an AnyOf filter, there may be a name per value. */
    name?: string | string[];
}
export declare type TermValue = string | number | boolean;
export interface TermFilter extends IFilter {
    term: {
        [field: string]: TermValue;
    };
}
export interface AnyOfFilter extends IFilter {
    anyOf: {
        [field: string]: (string | number)[];
    };
}
export interface BetweenFilter extends IFilter {
    between: {
        [field: string]: {
            from: string | number;
            to: string | number;
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
export interface SortFields {
    /** Human readable name for this sort */
    name?: string;
    sort: SortField[];
}
export declare type SearchOffset = number;
export declare type SearchLimit = number;
/**
 * Factory method to create an `AndFilters` rule
 *
 * @param filters
 * @param name
 */
export declare function AND(filters: IFilter[], name?: string): AndFilters;
/**
 * Factory method to create an `OrFilters` rule
 *
 * @param filters
 * @param name
 */
export declare function OR(filters: IFilter[], name?: string): OrFilters;
/**
 * Factory method to create a `TermFilter` rule
 *
 * @param field
 * @param value
 * @param name
 */
export declare function term(field: string, value: TermValue, name?: string): TermFilter;
/**
 * Factory method to create an `AnyOfFilter` rule
 *
 * @param field
 * @param values
 * @param name
 */
export declare function anyOf(field: string, values: (string | number)[], name?: string | string[]): AnyOfFilter;
/**
 * Factory method to create a `BetweenFilter` rule
 *
 * @param field
 * @param from
 * @param to
 * @param name
 */
export declare function between(field: string, from: string | number, to: string | number, name?: string): BetweenFilter;
/**
 * Simple use case of sorting on a single field.
 *
 * ```ts
 * filters.sort(
 *  sort('Relevance', 'rank', 'desc')
 * )
 * ```
 */
export declare function sort(name: string, field: string, order?: SortOrder): SortFields;
export { default as SearchFilters } from './SearchFilters';
export type { ISearchContext, SearchContext } from './SearchContext';
export { default as SearchProvider } from './components/SearchProvider';
export { default as SearchDebugger } from './components/SearchDebugger';
export { default as SyncSearchWithURL } from './components/SyncSearchWithURL';
export { default as Filters } from './components/Filters';
export { default as useSearchProvider } from './hooks/useSearchProvider';
//# sourceMappingURL=index.d.ts.map