"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var Button = function Button(_ref) {
  var children = _ref.children,
      to = _ref.to,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'primary' : _ref$theme,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? undefined : _ref$onClick,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'button' : _ref$type;

  // Sanity check for developers - make sure they do not specify `to` and `onClick` at once
  if (to && onClick) {
    console.warn('[Button] `onClick` property will not execute if you specify `to`. These are mutually exclusive.');
  }

  if (to && !disabled) {
    return /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
      role: "button",
      to: to,
      className: "btn btn-".concat(theme, " ").concat(className)
    }, children);
  }

  return /*#__PURE__*/_react.default.createElement("button", {
    type: type,
    disabled: disabled,
    className: "btn btn-".concat(theme, " ").concat(className),
    onClick: !disabled ? onClick : undefined
  }, children);
};

var _default = Button;
exports.default = _default;