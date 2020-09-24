"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

/**
 * (Somewhat) self-explanatory form container
 * 
 * [Native `<form>` attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/form#Attributes) and 
 * [React event handlers](https://reactjs.org/docs/events.html#supported-events) are supported
 * 
 */
var Form = function Form(_ref) {
  var props = (0, _extends2.default)({}, _ref);
  return /*#__PURE__*/_react.default.createElement("form", props, props.children);
};

var _default = Form;
exports.default = _default;