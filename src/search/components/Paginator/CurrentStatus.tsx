
import React from 'react';
import { ISearchContext } from '../../SearchContext';

type Props = {
    ctx: ISearchContext<any>;
    hits: number;
}

export default function CurrentStatus({
    ctx,
    hits
}: Props) {
    const offsetAndLimit = ctx.offset + ctx.limit;

    const total = offsetAndLimit < hits ? offsetAndLimit : hits;

    return (
        <div className="current-status">
            Showing {ctx.offset + 1} to {total} of {hits}
        </div>
    );
}