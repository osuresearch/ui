"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

// @ts-ignore

/**
 * Standard brand application header.
 *
 * Add nav links, searches, and Profile as children.
 * Requires react-router to be running.
 */
var Navbar = function Navbar(_ref) {
  var children = _ref.children,
      title = _ref.title;
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "navbar navbar-main"
  }, /*#__PURE__*/_react.default.createElement(_reactRouterDom.Link, {
    exact: "true",
    to: "/",
    className: "navbar-brand"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "navbar-org"
  }, "Office of Research"), title), children);
};

var _default = Navbar;
exports.default = _default;