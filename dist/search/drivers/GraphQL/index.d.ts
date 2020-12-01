import React from 'react';
import { DocumentNode } from '@apollo/client';
import { DriverProps } from '../..';
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
 *
 * @param {DocumentNode} query
 * @param {boolean} searchWhenEmpty If true, the driver will still execute a GraphQL query
 *                                  even if the terms, filters, and sort order are unset.
 *                                  (This also includes on initial mount). If false, the
 *                                  driver will *not* search unless there is at least one
 *                                  search parameter set (terms, filters, or sort). Additionally,
 *                                  the results in useSearch() will be set to `undefined`.
 *
 */
export default function GraphQL(query: DocumentNode, searchWhenEmpty?: boolean): React.FC<DriverProps>;
//# sourceMappingURL=index.d.ts.map