"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Alert = function Alert(_ref) {
  var theme = _ref.theme,
      dismissible = _ref.dismissible,
      banner = _ref.banner,
      children = _ref.children;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "alert alert-".concat(theme, " ").concat(dismissible && 'alert-dismissible fade show', " ").concat(banner && 'alert-banner'),
    role: "alert"
  }, children, dismissible && /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "close",
    "data-dismiss": "alert",
    "aria-label": "Close"
  }, /*#__PURE__*/_react.default.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")));
};

var _default = Alert;
exports.default = _default;