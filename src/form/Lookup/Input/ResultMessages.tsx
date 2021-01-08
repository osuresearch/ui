
import React from 'react';
import { JsonObject } from '..';

type Props = {
    hits: JsonObject[],
    hasNoHits: boolean,
    hasMoreHits: boolean,
    totalHits: number,
    emptyRenderer?: () => JSX.Element,
    error: any
}

export default function ResultMessages({
    hits,
    hasNoHits,
    hasMoreHits,
    totalHits,
    emptyRenderer,
    error
}: Props) {
    return (
        <div role="alert">
            {hits.length > 0 &&
                <div className="sr-only">
                    {hits.length} hits in the listbox below.
                </div>
            }

            {error &&
                <div className="dropdown-header lookup-error">
                    {error}
                </div>
            }

            {hasNoHits && !emptyRenderer &&
                <div className="dropdown-header">
                    There are no hits.
                    Try different search terms.
                </div>
            }

            {hasNoHits && emptyRenderer && emptyRenderer()}

            {hasMoreHits &&
                <div className="dropdown-header">
                    There are <strong>{totalHits - hits.length}</strong> additional hits.
                        Refine your search terms.
                    </div>
            }
        </div>
    );
}
