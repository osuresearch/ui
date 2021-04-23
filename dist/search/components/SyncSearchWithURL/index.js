"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = require("react");

var _useSearchProvider = _interopRequireDefault(require("../../hooks/useSearchProvider"));

/**
 * Encode a serialized copy for safe inclusion in a URL
 */
function urlEncodeFilters(filters) {
  if (filters.length < 1) {
    return '';
  }

  var str = JSON.stringify(filters);
  return window.btoa(str);
}
/**
 * Decode from a URL into a new copy of SearchFilters
 *
 * Will return undefined if the payload cannot be safely decoded
 */


function urlDecodeFilters(encoded) {
  try {
    var str = window.atob(encoded);
    var data = JSON.parse(str);
    return data;
  } catch (_unused) {// Silently ignore other decoding errors
  }

  return [];
}

function urlEncodeSort(sort) {
  if (!sort) {
    return '';
  }

  var str = JSON.stringify(sort);
  return window.btoa(str);
}

function urlDecodeSort(encoded) {
  if (encoded.length < 1) {
    return undefined;
  }

  try {
    var str = window.atob(encoded);
    var data = JSON.parse(str);
    return data;
  } catch (_unused2) {// Silently ignore other decoding errors
  }

  return undefined;
}
/**
 * Allows a user to bookmark or share searches for an application.
 *
 * When the search data (terms, filters, sorting, limit, offset) changes, the current address
 * is updated via the `History.ReplaceState` API to contain a serialized copy
 * of the search data.
 *
 * If the user bookmarks (or shares) the URL, the same search data will
 * be loaded on next visit.
 *
 * This also means you need to safely handle access-based search filtering on the
 * backend. E.g. if an admin shares a link that contains an `adminOnlyData`
 * search filter, then the user they shared that with may also potentially send
 * that filter to the server as well.
 */


var SyncSearchWithURL = function SyncSearchWithURL(_ref) {
  var provider = _ref.provider,
      _ref$prefix = _ref.prefix,
      prefix = _ref$prefix === void 0 ? '' : _ref$prefix;
  var search = (0, _useSearchProvider.default)(provider);

  var _useState = (0, _react.useState)(true),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      init = _useState2[0],
      setInit = _useState2[1]; // On update of search data, write to the address bar


  (0, _react.useEffect)(function () {
    var url = new URL(window.location.href);
    var termsKey = prefix + 'q';
    var filtersKey = prefix + 'f';
    var sortKey = prefix + 's';
    var offsetKey = prefix + 'o';
    var limitKey = prefix + 'l';

    if (!init) {
      // Update URI with current search terms/filters
      var terms = search.terms;
      var filters = urlEncodeFilters(search.filters);
      var sort = urlEncodeSort(search.sort);
      var offset = search.offset;
      var limit = search.limit;
      terms ? url.searchParams.set(termsKey, terms) : url.searchParams.delete(termsKey);
      offset ? url.searchParams.set(offsetKey, offset.toString()) : url.searchParams.delete(offsetKey);
      limit ? url.searchParams.set(limitKey, limit.toString()) : url.searchParams.delete(limitKey);
      filters ? url.searchParams.set(filtersKey, filters) : url.searchParams.delete(filtersKey);
      sort ? url.searchParams.set(sortKey, sort) : url.searchParams.delete(sortKey); // Replace (not push) our history state without a remote refresh

      window.history.replaceState(null, document.title, url.href);
    } else {
      // Load search terms/filters from the URI (if possible)
      setInit(false);

      var _terms = url.searchParams.get(termsKey) || '';

      var _filters = urlDecodeFilters(url.searchParams.get(filtersKey) || '');

      var _sort = urlDecodeSort(url.searchParams.get(sortKey) || '');

      var _offset = url.searchParams.get(offsetKey);

      var _limit = url.searchParams.get(limitKey);

      _terms && search.setTerms(_terms);
      _filters.length > 0 && search.replaceFilters(_filters);
      _sort && search.setSort(_sort);
      _offset && search.setOffset(parseInt(_offset));
      _limit && search.setLimit(parseInt(_limit));
    }
  }, [search, init, setInit]);
  return null;
};

var _default = SyncSearchWithURL;
exports.default = _default;