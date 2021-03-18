"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Apollo;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _client = require("@apollo/client");

var _ = require("../..");

var _useSearchProvider2 = _interopRequireDefault(require("../../hooks/useSearchProvider"));

/**
 * Search driver that talks with GraphQL through the default Apollo client.
 *
 * The GraphQL query MUST support the following variables:
 *
 *  - `$terms: String!`
 *      - Full text search terms
 *  - `$filters: SearchFilters`
 *      - Set of filters to narrow down results.
 *      - The `name` of each filter is ignored by the backend.
 *      - You can omit this if you do not use filters in your searches.
 *  - `$sort: SearchSorting`
 *      - Sorting rules for the results.
 *      - You can omit this if you do not use sorting in your searches.
 *
 * The GraphQL types `SearchFilters` and `SearchSorting` are provided by the
 * [ORIS\GraphQL](https://code.osu.edu/ORIS/graphql) composer package.
 *
 * The *first* GraphQL field returned will be used for the results
 * and must return an array of type objects.
 *
 * @param {DocumentNode} query
 * @param {boolean} searchWhenEmpty If true, the driver will still execute a GraphQL query
 *                                  even if the terms, filters, and sort order are unset.
 *                                  (This also includes on initial mount). If false, the
 *                                  driver will *not* search unless there is at least one
 *                                  search parameter set (terms, filters, or sort). Additionally,
 *                                  the results in useSearchProvider() will be set to `undefined`.
 * @param {ApolloClient} client     An `ApolloClient` instance. By default this driver uses the
 *                                  client passed down via context.
 */
function Apollo(query) {
  var searchWhenEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  var client = arguments.length > 2 ? arguments[2] : undefined;

  var DriverComponent = function DriverComponent(_ref) {
    var provider = _ref.provider;

    var _useSearchProvider = (0, _useSearchProvider2.default)(provider),
        terms = _useSearchProvider.terms,
        filters = _useSearchProvider.filters,
        sort = _useSearchProvider.sort,
        setSearching = _useSearchProvider.setSearching,
        setError = _useSearchProvider.setError,
        setResults = _useSearchProvider.setResults;

    var _useLazyQuery = (0, _client.useLazyQuery)(query, {
      client: client
    }),
        _useLazyQuery2 = (0, _slicedToArray2.default)(_useLazyQuery, 2),
        callable = _useLazyQuery2[0],
        result = _useLazyQuery2[1]; // Cached results from the previous search


    var _useState = (0, _react.useState)(),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        setCached = _useState2[1];

    var isEmpty = terms.length < 1 && filters.length < 1 && sort === undefined;
    var skipSearchAndClear = isEmpty && searchWhenEmpty; // Fire off a new query if anything in the search state changes
    // TODO: Implicit throttling on term changes

    (0, _react.useEffect)(function () {
      if (skipSearchAndClear) {
        return;
      }

      callable({
        variables: {
          terms: terms,
          filters: filters.length > 0 ? (0, _.AND)(filters) : null,
          sort: sort
        }
      });
    }, [terms, filters, sort, callable, skipSearchAndClear]); // Store previous search results each time we make a query so we
    // can display these while still fetching fresh data in the background.

    (0, _react.useEffect)(function () {
      setCached(function (prev) {
        // Use previously cached results if we're still loading
        var results = prev; // If there's an error - make it human readable.

        var error = undefined;

        if (result.error) {
          console.error('Apollo Search Driver Error', result.error);

          if (result.error.graphQLErrors.length) {
            error = result.error.graphQLErrors[0].message;
          } else {
            error = result.error.message;
          }
        }
        /*
            GraphQL can come back with any named query field -
            but we only care about the value in that field.
             Example 1:
                query {
                    tools(terms: "foo") {
                        id
                        title
                    }
                }
                 We only care about the `[{ id, title }]`
                payload within `data.tools`.
             Example 2:
                query {
                    search(terms: "fizz") {
                        totalHits
                        maxRank
                        hits {
                            id
                            rank
                            name
                        }
                    }
                }
                 We grab the full `{totalHits, maxRank, hits: [...]}`
                payload within `data.search`.
        */


        if (result.data !== undefined) {
          var firstKey = Object.keys(result.data)[0];
          results = result.data[firstKey];
        }

        setSearching(result.loading);
        setError(error);
        setResults(results);
        return results;
      });
    }, [result, skipSearchAndClear, setSearching, setError, setResults]);
    (0, _react.useEffect)(function () {
      if (skipSearchAndClear) {
        setSearching(false);
        setError(undefined);
        setResults(undefined);
      }
    }, [skipSearchAndClear, setSearching, setError, setResults]); // Driver components are renderless. It's just a stateful container

    return null;
  };

  return DriverComponent;
}