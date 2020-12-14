"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../generic/Icon"));

/**
 * Creates an external link with an icon and [secure](https://developers.google.com/web/tools/lighthouse/audits/noopener)
 * `target="_blank"` redirection
 */
var ExternalLink = function ExternalLink(_ref) {
  var children = _ref.children,
      href = _ref.href,
      _ref$redirect = _ref.redirect,
      redirect = _ref$redirect === void 0 ? false : _ref$redirect;
  return /*#__PURE__*/_react.default.createElement("a", {
    className: "external-link",
    href: href,
    target: redirect ? '_top' : '_blank',
    rel: "noopener noreferrer"
  }, _react.default.Children.count(children) > 0 && children, _react.default.Children.count(children) < 1 && href, !redirect && /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, "(Opens in a new window)"), /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "external-link"
  }));
};

var _default = ExternalLink;
exports.default = _default;