"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createBuckets;

/**
 * Group JSON results payloads into buckets based on our categorizer
 * 
 * @param {any[]} results The results array
 * @param {string} categorizeBy JSON value to extract for categorizing results into multiple buckets.
 * @return {object} Mapping bucket names to an array of values
 */
function createBuckets(results, categorizeBy) {
  var buckets = {};
  var jpath = categorizeBy.split('.');

  for (var i = 0; i < results.length; i++) {
    var hasError = false;
    var category = results[i];

    for (var j = 0; j < jpath.length; j++) {
      if (category === null) {
        hasError = true;
        break;
      }

      category = category[jpath[j]];
    } // If the category is invalid, dump a console warning and skip.


    if (typeof category !== 'string' || hasError) {
      console.warn("Could not resolve categorizeBy path '".concat(categorizeBy, "' for resource ").concat(JSON.stringify(results[i])));
    } else {
      if (!buckets.hasOwnProperty(category)) {
        buckets[category] = [];
      }

      buckets[category].push(results[i]);
    }
  } // Key sort and return as array


  var sorted = {};
  Object.keys(buckets).sort().forEach(function (key) {
    return sorted[key] = buckets[key];
  });
  return sorted;
}