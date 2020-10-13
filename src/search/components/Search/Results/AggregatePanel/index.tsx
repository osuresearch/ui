
import React from 'react';
import useSearch from '../../../../hooks/useSearch';

import createBuckets from './helpers/createBuckets';
import balanceBuckets from './helpers/balanceBuckets';
import Empty from '../../Empty';
import Error from '../../Error';

import './index.scss';

export interface Buckets {
    [key: string]: any;
}

export type Props = {
    provider: string;
    results?: any[];
    totalResults?: number;
    /**
     * 	JSON value to extract for categorizing results into multiple buckets.
     * Dot-notation can be used to select a nested JSON path.
     */
    categorizeBy: string;
    placeholder?: React.FC;
    children: React.ReactElement;
}

const AggregatePanel: React.FC<Props> = ({
    provider,
    results,
    totalResults,
    categorizeBy,
    placeholder,
    children
}) => {
    const { terms } = useSearch(provider);

    const renderCategory = (category: string, results: any[]) => {
        return (
            <div className="search-category">
                <div className="search-category-header">
                    {category}
                </div>
                <ul className="search-category-results">
                    {results.map((result, idx) =>
                        <li key={`search-result-${idx}`}>
                            {React.cloneElement(children, { result: result })}
                        </li>
                    )}
                </ul>
            </div>
        );
    }

    if (terms) {
        // At least one result came back
        if (results && results.length > 0) {
            // Bucket results based on categorizeBy
            const buckets = createBuckets(results, categorizeBy);

            // Split buckets into two columns, maximum of 5 buckets per column
            const leftKeys = Object.keys(buckets);
            leftKeys.splice(10);
            const rightKeys = leftKeys.splice(Math.ceil(leftKeys.length / 2));

            // Balance results in each column
            let leftBuckets: Buckets = {};
            leftKeys.forEach((key) => leftBuckets[key] = buckets[key]);
            leftBuckets = balanceBuckets(leftBuckets);

            let rightBuckets: Buckets = {};
            rightKeys.forEach((key) => rightBuckets[key] = buckets[key]);
            rightBuckets = balanceBuckets(rightBuckets);

            return (
                <div id={provider + '-results'} className="dropdown-menu search-aggregate-panel" role="listbox">
                    <div className="row">
                        <div className="col-6">
                            {leftKeys.map((key) => renderCategory(key, leftBuckets[key]))}
                        </div>
                        <div className="col-6">
                            {rightKeys.map((key) => renderCategory(key, rightBuckets[key]))}
                        </div>
                    </div>

                    {// If the total number of results exceeds the results array limit, display a prompt to narrow their search
                        totalResults && (totalResults - results.length) > 0 &&
                        <div className="dropdown-header">
                            There are <strong>{totalResults - results.length}</strong> additional
                                results. Please narrow your search.
                        </div>
                    }
                </div>
            );
        }

        return (<>
            <Empty>
                <div id={provider + '-results'} className="dropdown-menu search-aggregate-panel" role="listbox">
                    <div className="dropdown-header">
                        There are no matching results.
                    </div>
                </div>
            </Empty>

            <Error>
                <div id={provider + '-results'} className="dropdown-menu search-aggregate-panel" role="listbox">
                    <div className="dropdown-header">
                        <span className="lookup-error text-danger">
                            Something went wrong. Try reloading the page. If the problem persists,
                            contact <a href="mailto:orhelpdesk@osu.edu">orhelpdesk@osu.edu</a>
                        </span>
                    </div>
                </div>
            </Error>
        </>);
    }

    // Display placeholder
    if (placeholder) {
        const Placeholder = placeholder;
        return (
            <div id={provider + '-results'} className="dropdown-menu search-aggregate-panel" role="listbox">
                <Placeholder />
            </div>
        )
    }

    // Return null if there are no terms or placeholder
    return null;
}

export default AggregatePanel;
