"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Diff = Diff;

var _react = _interopRequireDefault(require("react"));

require("../style.scss");

function Diff(_ref) {
  var removed = _ref.removed,
      added = _ref.added;
  return /*#__PURE__*/_react.default.createElement("p", {
    className: "text-diff text-print"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "is-removed"
  }, removed), /*#__PURE__*/_react.default.createElement("span", {
    className: "is-added"
  }, added));
}