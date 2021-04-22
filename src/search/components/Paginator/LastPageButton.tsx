
import React from 'react';
import { ISearchContext } from '../../SearchContext';

type Props = {
    ctx: ISearchContext<any>;
    hits: number;
    pageCount: number
}

export default function LastPageButton({
    ctx,
    hits,
    pageCount
}: Props) {
    const noNextPage = (hits / (ctx.offset + ctx.limit)) <= 1;

    const goToLastPage = () => {
        ctx.setOffset((pageCount - 1) * ctx.limit);
    }

    return (
        <li
            className={`page-item page-navigation ${noNextPage ? 'disabled' : ''}`}
        >
            <button
                className="page-link"
                aria-label="Last"
                title="Last"
                onClick={goToLastPage}
                disabled={noNextPage}
            >
                &raquo;
            </button>
        </li>
    );
}
