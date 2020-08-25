"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Search = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Search = _interopRequireDefault(require("../../components/Search"));

var _ = require(".");

/**
 * Convert a `key|name` string to a SearchPair for the old Search component
 */
function toSearchPair(value) {
  if (!value) return undefined;
  var parts = value.split('|');
  return {
    key: parts[0],
    value: parts[1]
  };
}
/**
 * Convert a SearchPair from the old Search component to a `key|name` string
 */


function fromSearchPair(pair) {
  if (!pair.key) return null;
  return "".concat(pair.key, "|").concat(pair.value);
}
/**
 * Jams a standard ORIS/UI search result pair into a single  
 * string value bind in the form `key|name`
 */


var Search = function Search(_ref) {
  var _ref$endpoint = _ref.endpoint,
      endpoint = _ref$endpoint === void 0 ? 'https://orapps.osu.edu/api/v1/person' : _ref$endpoint;

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var onChange = function onChange(e) {
    bind.value = fromSearchPair(e.target.value);
  };

  return /*#__PURE__*/_react.default.createElement(_Search.default, {
    name: bind.name,
    endpoint: endpoint,
    onChange: onChange,
    defaultValue: toSearchPair(bind.value)
  });
};

exports.Search = Search;