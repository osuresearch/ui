
import { Buckets } from '../DisplayResults';

/**
 * Group JSON results payloads into buckets based on our categorizer
 * 
 * @param {any[]} results The results array
 * @param {string} categorizeBy JSON value to extract for categorizing results into multiple buckets.
 * @return {object} Mapping bucket names to an array of values
 */
export default function createBuckets(results: any[], categorizeBy: string) {
    const buckets: Buckets = {};
    const jpath = categorizeBy.split('.');

    for (let i = 0; i < results.length; i++) {
        let hasError = false;
        let category = results[i];

        for (let j = 0; j < jpath.length; j++) {
            if (category === null) {
                hasError = true;
                break;
            }

            category = category[jpath[j]];
        }

        // If the category is invalid, dump a console warning and skip.
        if (typeof category !== 'string' || hasError) {
            console.warn(`Could not resolve categorizeBy path '${categorizeBy}' for resource ${JSON.stringify(results[i])
                }`);
        } else {
            if (!buckets.hasOwnProperty(category)) {
                buckets[category] = [];
            }

            buckets[category].push(results[i]);
        }
    }

    // Key sort and return as array
    const sorted: Buckets = {};
    Object.keys(buckets).sort().forEach((key) => sorted[key] = buckets[key]);

    return sorted;
}
