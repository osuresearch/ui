import React from 'react';
import { ApolloClient, DocumentNode } from '@apollo/client';
import { DriverProps } from '../..';
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
export default function Apollo(query: DocumentNode, searchWhenEmpty?: boolean, client?: ApolloClient<any>): React.FC<DriverProps>;
//# sourceMappingURL=index.d.ts.map