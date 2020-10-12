"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = JsonApi;

var _useSearch2 = _interopRequireDefault(require("../../hooks/useSearch"));

/**
 * Search driver that talks with a JSON:API endpoint
 * 
 * **PLACEHOLDER - NOT IMPLEMENTED**. If you would like JSON:API support, 
 * please make a merge request with an implementation. 
 */
function JsonApi(endpoint) {
  var DriverComponent = function DriverComponent(_ref) {
    var provider = _ref.provider,
        updateSearchData = _ref.updateSearchData;

    var _useSearch = (0, _useSearch2.default)(provider),
        terms = _useSearch.terms,
        filters = _useSearch.filters,
        sort = _useSearch.sort;

    throw new Error('TODO: Implement!'); // Driver components are renderless. It's just a stateful container

    return null;
  };

  return DriverComponent;
}