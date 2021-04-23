import React, { useEffect, useState } from 'react';
import { ApolloClient, DocumentNode, useLazyQuery } from '@apollo/client';

import { DriverProps, AND } from '../..';
import useSearchProvider from '../../hooks/useSearchProvider';

/**
 * Search driver that talks with GraphQL through the default Apollo client.
 *
 * The GraphQL query MUST support the following variables:
 *
 *  - `$terms: String!`
 *      - Full text search terms
 *  - `$filters: SearchFilters`
 *      - Set of filters to narrow down results.
 *      - The `name` of each filter is ignored by the backend.
 *      - You can omit this if you do not use filters in your searches.
 *  - `$sort: SearchSorting`
 *      - Sorting rules for the results.
 *      - You can omit this if you do not use sorting in your searches.
 *  - `$offset: number`
 *      - In combination with limit, determines which page results to display in pagination
 *      - `offset` is 0-indexed, so with a `limit=20` then `offset=20` will point to page 2, `offset=40` will be page 3, and so on.
 *      - You can omit this if you do not use pagination in your searches.
 *  - `$limit: number`
 *      - The number of results to return in the search
 *      - In combination with offset, determines which page results to display in pagination
 *      - You can omit this if you do not use pagination in your searches.
 *
 * The GraphQL types `SearchFilters` and `SearchSorting` are provided by the
 * [ORIS\GraphQL](https://code.osu.edu/ORIS/graphql) composer package.
 *
 * The *first* GraphQL field returned will be used for the results
 * and must return an array of type objects.
 *
 * @param {DocumentNode} query
 * @param {boolean} searchWhenEmpty If true, the driver will still execute a GraphQL query
 *                                  even if the terms, filters, and sort order are unset.
 *                                  (This also includes on initial mount). If false, the
 *                                  driver will *not* search unless there is at least one
 *                                  search parameter set (terms, filters, or sort). Additionally,
 *                                  the results in useSearchProvider() will be set to `undefined`.
 * @param {ApolloClient} client     An `ApolloClient` instance. By default this driver uses the
 *                                  client passed down via context.
 */
export default function Apollo(
    query: DocumentNode,
    searchWhenEmpty: boolean = true,
    client?: ApolloClient<any>
) {
    const DriverComponent: React.FC<DriverProps> = ({
        provider
    }) => {
        const {
            terms, filters, sort, offset, limit,
            setSearching, setError, setResults
        } = useSearchProvider(provider);

        const [callable, result] = useLazyQuery<{ [field: string]: any }>(query, {
            client
        });

        // Cached results from the previous search
        const [, setCached] = useState<any>();

        const isEmpty = terms.length < 1 && filters.length < 1 && sort === undefined;
        const skipSearchAndClear = isEmpty && searchWhenEmpty;

        // Fire off a new query if anything in the search state changes
        // TODO: Implicit throttling on term changes
        useEffect(() => {
            if (skipSearchAndClear) {
                return;
            }

            callable({
                variables: {
                    terms,
                    filters: filters.length > 0 ? AND(filters) : null,
                    sort,
                    limit,
                    offset
                }
            });
        }, [terms, filters, sort, limit, offset, callable, skipSearchAndClear]);

        // Store previous search results each time we make a query so we
        // can display these while still fetching fresh data in the background.
        useEffect(() => {
            setCached((prev: any) => {
                // Use previously cached results if we're still loading
                let results = prev;

                // If there's an error - make it human readable.
                let error: string | undefined = undefined;
                if (result.error) {
                    console.error('Apollo Search Driver Error', result.error);

                    if (result.error.graphQLErrors.length) {
                        error = result.error.graphQLErrors[0].message;
                    } else {
                        error = result.error.message;
                    }
                }

                /*
                    GraphQL can come back with any named query field -
                    but we only care about the value in that field.

                    Example 1:
                        query {
                            tools(terms: "foo") {
                                id
                                title
                            }
                        }

                        We only care about the `[{ id, title }]`
                        payload within `data.tools`.

                    Example 2:
                        query {
                            search(terms: "fizz") {
                                hits
                                maxRank
                                results {
                                    id
                                    rank
                                    name
                                }
                            }
                        }

                        We grab the full `{hits, maxRank, results: [...]}`
                        payload within `data.search`.
                */
                if (result.data !== undefined) {
                    const firstKey = Object.keys(result.data)[0];
                    results = result.data[firstKey];
                }

                setSearching(result.loading);
                setError(error);
                setResults(results);
                return results;
            });
        }, [result, skipSearchAndClear, setSearching, setError, setResults]);

        useEffect(() => {
            if (skipSearchAndClear) {
                setSearching(false);
                setError(undefined);
                setResults(undefined);
            }
        }, [skipSearchAndClear, setSearching, setError, setResults]);

        // Driver components are renderless. It's just a stateful container
        return null;
    }

    return DriverComponent;
}
