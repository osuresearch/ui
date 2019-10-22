"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Error message to display to the end user on major application error
 *
 * Usage:
 * ```jsx
 *  <AppError>Message content here</AppError>
 * ```
 *
 * Note that the contents of AppError are wrapped with a <p> tag, so only
 * use DOM elements that are not block-level.
 *
 * For more information about what's illegal in a <p> tag, see
 * https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p "Tag omission" section.
 * ```
 */
var AppError = function AppError(props) {
  return _react.default.createElement("div", {
    className: "app-error"
  }, _react.default.createElement("p", {
    className: "app-error-help"
  }, props.children), _react.default.createElement("p", {
    className: "app-error-help-small"
  }, "For additional assistance, please contact the OR Help Desk at ", _react.default.createElement("a", {
    href: "mailto:orhelpdesk@osu.edu"
  }, "orhelpdesk@osu.edu"), "."));
};

AppError.propTypes = {
  /**
   * Error message to display to the end user
   */
  children: _propTypes.default.node.isRequired
};
var _default = AppError;
exports.default = _default;