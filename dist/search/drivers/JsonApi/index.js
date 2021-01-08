"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JsonApi;

var _react = require("react");

var _JsonApiUtility = require("../../../internal/JsonApiUtility");

var _useSearchProvider2 = _interopRequireDefault(require("../../hooks/useSearchProvider"));

/**
 * Search driver for [JSON:API](https://jsonapi.org/) compliant endpoints (e.g. https://orapps.osu.edu/api/v1/person)
 *
 * Terms are passed as the `?q=` query parameter.
 *
 * Not supported:
 * - Filters and sorting rules
 * - `included` and `links` JSON:API objects
 *
 * The `results` of the search will be an object in the shape of:
 *
 * ```ts
 * type JsonApiResult = {
 *  hits: number
 *  results: JsonApiResource[]
 * }
 * ```
 *
 * Where `JsonApiResource` conforms to [JSON:API Resource Objects](https://jsonapi.org/format/#document-resource-objects).
 *
 * If `meta.hits` is specified at the top level of the response JSON, then `hits` will be set to that value.
 * Otherwise, `hits` becomes the total number of objects in `results`.
 */
function JsonApi(endpoint) {
  var DriverComponent = function DriverComponent(_ref) {
    var provider = _ref.provider;

    var _useSearchProvider = (0, _useSearchProvider2.default)(provider),
        terms = _useSearchProvider.terms,
        setError = _useSearchProvider.setError,
        setSearching = _useSearchProvider.setSearching,
        setResults = _useSearchProvider.setResults;

    (0, _react.useEffect)(function () {
      // Clear results on clearing search terms
      if (terms.length < 1) {
        setSearching(false);
        setError(undefined);
        setResults(undefined);
        return;
      }

      setSearching(true); // Not supported in IE11

      var abortController = window.AbortController !== undefined ? new window.AbortController() : undefined;
      var payload = {
        signal: abortController === null || abortController === void 0 ? void 0 : abortController.signal,
        method: 'GET',
        cache: 'no-cache',
        redirect: 'follow',
        headers: {
          'Content-Type': 'application/vnd.api+json'
        }
      };
      console.debug('JSON:API Fetch', endpoint, terms, payload);
      fetch("".concat(endpoint, "?q=").concat(terms), payload).then(function (res) {
        return (0, _JsonApiUtility.validateAndTransformJsonApiResponse)(res);
      }).then(function (json) {
        var _json$meta;

        // Data gets reshaped to { hits, results } to be automatically
        // supported by the Lookup form component.
        var results = json.data;
        var hits = ((_json$meta = json.meta) === null || _json$meta === void 0 ? void 0 : _json$meta.total) || results.length;
        setSearching(false);
        setResults({
          hits: hits,
          results: results
        });
      }).catch(function (err) {
        if (err.name !== 'AbortError') {
          setSearching(false);
          setError(err.message);
        }
      });
      return function () {
        abortController === null || abortController === void 0 ? void 0 : abortController.abort();
      };
    }, [endpoint, terms, setError, setSearching, setResults]); // Driver components are renderless. It's just a stateful container

    return null;
  };

  return DriverComponent;
}