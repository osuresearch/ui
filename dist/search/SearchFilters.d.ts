import { AndFilters, IFilter, Sort } from '.';
/**
 * Immutable set of filters.
 *
 * Any mutation methods to the filters return a new modified copy.
 */
export default class SearchFilters {
    /** All top level filters are ANDed together */
    protected readonly m_Filters: AndFilters;
    /** Current search filter */
    protected m_Sort: Sort | undefined;
    constructor(initialFilters?: IFilter[]);
    /**
     * Get a readonly copy of the current filters
     */
    get filters(): IFilter[];
    /**
     * Get a readonly copy of the current sort rules
     */
    get sort(): Sort | undefined;
    /**
     * Add a new filter to the top level list of filters.
     *
     * If an existing filter exists with the same name, it will be replaced.
     */
    add<T extends IFilter>(filter: T): SearchFilters;
    get<T extends IFilter>(name: string, defaultValue?: T): T | undefined;
    has(name: string): boolean;
    /**
     * Remove a named filter and return a new immutable copy of this class
     */
    delete(name: string): SearchFilters;
    /**
     * Replace current sort rules and return a new immutable copy of this class
     */
    sortBy(sort: Sort | undefined): SearchFilters;
    clone(): SearchFilters;
}
//# sourceMappingURL=SearchFilters.d.ts.map