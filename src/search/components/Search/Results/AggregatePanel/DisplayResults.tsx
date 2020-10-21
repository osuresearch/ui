
import React from 'react';

import RenderCategory from './RenderCategory';
import createBuckets from './helpers/createBuckets';
import balanceBuckets from './helpers/balanceBuckets';
import Icon from '../../../../../components/Icon';

export interface Buckets {
    [key: string]: any;
}

type Props = {
    terms: string,
    results?: any[];
    categorizeBy: string;
    categoryHeaderWrapper?: React.FC;
    children: React.ReactElement;
}

const DisplayResults: React.FC<Props> = ({
    terms,
    results,
    categorizeBy,
    categoryHeaderWrapper,
    children
}) => {
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
                <div className="row">
                    <div className="col-1 search-icon">
                        <Icon name="search" />
                    </div>
                    <div className="col-5">
                        {leftKeys.map((key, i) => (
                            <RenderCategory
                                key={`${key}-left-${i}`}
                                category={key}
                                categoryHeaderWrapper={categoryHeaderWrapper}
                                results={leftBuckets[key]}
                            >
                                {children}
                            </RenderCategory>
                        ))}
                    </div>
                    <div className="col-5">
                        {rightKeys.map((key, i) => (
                            <RenderCategory
                                key={`${key}-right-${i}`}
                                category={key}
                                categoryHeaderWrapper={categoryHeaderWrapper}
                                results={rightBuckets[key]}
                            >
                                {children}
                            </RenderCategory>
                        ))}
                    </div>
                </div>
            );
        }
    }
    return null;
}

export default DisplayResults;
