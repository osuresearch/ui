
import React from 'react';
import { ISearchContext } from '../../SearchContext';

type Props = {
    ctx: ISearchContext<any>
}

export default function FirstPageButton({ ctx }: Props) {
    const noPreviousPage = ctx.offset === 0;

    const goToFirstPage = () => {
        ctx.setOffset(0);

        window?.scrollTo({
            top: ctx.ref.current?.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    };

    return (
        <li
            className={`page-item page-navigation ${noPreviousPage ? 'disabled' : ''}`}
        >
            <button
                className="page-link"
                aria-label="First"
                title="First"
                onClick={goToFirstPage}
                disabled={noPreviousPage}
            >
                &laquo;
            </button>
        </li>
    );
}
