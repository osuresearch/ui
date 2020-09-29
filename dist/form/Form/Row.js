"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

/**
 * Wrapping component for form components
 * 
 */
var Row = function Row(props) {
  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, props, {
    className: "form-row ".concat(props.className ? props.className : '')
  }), props.children);
};

var _default = Row;
exports.default = _default;