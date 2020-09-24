"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Error = Error;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

/**
 * Provides instructions on how to resolve the validation error.
 * 
 * Will display when error is set in the parent form component or 
 * the parent's `bind` prop is in an error state.
 * 
 * Supports all
 * [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 * props.
 */
function Error(props) {
  var _props$children;

  // Separate context from the other props (or else they are added as props to the component itself)
  var context = props.context,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["context"]);

  var _useContext = (0, _react.useContext)(context),
      bind = _useContext.bind;

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, otherProps, {
    className: "invalid-feedback",
    role: "alert",
    "aria-live": "assertive"
  }), (_props$children = props.children) !== null && _props$children !== void 0 ? _props$children : bind.error);
}