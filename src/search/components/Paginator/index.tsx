
import React from 'react';
import useSearchProvider from '../../hooks/useSearchProvider';
import get from 'lodash/get';

import FirstPageButton from './FirstPageButton';
import PreviousPageButton from './PreviousPageButton';
import PageButton from './PageButton';
import NextPageButton from './NextPageButton';
import LastPageButton from './LastPageButton';
import CurrentStatus from './CurrentStatus';
import ResultsPerPage from './ResultsPerPage';

type Props = {
    /** The ID of the SearchProvider */
    provider: string;

    /** Content justification of the Paginator (justify-content) */
    justify?: 'start' | 'center' | 'end' | 'between' | 'around';

    /** Limit the number of page buttons displayed in the paginator */
    pageLimit?: number;

    /** The path to the property that contains the number of hits in the greater search context - defaults to `results.hits` */
    hitsPath?: string;
}

export default function Paginator({
    provider,
    justify = 'center',
    pageLimit = 5,
    hitsPath = 'results.hits'
}: Props) {
    const ctx = useSearchProvider(provider);

    const hits: number | undefined = get(ctx, hitsPath);

    const pageCount = hits ? Math.ceil(hits / ctx.limit) : 0;

    const pages = Array.from(Array(pageCount).keys());

    console.log(ctx);

    const currentPage = (ctx.offset + ctx.limit) / ctx.limit;
    console.log('current page', currentPage);

    const displayPages = pages.slice(currentPage - 1, pageLimit)

    const className = `search-paginator justify-content-${justify}`;

    if (hits) {
        return (
            <div className={className}>
                <nav aria-label="Search results pages">
                    <ul className="pagination">
                        <FirstPageButton ctx={ctx} />

                        <PreviousPageButton ctx={ctx} />

                        {displayPages?.map(page =>
                            <PageButton
                                key={page}
                                ctx={ctx}
                                page={page}
                            />
                        )}

                        <NextPageButton ctx={ctx} hits={hits} />

                        <LastPageButton
                            ctx={ctx}
                            hits={hits}
                            pageCount={pageCount}
                        />
                    </ul>
                </nav>

                <CurrentStatus ctx={ctx} hits={hits} />

                <ResultsPerPage provider={provider} />
            </div>
        );
    }

    return null;
}
