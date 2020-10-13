"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Print = Print;

var _react = _interopRequireDefault(require("react"));

require("../style.scss");

/**
 * Render a print view as a readOnly text input (for components 
 * that have no native read only mode)
 */
function Print(_ref) {
  var id = _ref.id,
      name = _ref.name,
      value = _ref.value;
  return /*#__PURE__*/_react.default.createElement("input", {
    type: "text",
    id: id,
    name: name,
    className: "form-control",
    value: value !== null && value !== void 0 ? value : '–',
    readOnly: true,
    "aria-disabled": true
  });
}