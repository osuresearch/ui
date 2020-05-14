"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Badge = function Badge(_ref) {
  var children = _ref.children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'secondary' : _ref$theme;
  return /*#__PURE__*/_react.default.createElement("span", {
    className: "badge badge-".concat(theme)
  }, children);
};

var _default = Badge;
exports.default = _default;