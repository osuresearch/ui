
import { Buckets } from '../';

/**
 * Balance a column of bucket results based on number of 
 * results in each bucket against a maximum number of results 
 * for a column.
 */
export default function balanceBuckets(buckets: Buckets) {
    let total = 0; // Total results included in this column
    const balanced: Buckets = {}; // Buckets trimmed down to limited results
    const keys = Object.keys(buckets);
    const limit = 10 - keys.length; // Maximum number of results for this column

    let maxLength = 0;
    for (let i = 0; i < keys.length; i++) {
        maxLength = Math.max(maxLength, buckets[keys[i]].length);
    }

    // Evenly distribute from buckets to fill to the global limit
    for (let i = 0; i < maxLength && total < limit; i++) {
        for (let j = 0; j < keys.length && total < limit; j++) {
            const key = keys[j];

            if (!balanced.hasOwnProperty(key)) {
                balanced[key] = [];
            }

            if (buckets[key].length > 0) {
                balanced[key].push(buckets[key].shift());
                total++;
            }
        }
    }

    return balanced;
}