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
 * Additional paramaters may be passed in the second argument as an
 * array of key-value objects, e.g.
 * ```ts
 * [
 *  {
 *      key: 'some-key',
 *      value: 'some value'
 *  }
 * ]
 * ```
 * which will construct a URL like `https://orapps.osu.edu/api/v1/person?q=terms&some-key=some%20value`.
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
function JsonApi(endpoint, params) {
  var DriverComponent = function DriverComponent(_ref) {
    var provider = _ref.provider;

    var _useSearchProvider = (0, _useSearchProvider2.default)(provider),
        terms = _useSearchProvider.terms,
        setError = _useSearchProvider.setError,
        setSearching = _useSearchProvider.setSearching,
        setResponse = _useSearchProvider.setResponse;

    (0, _react.useEffect)(function () {
      // Clear results on clearing search terms
      if (terms.length < 1) {
        setSearching(false);
        setError(undefined);
        setResponse(undefined);
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
      var url = "".concat(endpoint, "?q=").concat(encodeURI(terms));
      params === null || params === void 0 ? void 0 : params.forEach(function (param) {
        url += "&".concat(param.key, "=").concat(encodeURI(param.value));
      });
      fetch(url, payload).then(function (res) {
        return (0, _JsonApiUtility.validateAndTransformJsonApiResponse)(res);
      }).then(function (json) {
        var _json$meta;

        // Data gets reshaped to { hits, results } to be automatically
        // supported by the Lookup form component.
        var results = json.data;
        var hits = ((_json$meta = json.meta) === null || _json$meta === void 0 ? void 0 : _json$meta.total) || results.length;
        setSearching(false);
        setResponse({
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
    }, [terms, setError, setSearching, setResponse]); // Driver components are renderless. It's just a stateful container

    return null;
  };

  return DriverComponent;
}