"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Item = function Item(_ref) {
  var onClick = _ref.onClick,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "dropdown-item",
    onClick: onClick
  }, children);
};

var _default = Item;
exports.default = _default;