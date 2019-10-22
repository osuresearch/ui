"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactRouterDom = require("react-router-dom");

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Standard brand application header.
 *
 * Add nav links, searches, and Profile as children.
 * Requires react-router to be running.
 */
var Navbar = function Navbar(props) {
  return _react.default.createElement("nav", {
    className: "navbar navbar-main"
  }, _react.default.createElement(_reactRouterDom.Link, {
    exact: "true",
    to: "/",
    className: "navbar-brand"
  }, _react.default.createElement("div", {
    className: "navbar-org"
  }, "Office of Research"), props.title), props.children);
};

Navbar.propTypes = {
  /**
   * Application title displayed to the end user
   */
  title: _propTypes.default.string.isRequired,

  /**
   * Components to render within the navbar (buttons, searches, Profile)
   */
  children: _propTypes.default.node.isRequired
};
var _default = Navbar;
exports.default = _default;