"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _SearchContext = require("../SearchContext");

/**
 * Provider for a named set of search filters and queries.
 *
 * All search components **must** be associated
 * with a provider to share state information.
 */
var SearchProvider = function SearchProvider(_ref) {
  var id = _ref.id,
      _ref$defaultTerms = _ref.defaultTerms,
      defaultTerms = _ref$defaultTerms === void 0 ? '' : _ref$defaultTerms,
      defaultFilters = _ref.defaultFilters,
      _ref$defaultOffset = _ref.defaultOffset,
      defaultOffset = _ref$defaultOffset === void 0 ? 0 : _ref$defaultOffset,
      _ref$defaultLimit = _ref.defaultLimit,
      defaultLimit = _ref$defaultLimit === void 0 ? 20 : _ref$defaultLimit,
      driver = _ref.driver,
      children = _ref.children;

  var _useState = (0, _react.useState)(defaultTerms),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      terms = _useState2[0],
      setTerms = _useState2[1];

  var _useState3 = (0, _react.useState)(function () {
    return defaultFilters ? defaultFilters.clone() : new _.SearchFilters();
  }),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      filters = _useState4[0],
      setFilters = _useState4[1];

  var _useState5 = (0, _react.useState)(defaultOffset),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      offset = _useState6[0],
      setOffset = _useState6[1];

  var _useState7 = (0, _react.useState)(defaultLimit),
      _useState8 = (0, _slicedToArray2.default)(_useState7, 2),
      limit = _useState8[0],
      setLimit = _useState8[1];

  var _useState9 = (0, _react.useState)(false),
      _useState10 = (0, _slicedToArray2.default)(_useState9, 2),
      searching = _useState10[0],
      setSearching = _useState10[1];

  var _useState11 = (0, _react.useState)(),
      _useState12 = (0, _slicedToArray2.default)(_useState11, 2),
      results = _useState12[0],
      setResults = _useState12[1];

  var _useState13 = (0, _react.useState)(),
      _useState14 = (0, _slicedToArray2.default)(_useState13, 2),
      error = _useState14[0],
      setError = _useState14[1]; // Prepare for some magic.
  // The tl;dr: I'm dynamically creating named contexts stored in a
  // singleton map and providing each one mapped directly to a named (id) search provider.
  // This allows me to reuse a context structure for more than dataset, since each
  // provider needs its own unique set of search data to pass onto components.
  // Note that a change to `id` isn't supported here. Could potentially
  // add a useEffect on change but really it should be a usage error.
  // The callback argument for useState is done so that we don't overwrite an
  // existing provider (only executes init once when initially setting up the state)
  // We use `unknown` for typing here because the provider doesn't care what
  // structure the search results will be in (and shouldn't touch it anyway).
  // That's up to the implementing developer when they use the useSearchProvider hook.


  var _useState15 = (0, _react.useState)(function () {
    return (0, _SearchContext.initDynamicContext)(id, {});
  }),
      _useState16 = (0, _slicedToArray2.default)(_useState15, 1),
      context = _useState16[0]; // Destroy the dynamic context on unmount.


  (0, _react.useEffect)(function () {
    return function () {
      return (0, _SearchContext.destroyDynamicContext)(id);
    };
  }, [id]);
  console.debug("[SearchProvider(".concat(id, ")] Redraw"), terms, filters);
  var contextValue = (0, _react.useMemo)(function () {
    return {
      terms: terms,
      filters: filters.filters,
      sort: filters.sort,
      offset: offset,
      limit: limit,
      searching: searching,
      results: results,
      error: error,
      setTerms: setTerms,
      setSort: function setSort(sort) {
        setFilters(function (prev) {
          return prev.sortBy(sort);
        });
      },
      addFilter: function addFilter(filter) {
        setFilters(function (prev) {
          return prev.add(filter);
        });
      },
      getFilter: function getFilter(name, defaultValue) {
        return filters.get(name, defaultValue);
      },
      hasFilter: function hasFilter(name) {
        return filters.has(name);
      },
      deleteFilter: function deleteFilter(name) {
        setFilters(function (prev) {
          return prev.delete(name);
        });
      },
      replaceFilters: function replaceFilters(filters) {
        setFilters(new _.SearchFilters(filters));
      },
      setOffset: setOffset,
      setLimit: setLimit,
      setSearching: setSearching,
      setResults: setResults,
      setError: setError
    };
  }, [terms, filters, offset, limit, searching, results, error]);
  var DriverComponent = driver; // Note this can't just be value={context} because we need to be
  // able to rewrite query/filters on state change.

  return /*#__PURE__*/_react.default.createElement(context.Provider, {
    value: contextValue
  }, /*#__PURE__*/_react.default.createElement(DriverComponent, {
    provider: id
  }), children);
};

var _default = SearchProvider;
exports.default = _default;