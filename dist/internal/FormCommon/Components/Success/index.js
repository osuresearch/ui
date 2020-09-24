"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Success = Success;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

/**
 * Feedback for when the form component meets the validation rules.
 * 
 * Will display when `success` is set in the parent form component
 * 
 * Supports all
 * [HTMLDivElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/div)
 * props.
 */
function Success(props) {
  var _props$children;

  // Separate context from the other props (or else they are added as props to the component itself)
  var context = props.context,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["context"]);

  var _useContext = (0, _react.useContext)(context),
      bind = _useContext.bind;

  return /*#__PURE__*/_react.default.createElement("div", (0, _extends2.default)({}, otherProps, {
    className: "valid-feedback"
  }), (_props$children = props.children) !== null && _props$children !== void 0 ? _props$children : bind.success);
}