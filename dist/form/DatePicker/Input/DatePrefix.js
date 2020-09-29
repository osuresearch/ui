"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = DatePrefix;

var _react = _interopRequireDefault(require("react"));

function DatePrefix() {
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-prefix"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-calendar",
    "aria-hidden": "true"
  }));
}