import React from 'react';
import { DriverProps } from '../..';
/**
 * Search driver for [JSON:API](https://jsonapi.org/) compliant endpoints (e.g. https://orapps.osu.edu/api/v1/person)
 *
 * Terms are passed as the `?q=` query parameter.
 *
 * Additional paramaters may be passed in the second argument as an
 * array of key-value objects, e.g.
 * ```ts
 * [
 *  {
 *      key: 'some-key',
 *      value: 'some value'
 *  }
 * ]
 * ```
 * which will construct a URL like `https://orapps.osu.edu/api/v1/person?q=terms&some-key=some%20value`.
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
export default function JsonApi(endpoint: string, params?: Array<{
    key: string;
    value: string;
}>): React.FC<DriverProps>;
//# sourceMappingURL=index.d.ts.map