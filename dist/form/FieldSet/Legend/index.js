"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Legend = Legend;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

function Legend(props) {
  // Separate context from the other props (or else they are added as props to the component itself)
  var context = props.context,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["context"]);

  var _useContext = (0, _react.useContext)(context),
      bind = _useContext.bind;

  var legend = props.children || bind.instructions || '';
  return /*#__PURE__*/_react.default.createElement("legend", (0, _extends2.default)({}, otherProps, {
    className: bind.required ? 'is-required' : ''
  }), legend, " ", bind.required && /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, ",Required") // fieldsets do not have a native way to indicate that the group of components are required, so use the legend to communicate that: https://www.w3.org/WAI/tutorials/forms/grouping/#associating-related-controls-with-fieldset
  );
}