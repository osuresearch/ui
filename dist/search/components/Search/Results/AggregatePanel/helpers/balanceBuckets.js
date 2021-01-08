"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = balanceBuckets;

/**
 * Balance a column of bucket results based on number of 
 * results in each bucket against a maximum number of results 
 * for a column.
 */
function balanceBuckets(buckets) {
  var total = 0; // Total results included in this column

  var balanced = {}; // Buckets trimmed down to limited results

  var keys = Object.keys(buckets);
  var limit = 10 - keys.length; // Maximum number of results for this column

  var maxLength = 0;

  for (var i = 0; i < keys.length; i++) {
    maxLength = Math.max(maxLength, buckets[keys[i]].length);
  } // Evenly distribute from buckets to fill to the global limit


  for (var _i = 0; _i < maxLength && total < limit; _i++) {
    for (var j = 0; j < keys.length && total < limit; j++) {
      var key = keys[j];

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