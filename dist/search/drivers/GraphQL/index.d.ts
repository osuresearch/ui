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
 */
export default function GraphQL(query: DocumentNode): React.FC<DriverProps>;
//# sourceMappingURL=index.d.ts.map