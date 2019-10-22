"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Static loader message. Must match whatever the DOM is for the template's loader.
 * 
 * Usage:
 * ```jsx
 *  <AppLoader title="My App"/>
 * ```
 */
var AppLoader = function AppLoader(props) {
  return _react.default.createElement("div", {
    className: "app-loader"
  }, _react.default.createElement("i", {
    className: "fa fa-spinner fa-spin"
  }), _react.default.createElement("p", {
    className: "app-loader-help"
  }, "Loading ", props.title, ", please wait..."), _react.default.createElement("p", {
    className: "app-loader-help-small"
  }, "Taking too long? Let the OR Help Desk know at ", _react.default.createElement("a", {
    href: "mailto:orhelpdesk@osu.edu"
  }, "orhelpdesk@osu.edu"), "."));
};

AppLoader.propTypes = {
  /**
   * Application title to display to the end user
   */
  title: _propTypes.default.string.isRequired
};
var _default = AppLoader;
exports.default = _default;