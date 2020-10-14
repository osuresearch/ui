
import React from 'react';

import createBuckets from './helpers/createBuckets';
import balanceBuckets from './helpers/balanceBuckets';

export interface Buckets {
    [key: string]: any;
}

type Props = {
    terms: string,
    results?: any[];
    categorizeBy: string;
    totalResults?: number;
    children: React.ReactElement;
}

const DisplayResults: React.FC<Props> = ({
    terms,
    results,
    categorizeBy,
    totalResults,
    children
}) => {
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
                <>
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
                </>
            );
        }
    }
    return null;
}

export default DisplayResults;
