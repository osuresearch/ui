import React, { useEffect, useState } from 'react';
import { DocumentNode, useLazyQuery } from '@apollo/client';

import { DriverProps, SearchData, AND } from '../..';
import useSearch from '../../hooks/useSearch';

/** Loose typing for GQL search results */
type GraphQLSearchResponse = {
    [resultsField: string]: any[]
}

/**
 * Search driver that talks with GraphQL through the default Apollo client.
 *
 * The GraphQL query requires the following variables:
 *
 *  - `$terms: String!`
 *      - Full text search terms
 *  - `$filters: SearchFilters`
 *      - Set of filters to narrow down results.
 *        The `name` of each filter is ignored by the backend.
 *  - `$sort: SearchSorting`
 *      - Sorting rules for the results
 *
 * The *first* GraphQL field returned will be used for the results
 * and must return an array of type objects.
 */
export default function GraphQL(query: DocumentNode) {
    const DriverComponent: React.FC<DriverProps> = ({
        provider,
        updateSearchData
    }) => {
        const { terms, filters, sort } = useSearch(provider);
        const [callable, result] = useLazyQuery<GraphQLSearchResponse>(query);
        const [, setCached] = useState<SearchData>();

        // Fire off a new query if anything in the search state changes
        useEffect(() => {
            callable({
                variables: {
                    terms,
                    filters: filters.length > 0 ? AND(filters) : null,
                    sort,
                }
            });
        }, [terms, filters, sort, callable]);

        // Store previous search results each time we make a query so we
        // can display these while still fetching fresh data in the background.
        useEffect(() => {
            setCached((prev) => {
                const data: SearchData = {
                    loading: result.loading,
                    results: prev?.results
                };

                if (result.error) {
                    console.error('GraphQL Search Driver Error', result.error);

                    // TODO: Better errors? We don't really display this on the frontend anywhere.
                    data.error = 'Something went wrong';
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
                                totalHits
                                maxRank
                                hits {
                                    id
                                    rank
                                    name
                                }
                            }
                        }

                        We grab the full `{totalHits, maxRank, hits: [...]}`
                        payload within `data.search`.
                */
                if (result.data !== undefined) {
                    const firstKey = Object.keys(result.data)[0];
                    data.results = result.data[firstKey];
                }

                updateSearchData(data);
                return data;
            });
        }, [result, updateSearchData]);

        // Driver components are renderless. It's just a stateful container
        return null;
    }

    return DriverComponent;
}
