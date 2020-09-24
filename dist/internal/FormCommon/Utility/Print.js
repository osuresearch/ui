"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Print = void 0;

var _react = _interopRequireDefault(require("react"));

require("../style.scss");

/**
 * Render a print view of a Dropdown
 */
var Print = function Print(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "text-print"
  }, children);
};

exports.Print = Print;