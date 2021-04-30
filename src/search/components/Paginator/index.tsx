
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

    /**
     * The path to the property in the response that contains the number
     * of hits in the greater search context
     */
    hitsPath?: string;
}

export default function Paginator({
    provider,
    justify = 'center',
    pageLimit = 5,
    hitsPath = 'hits'
}: Props) {
    const ctx = useSearchProvider(provider);

    const hits: number | undefined = get(ctx.response, hitsPath);

    const pageCount = hits ? Math.ceil(hits / ctx.limit) : 0;

    const pages = Array.from(Array(pageCount).keys());

    const currentPage = (ctx.offset + ctx.limit) / ctx.limit;

    /**
     * Limit the display of pages when the number of pages
     * exceeds the maximum number allowed per the
     * pageLimit property
     */
    let displayPages = pages;

    if (pages.length > pageLimit) {
        const halfOfLimit = Math.ceil(pageLimit / 2);

        if (currentPage < halfOfLimit) {
            /**
             * Until the current page is half of the page
             * limit, display the pages from page 1 to
             * the page limit
             */
            displayPages = displayPages.slice(0, pageLimit);
        } else if (currentPage >= halfOfLimit && currentPage < (pages.length - halfOfLimit)) {
            /**
             * Once the current page reaches half of the
             * page limit, display the page number in the
             * center of the paginator
             */
            displayPages = displayPages.slice(currentPage - halfOfLimit, pageLimit + (currentPage - halfOfLimit))
        } else {
            /**
             * Once the number of pages left equals the
             * page limit, mirror the first condition
             */
            displayPages = displayPages.slice(pages.length - pageLimit, pages.length)
        }
    }

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
