"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _Item = _interopRequireDefault(require("./Item"));

var Menu = function Menu(_ref) {
  var children = _ref.children,
      positionRight = _ref.positionRight;

  var _useContext = (0, _react.useContext)(_.Context),
      id = _useContext.id;

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "dropdown-menu ".concat(positionRight && 'dropdown-menu-right'),
    "aria-labelledby": id
  }, children);
};

Menu.Item = _Item.default;
var _default = Menu;
exports.default = _default;