
import React, { useState } from "react";
import { Button } from "../..";
import useSearchProvider from "../hooks/useSearchProvider";

import './SearchDebugger.scss';

type Props = {
    /** SearchProvider `id` to attach the debugger to */
    provider: string
}

/**
 * Print out the current state of search data.
 *
 * Useful for testing new components and state changes.
 */
const SearchDebugger: React.FC<Props> = ({ provider }) => {
    const [show, setShow] = useState(false);
    const {
        terms, filters, sort, offset, limit,
        searching, error, response
    } = useSearchProvider(provider);

    return (
        <div className="search-debugger">
            <Button theme="link" onClick={() => setShow(!show)}>
                🧪 Toggle Search Debugger
            </Button>

            {show &&
            <div>
                <strong>Searching: </strong> {searching ? 'Yes' : 'No'}
                <br/>

                <strong>Error: </strong> {error}
                <br/>

                <strong>Full Text Terms</strong>
                <p>{terms}</p>

                <strong>Filters</strong>
                <pre>
                    {JSON.stringify(filters, undefined, 2)}
                </pre>

                <strong>Sort</strong>
                <pre>
                    {JSON.stringify(sort, undefined, 2)}
                </pre>
                <strong>Offset:</strong> {offset}
                <br/>
                <strong>Limit:</strong> {limit}
                <br/>

                <strong>Results</strong>
                <pre>
                    {JSON.stringify(response, undefined, 2)}
                </pre>
            </div>
            }
        </div>
    )
}

export default SearchDebugger;
