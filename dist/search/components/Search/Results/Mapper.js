"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Mapper = function Mapper(_ref) {
  var results = _ref.results,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "search-results"
  }, results.map(function (result, index) {
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, {
      key: "search-result-".concat(index)
    }, /*#__PURE__*/_react.default.cloneElement(children, {
      result: result
    }));
  }));
};

var _default = Mapper;
exports.default = _default;