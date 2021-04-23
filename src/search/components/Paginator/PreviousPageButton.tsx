
import React from 'react';
import { ISearchContext } from '../../SearchContext';

type Props = {
    ctx: ISearchContext<any>
}

export default function PreviousPageButton({ ctx }: Props) {
    const noPreviousPage = ctx.offset === 0;

    const goToPreviousPage = () => {
        const previous = ctx.offset - ctx.limit;

        if (previous >= 0) {
            ctx.setOffset(previous);

            window?.scrollTo({
                top: ctx.ref.current?.offsetTop,
                left: 0,
                behavior: 'smooth'
            });
        }
    }

    return (
        <li
            className={`page-item page-navigation ${noPreviousPage ? 'disabled' : ''}`}
        >
            <button
                className="page-link"
                aria-label="Previous"
                title="Previous"
                onClick={goToPreviousPage}
                disabled={noPreviousPage}
            >
                &lsaquo;
            </button>
        </li>
    );
}
