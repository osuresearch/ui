"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Help = Help;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

function Help(props) {
  var _props$children;

  // Separate context from the other props (or else they are added as props to the component itself)
  var context = props.context,
      otherProps = (0, _objectWithoutProperties2.default)(props, ["context"]);

  var _useContext = (0, _react.useContext)(context),
      bind = _useContext.bind;

  return /*#__PURE__*/_react.default.createElement("small", (0, _extends2.default)({}, otherProps, {
    id: "".concat(bind.id, "-help"),
    className: "form-text text-muted"
  }), (_props$children = props.children) !== null && _props$children !== void 0 ? _props$children : bind.help);
}