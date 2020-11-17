"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

/**
 * Font Awesome 4.7 icons with build-in accessibility
 */
var Icon = function Icon(_ref) {
  var name = _ref.name,
      _ref$spin = _ref.spin,
      spin = _ref$spin === void 0 ? false : _ref$spin,
      _ref$circled = _ref.circled,
      circled = _ref$circled === void 0 ? false : _ref$circled,
      _ref$label = _ref.label,
      label = _ref$label === void 0 ? undefined : _ref$label;
  var classNames = "fa fa-".concat(name);

  if (spin) {
    classNames += ' fa-spin';
  }

  ;

  if (circled) {
    classNames += ' fa-stack-1x';
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "fa-stack",
      "aria-hidden": !label
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-circle-thin fa-stack-2x"
    }), /*#__PURE__*/_react.default.createElement("i", {
      className: classNames
    }, label && /*#__PURE__*/_react.default.createElement("span", {
      className: "sr-only"
    }, label)));
  } // Single icon


  return /*#__PURE__*/_react.default.createElement("i", {
    className: classNames,
    "aria-hidden": !label
  }, label && /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, label));
};

var _default = Icon;
exports.default = _default;