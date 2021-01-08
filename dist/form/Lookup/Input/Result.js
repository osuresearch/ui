"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Result = function Result(_ref) {
  var id = _ref.id,
      onClick = _ref.onClick,
      isSelected = _ref.isSelected,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    role: "option",
    className: "lookup-result ".concat(isSelected && 'active-result'),
    id: id,
    onClick: onClick,
    "aria-selected": isSelected
  }, children);
};

var _default = Result;
exports.default = _default;