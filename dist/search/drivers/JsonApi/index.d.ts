import React from 'react';
import { DriverProps } from '../..';
/**
 * Search driver for [JSON:API](https://jsonapi.org/) compliant endpoints (e.g. https://orapps.osu.edu/api/v1/person)
 *
 * Terms are passed as the `?q=` query parameter.
 *
 * Not supported:
 * - Filters and sorting rules
 * - `included` and `links` JSON:API objects
 *
 * The `results` of the search will be an object in the shape of:
 *
 * ```ts
 * type JsonApiResult = {
 *  hits: number
 *  results: JsonApiResource[]
 * }
 * ```
 *
 * Where `JsonApiResource` conforms to [JSON:API Resource Objects](https://jsonapi.org/format/#document-resource-objects).
 *
 * If `meta.hits` is specified at the top level of the response JSON, then `hits` will be set to that value.
 * Otherwise, `hits` becomes the total number of objects in `results`.
 */
export default function JsonApi(endpoint: string): React.FC<DriverProps>;
//# sourceMappingURL=index.d.ts.map