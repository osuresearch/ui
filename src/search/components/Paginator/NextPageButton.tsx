
import React from 'react';
import { ISearchContext } from '../../SearchContext';

type Props = {
    ctx: ISearchContext<any>;
    hits: number;
}

export default function NextPageButton({
    ctx,
    hits
}: Props) {
    const noNextPage = (hits / (ctx.offset + ctx.limit)) <= 1;

    const goToNextPage = () => {
        const next = ctx.offset + ctx.limit;

        if (next <= hits) {
            ctx.setOffset(next);

            window?.scrollTo(ctx.ref.current?.offsetTop ?? 0, 0);
        }
    }

    return (
        <li
            className={`page-item page-navigation ${noNextPage ? 'disabled' : ''}`}
        >
            <button
                className="page-link"
                aria-label="Next"
                title="Next"
                onClick={goToNextPage}
                disabled={noNextPage}
            >
                &rsaquo;
            </button>
        </li>
    );
}
