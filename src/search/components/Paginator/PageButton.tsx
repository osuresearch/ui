
import React from 'react';
import { ISearchContext } from '../../SearchContext';

type Props = {
    ctx: ISearchContext<any>;
    page: number;
}

export default function PageButton({
    ctx,
    page
}: Props) {
    const isActive = (pageNumber: number) => {
        return ((ctx.offset + ctx.limit) / ctx.limit) === pageNumber;
    }

    const handlePageChange = (pageNumber: number) => {
        ctx.setOffset((pageNumber - 1) * ctx.limit);

        window?.scrollTo({
            top: ctx.ref.current?.offsetTop,
            left: 0,
            behavior: 'smooth'
        });
    }

    return (
        <li
            className={`page-item ${isActive(page + 1) ? 'active' : ''}`}
        >
            <button
                className="page-link"
                onClick={() => handlePageChange(page + 1)}
            >
                {page + 1}
            </button>
        </li>
    );
}