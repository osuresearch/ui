
import React, { useState } from "react";
import useSearch from "../../hooks/useSearch";
import { Button, Icon } from "@oris/ui";

type Props = {
    id: string
}

/**
 * Print out the current state of search data. 
 * 
 * Useful for testing new components and state changes.
 */
const DebugSearch: React.FC<Props> = ({ id }) => {
    const [show, setShow] = useState(false);
    const { terms, filters, sort } = useSearch(id);
    
    // TODO: (TC-2) Add access controls 
    if (window.location.hostname === 'orapps.osu.edu') {
        return null;
    }

    return (
        <div>
            <Button theme="link" onClick={() => setShow(!show)}>
                🧪 Toggle Search Debug
            </Button>

            {show && 
            <div>
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
            </div>
            }
        </div>
    )
}

export default DebugSearch;
