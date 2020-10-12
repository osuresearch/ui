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
 * All search components (`<Filters>`, `<Search>`, etc) **must** be associated
 * with a provider to share state information. 
 */
var SearchProvider = function SearchProvider(_ref) {
  var id = _ref.id,
      _ref$defaultTerms = _ref.defaultTerms,
      defaultTerms = _ref$defaultTerms === void 0 ? '' : _ref$defaultTerms,
      defaultFilters = _ref.defaultFilters,
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
      setFilters = _useState4[1]; // Prepare for some magic.
  // The tl;dr: I'm dynamically creating named contexts stored in a
  // singleton map and providing each one mapped directly to a named (id) search provider.
  // This allows me to reuse a context structure for more than dataset, since each
  // provider needs its own unique set of search data to pass onto components.
  // Note that a change to `id` isn't supported here. Could potentially
  // add a useEffect on change but really it should be a usage error.
  // The callback argument for useState is done so that we don't overwrite an 
  // existing provider (only executes init once when initially setting up the state)


  var _useState5 = (0, _react.useState)(function () {
    return (0, _SearchContext.initDynamicContext)(id, {});
  }),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 1),
      context = _useState6[0]; // Destroy the dynamic context on unmount.


  (0, _react.useEffect)(function () {
    return function () {
      return (0, _SearchContext.destroyDynamicContext)(id);
    };
  }, [id]);
  console.debug("[SearchProvider(".concat(id, ")] Redraw"), terms, filters); // TODO: Can totally memoize this whole thing off of terms & filters

  var contextValue = (0, _react.useMemo)(function () {
    return {
      terms: terms,
      filters: filters.filters,
      sort: filters.sort,
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
      }
    };
  }, [terms, filters, setTerms, setFilters]); // Note this can't just be value={context} because we need to be
  // able to rewrite query/filters on state change.

  return /*#__PURE__*/_react.default.createElement(context.Provider, {
    value: contextValue
  }, children);
};

var _default = SearchProvider;
exports.default = _default;