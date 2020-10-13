"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = GraphQL;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _client = require("@apollo/client");

var _ = require("../..");

var _useSearch2 = _interopRequireDefault(require("../../hooks/useSearch"));

/**
 * Search driver that talks with GraphQL through the default Apollo client.
 * 
 * The GraphQL query requires the following variables:
 * 
 *  - `$terms: String!` 
 *      - Full text search terms
 *  - `$filters: SearchFilters` 
 *      - Set of filters to narrow down results. 
 *        The `name` of each filter is ignored by the backend.
 *  - `$sort: SearchSorting` 
 *      - Sorting rules for the results
 * 
 * The *first* GraphQL field returned will be used for the results
 * and must return an array of type objects.
 */
function GraphQL(query) {
  var DriverComponent = function DriverComponent(_ref) {
    var provider = _ref.provider,
        updateSearchData = _ref.updateSearchData;

    var _useSearch = (0, _useSearch2.default)(provider),
        terms = _useSearch.terms,
        filters = _useSearch.filters,
        sort = _useSearch.sort;

    var _useLazyQuery = (0, _client.useLazyQuery)(query),
        _useLazyQuery2 = (0, _slicedToArray2.default)(_useLazyQuery, 2),
        callable = _useLazyQuery2[0],
        result = _useLazyQuery2[1];

    var _useState = (0, _react.useState)(),
        _useState2 = (0, _slicedToArray2.default)(_useState, 2),
        setCached = _useState2[1];

    console.log('filters', filters); // Fire off a new query if anything in the search state changes

    (0, _react.useEffect)(function () {
      callable({
        variables: {
          terms: terms,
          filters: filters ? (0, _.AND)(filters) : null,
          sort: sort
        }
      });
    }, [terms, filters, sort, callable]); // Store previous search results each time we make a query so we 
    // can display these while still fetching fresh data in the background.

    (0, _react.useEffect)(function () {
      setCached(function (prev) {
        var data = {
          loading: result.loading,
          results: prev === null || prev === void 0 ? void 0 : prev.results
        };

        if (result.data !== undefined) {
          var firstKey = Object.keys(result.data)[0];
          data.results = result.data[firstKey];
        }

        if (result.error) {
          console.error('GraphQL Search Driver Error', result.error); // TODO: Better errors? We don't really display this on the frontend anywhere.

          data.error = 'Something went wrong';
        }

        updateSearchData(data);
        return data;
      });
    }, [result, updateSearchData]); // Driver components are renderless. It's just a stateful container

    return null;
  };

  return DriverComponent;
}