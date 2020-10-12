"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

/**
 * Display the form components inline
 */
var Inline = function Inline(_ref) {
  var children = _ref.children;

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "form-check-inline"
  }, _react.default.Children.map(children, function (node) {
    if ( /*#__PURE__*/_react.default.isValidElement(node)) {
      return /*#__PURE__*/_react.default.cloneElement(node, {
        name: node.props.name || bind.name,
        error: node.props.error || bind.error,
        success: node.props.success || bind.success
      });
    } else {
      return node;
    }
  }));
};

var _default = Inline;
exports.default = _default;