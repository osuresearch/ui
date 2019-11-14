"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Icon = _interopRequireDefault(require("../Icon"));

/**
 * Creates an external link with an icon and [secure](https://developers.google.com/web/tools/lighthouse/audits/noopener)
 * `target="_blank"` redirection
 */
var ExternalLink = function ExternalLink(props) {
  return _react.default.createElement("a", {
    href: props.href,
    target: props.redirect ? '_top' : '_blank',
    rel: "noopener noreferrer"
  }, _react.default.createElement(_Icon.default, {
    name: "external-link"
  }), " ", " ", _react.default.Children.count(props.children) > 0 && props.children, _react.default.Children.count(props.children) < 1 && props.href, !props.redirect && _react.default.createElement("span", {
    className: "sr-only"
  }, "(Opens in a new window)"));
};

ExternalLink.propTypes = {
  /**
   * Site to redirect the user to
   */
  href: _propTypes.default.string.isRequired,

  /**
   * If no children are supplied, the link `href` will be rendered in their place.
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.object]),

  /**
   * Should the link redirect the current window instead of opening in a new one
   */
  redirect: _propTypes.default.bool.isRequired
};
ExternalLink.defaultProps = {
  redirect: false
};
var _default = ExternalLink;
exports.default = _default;