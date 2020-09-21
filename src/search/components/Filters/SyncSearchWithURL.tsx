

import React, { useEffect, useState } from 'react';
import useSearch from '../../hooks/useSearch';
import { IFilter, Sort } from '../..';

type Props = {
    id: string

    /** 
     * Query key prefix for every query key. This allows multiple sync
     * components to coexist for different search providers as long 
     * as each one uses a different prefix.
     * 
     * Suggest you keep this to one or two characters. 
     */
    prefix?: string
}

/**
 * Encode a serialized copy for safe inclusion in a URL
 */
function urlEncodeFilters(filters: IFilter[]): string {
    if (filters.length < 1) {
        return '';
    }

    const str = JSON.stringify(filters);
    return window.btoa(str);
}

/**
 * Decode from a URL into a new copy of SearchFilters
 * 
 * Will return undefined if the payload cannot be safely decoded
 */
function urlDecodeFilters(encoded: string): IFilter[] {
    try {
        const str = window.atob(encoded);
        const data = JSON.parse(str) as IFilter[];
        return data;
    } catch {
        // Silently ignore other decoding errors
    }

    return [];
}

function urlEncodeSort(sort: Sort | undefined): string {
    if (!sort) {
        return '';
    }

    const str = JSON.stringify(sort);
    return window.btoa(str);
}

function urlDecodeSort(encoded: string): Sort | undefined {
    if (encoded.length < 1) {
        return undefined;
    }

    try {
        const str = window.atob(encoded);
        const data = JSON.parse(str) as Sort;
        return data;
    } catch {
        // Silently ignore other decoding errors
    }

    return undefined;
}

/**
 * Monitors window.location for search data to update filters
 * and pushes updates to the location on search data changes
 */
const SyncSearchWithURL: React.FC<Props> = ({ id, prefix = '' }) => {
    const search = useSearch(id);
    const [init, setInit] = useState(true);
    
    // On update of search data, write to the address bar
    useEffect(() => {
        const url = new URL(window.location.href);

        const termsKey = prefix + 'q';
        const filtersKey = prefix + 'f';
        const sortKey = prefix + 's';

        if (!init) {
            // Update URI with current search terms/filters
            const terms = search.terms;
            const filters = urlEncodeFilters(search.filters);
            const sort = urlEncodeSort(search.sort);

            terms ? url.searchParams.set(termsKey, terms) : url.searchParams.delete(termsKey);
            filters ? url.searchParams.set(filtersKey, filters) : url.searchParams.delete(filtersKey);
            sort ? url.searchParams.set(sortKey, sort) : url.searchParams.delete(sortKey);
            
            // Replace (not push) our history state without a remote refresh
            window.history.replaceState(null, document.title, url.href);
        } else {
            // Load search terms/filters from the URI (if possible)
            setInit(false);

            const terms = url.searchParams.get(termsKey) || '';
            const filters = urlDecodeFilters(url.searchParams.get(filtersKey) || '');
            const sort = urlDecodeSort(url.searchParams.get(sortKey) || '');

            terms && search.setTerms(terms);
            filters && search.replaceFilters(filters);
            sort && search.setSort(sort);
        }
        
    }, [search, init, setInit]);

    return null;
}

export default SyncSearchWithURL;
