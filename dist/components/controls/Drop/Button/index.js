"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var Button = function Button(props) {
  var _useContext = (0, _react.useContext)(_.Context),
      id = _useContext.id;

  var classNames = "btn btn-".concat(props.theme ? props.theme : 'outline-secondary', " dropdown-toggle ").concat(props.className ? props.className : '');
  return /*#__PURE__*/_react.default.createElement("button", (0, _extends2.default)({}, props, {
    className: classNames,
    type: "button",
    id: id,
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }), props.children);
};

var _default = Button;
exports.default = _default;