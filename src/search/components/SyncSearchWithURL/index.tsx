
import React, { useEffect, useState } from 'react';
import useSearchProvider from '../../hooks/useSearchProvider';
import { IFilter, SortFields } from '../..';

type Props = {
    /** SearchProvider `id` to sync the URL parameters */
    provider: string

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

function urlEncodeSort(sort: SortFields | undefined): string {
    if (!sort) {
        return '';
    }

    const str = JSON.stringify(sort);
    return window.btoa(str);
}

function urlDecodeSort(encoded: string): SortFields | undefined {
    if (encoded.length < 1) {
        return undefined;
    }

    try {
        const str = window.atob(encoded);
        const data = JSON.parse(str) as SortFields;
        return data;
    } catch {
        // Silently ignore other decoding errors
    }

    return undefined;
}

/**
 * Allows a user to bookmark or share searches for an application.
 *
 * When the search data (terms, filters, sorting, limit, offset) changes, the current address
 * is updated via the `History.ReplaceState` API to contain a serialized copy
 * of the search data.
 *
 * If the user bookmarks (or shares) the URL, the same search data will
 * be loaded on next visit.
 *
 * This also means you need to safely handle access-based search filtering on the
 * backend. E.g. if an admin shares a link that contains an `adminOnlyData`
 * search filter, then the user they shared that with may also potentially send
 * that filter to the server as well.
 */
const SyncSearchWithURL: React.FC<Props> = ({ provider, prefix = '' }) => {
    const search = useSearchProvider(provider);
    const [init, setInit] = useState(true);

    // On update of search data, write to the address bar
    useEffect(() => {
        const url = new URL(window.location.href);

        const termsKey = prefix + 'q';
        const filtersKey = prefix + 'f';
        const sortKey = prefix + 's';
        const offsetKey = prefix + 'o';
        const limitKey = prefix + 'l';

        if (!init) {
            // Update URI with current search terms/filters
            const terms = search.terms;
            const filters = urlEncodeFilters(search.filters);
            const sort = urlEncodeSort(search.sort);
            const offset = search.offset;
            const limit = search.limit;

            terms ? url.searchParams.set(termsKey, terms) : url.searchParams.delete(termsKey);
            offset ? url.searchParams.set(offsetKey, offset.toString()) : url.searchParams.delete(offsetKey);
            limit ? url.searchParams.set(limitKey, limit.toString()) : url.searchParams.delete(limitKey);
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
            const offset = url.searchParams.get(offsetKey);
            const limit = url.searchParams.get(limitKey);

            terms && search.setTerms(terms);
            filters.length > 0 && search.replaceFilters(filters);
            sort && search.setSort(sort);
            offset && search.setOffset(parseInt(offset));
            limit && search.setOffset(parseInt(limit));
        }

    }, [search, init, setInit]);

    return null;
}

export default SyncSearchWithURL;
