
import { AND, AndFilters, IFilter, Sort } from '.';

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

    // TODO: Just slap terms in here too instead of tracking separately?

    constructor(initialFilters: IFilter[] = []) {
        this.m_Filters = AND(initialFilters);
    }

    /**
     * Get a readonly copy of the current filters
     */
    public get filters(): IFilter[] {
        return this.m_Filters.AND;
    }

    /**
     * Get a readonly copy of the current sort rules
     */
    public get sort(): Sort | undefined {
        return this.m_Sort;
    }

    /**
     * Add a new filter to the top level list of filters.
     * 
     * If an existing filter exists with the same name, it will be replaced.
     */
    public add<T extends IFilter>(filter: T): SearchFilters {
        const clone = this.clone();

        // In-place replace if an existing filter matches the name
        for (let i = 0; i < clone.m_Filters.AND.length; i++) {
            if (clone.m_Filters.AND[i].name === filter.name) {
                clone.m_Filters.AND[i] = filter;
                return clone;
            }
        }
        
        // Otherwise - insert at the end as a new filter.
        clone.m_Filters.AND.push(filter);
        return clone;
    }

    public get<T extends IFilter>(name: string, defaultValue?: T): T | undefined {
        return (this.m_Filters.AND.find((f) => f.name === name) as T) ?? defaultValue;
    }

    public has(name: string): boolean {
        return this.get(name) !== undefined;
    }

    /**
     * Remove a named filter and return a new immutable copy of this class
     */
    public delete(name: string): SearchFilters {
        const clone = this.clone();
        
        clone.m_Filters.AND = clone.m_Filters.AND.filter(
            (f) => f.name !== name
        );

        return clone;
    }

    /**
     * Replace current sort rules and return a new immutable copy of this class
     */
    public sortBy(sort: Sort | undefined): SearchFilters {
        const clone = this.clone();

        // Deep(ish) copy the input sort
        if (!sort) {
            clone.m_Sort = undefined;
        } else {
            clone.m_Sort = {
                name: sort.name,
                sort: [...sort.sort]
            }
        }

        return clone;
    }

    public clone(): SearchFilters {
        const clone = new SearchFilters();

        // TODO: actual deep copy. This'll at least deref the 
        // parentmost array so that anything monitoring the full
        // set of filters will get a new object ref
        clone.m_Filters.AND = [...this.m_Filters.AND];

        // TODO: Deep copy.
        clone.m_Sort = this.m_Sort;

        // Could be resolved via: https://reactjs.org/docs/update.html
        // (Specifically https://github.com/kolodny/immutability-helper)

        return clone;
    }
}
