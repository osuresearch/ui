"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var SearchValue = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var bind = _ref.bind,
      onClear = _ref.onClear,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "lookup-value ".concat(children ? '' : 'd-none')
  }, /*#__PURE__*/_react.default.createElement("div", {
    ref: ref,
    className: "lookup-value-content",
    tabIndex: 0,
    id: bind.id
  }, children), onClear && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "lookup-value-clear",
    "aria-label": "Clear value",
    title: "Clear value",
    onClick: onClear
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": true
  }, "\xD7")));
});

var _default = SearchValue;
exports.default = _default;