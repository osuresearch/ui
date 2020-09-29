"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.withFormContext = withFormContext;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireDefault(require("react"));

/**
 * Automatically provide a typed context to a form component
 */
function withFormContext(Component, context) {
  var WrappedComponent = function WrappedComponent(props) {
    return /*#__PURE__*/_react.default.createElement(Component, (0, _extends2.default)({}, props, {
      context: context
    }));
  };

  return WrappedComponent;
}