"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("../..");

var _useSearch2 = _interopRequireDefault(require("../hooks/useSearch"));

require("./SearchDebugger.scss");

/**
 * Print out the current state of search data. 
 * 
 * Useful for testing new components and state changes.
 */
var SearchDebugger = function SearchDebugger(_ref) {
  var provider = _ref.provider;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var _useSearch = (0, _useSearch2.default)(provider),
      terms = _useSearch.terms,
      filters = _useSearch.filters,
      sort = _useSearch.sort;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-debugger"
  }, /*#__PURE__*/_react.default.createElement(_.Button, {
    theme: "link",
    onClick: function onClick() {
      return setShow(!show);
    }
  }, "\uD83E\uDDEA Toggle Search Debugger"), show && /*#__PURE__*/_react.default.createElement("div", null, /*#__PURE__*/_react.default.createElement("strong", null, "Full Text Terms"), /*#__PURE__*/_react.default.createElement("p", null, terms), /*#__PURE__*/_react.default.createElement("strong", null, "Filters"), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(filters, undefined, 2)), /*#__PURE__*/_react.default.createElement("strong", null, "Sort"), /*#__PURE__*/_react.default.createElement("pre", null, JSON.stringify(sort, undefined, 2))));
};

var _default = SearchDebugger;
exports.default = _default;