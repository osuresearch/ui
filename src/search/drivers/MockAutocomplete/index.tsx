import React, { useEffect } from 'react';
import faker, { random, name, image } from 'faker';

import { AnyOfFilter, TermFilter, DriverProps } from '../..';
import useSearchProvider from '../../hooks/useSearchProvider';

/**
 * Search driver that generates mock results. This is really only
 * for showing off examples in Styleguidist.
 */
export default function MockAutocomplete() {
    const DriverComponent: React.FC<DriverProps> = ({
        provider
    }) => {
        const {
            terms, filters, sort, offset, limit,
            setResponse, setError, setSearching
        } = useSearchProvider(provider);

        const isEmpty = terms.length < 1 && filters.length < 1 && sort === undefined;
        const skipSearchAndClear = isEmpty;

        // Fire off a new query if anything in the search state changes
        useEffect(() => {
            if (skipSearchAndClear) {
                return;
            }

            const suggestions = [
                'Foo Bar',
                'Fizz Buzz',
                'and Something More',
                'and this is a really long suggestion that should overflow the page because it is so long but it is a really good suggestion that you should not ignore',
                'and this',
            ];

            let hits = suggestions.reduce((agg: any, suggestion) => {
                // Simple overlap algorithm between the suffix of
                // the current search string and the prefix of the
                // available suggestions
                var prefix = (terms || '').toLowerCase();
                var suffix = suggestion.toLowerCase();
                for (var s = suffix.length; s > 1; s--) {
                    if (prefix.endsWith(suffix.substring(0, s))) {
                        agg.push({
                            suggestion: suggestion,
                            highlight: '<em>' + suggestion.substring(0, s) + '</em>'
                                    + suggestion.substring(s)
                        });
                    }
                }

                return agg;
            }, []);

            const response = {
                hits: hits.length,
                results: hits.slice(offset, (limit + offset))
            }

            setSearching(false);
            setResponse(response);
        }, [terms, filters, sort, offset, limit, skipSearchAndClear, setSearching, setResponse]);

        // Replicated from GraphQL driver - for mock testing of the same behaviour
        useEffect(() => {
            if (skipSearchAndClear) {
                setSearching(false);
                setError(undefined);
                setResponse(undefined);
            }
        }, [skipSearchAndClear, setSearching, setError, setResponse]);

        // Driver components are renderless. It's just a stateful container
        return null;
    }

    return DriverComponent;
}
