"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Label = Label;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

/**
 * Primary instructions for filling out a field
 * 
 * Supports all
 * [HTMLLabelElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/label)
 * props.
 */
function Label(props) {
  var _props$children;

  // Separate context from the other props (or else they are added as props to the component itself)
  var context = props.context,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["context"]);

  var _useContext = (0, _react.useContext)(context),
      bind = _useContext.bind;

  return /*#__PURE__*/_react.default.createElement("label", (0, _extends2.default)({}, otherProps, {
    htmlFor: bind.id,
    className: (bind.required ? 'is-required' : '') + (props.className ? ' ' + props.className : '')
  }), (_props$children = props.children) !== null && _props$children !== void 0 ? _props$children : bind.instructions);
}