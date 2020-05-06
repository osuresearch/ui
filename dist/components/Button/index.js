"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$theme = _ref.theme,
      theme = _ref$theme === void 0 ? 'secondary' : _ref$theme,
      _ref$className = _ref.className,
      className = _ref$className === void 0 ? '' : _ref$className,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === void 0 ? undefined : _ref$onClick;
  return /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    disabled: disabled,
    className: "btn btn-".concat(theme, " ").concat(className),
    onClick: !disabled ? onClick : undefined
  }, children);
};

var _default = Button;
exports.default = _default;