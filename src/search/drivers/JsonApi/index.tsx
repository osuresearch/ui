import React, { useEffect, useState } from 'react';

import { DriverProps } from '../..';
import { JsonObject } from '../../../form/Lookup';
import { validateAndTransformJsonApiResponse } from '../../../internal/JsonApiUtility';
import useSearchProvider from '../../hooks/useSearchProvider';

type JsonApiResource = {
    type: string
    id: string
    attributes: {
        name: string

        // All other extra data
        [key: string]: unknown
    }
}

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
export default function JsonApi(endpoint: string) {
    const DriverComponent: React.FC<DriverProps> = ({
        provider
    }) => {
        const {
            terms,
            setError, setSearching, setResults
        } = useSearchProvider(provider);

        useEffect(() => {
            // Clear results on clearing search terms
            if (terms.length < 1) {
                setSearching(false);
                setError(undefined);
                setResults(undefined);
                return;
            }

            setSearching(true);

            // Not supported in IE11
            const abortController = window.AbortController !== undefined
                ? new window.AbortController()
                : undefined;

            const payload: RequestInit = {
                signal: abortController?.signal,
                method: 'GET',
                cache: 'no-cache',
                redirect: 'follow',
                headers: {
                    'Content-Type': 'application/vnd.api+json'
                }
            };

            console.debug('JSON:API Fetch', endpoint, terms, payload);
            fetch(`${endpoint}?q=${terms}`, payload)
                .then((res) => validateAndTransformJsonApiResponse(res))
                .then((json: any) => {
                    // Data gets reshaped to { hits, results } to be automatically
                    // supported by the Lookup form component.
                    const results = json.data as JsonApiResource[];
                    const hits = (json.meta?.total || results.length) as number;

                    setSearching(false);
                    setResults({ hits, results });
                })
                .catch((err) => {
                    if (err.name !== 'AbortError') {
                        setSearching(false);
                        setError(err.message);
                    }
                });

            return () => {
                abortController?.abort();
            }
        }, [endpoint, terms, setError, setSearching, setResults]);

        // Driver components are renderless. It's just a stateful container
        return null;
    }

    return DriverComponent;
}
