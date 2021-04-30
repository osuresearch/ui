"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _Icon = _interopRequireDefault(require("../../generic/Icon"));

function addressesToString(addresses) {
  if (Array.isArray(addresses)) {
    return addresses.join(';');
  }

  return addresses;
}
/**
 * Creates an email link with an icon, optionally prefilled with content.
 *
 * If the component has no children the `to` address will be displayed.
 */


var EmailLink = function EmailLink(_ref) {
  var children = _ref.children,
      to = _ref.to,
      cc = _ref.cc,
      bcc = _ref.bcc,
      subject = _ref.subject,
      body = _ref.body;
  var params = [];
  if (cc) params.push('cc=' + addressesToString(cc));
  if (bcc) params.push('bcc=' + addressesToString(bcc));
  if (subject) params.push('subject=' + encodeURIComponent(subject));
  if (body) params.push('body=' + encodeURIComponent(body));
  var mailto = 'mailto:' + addressesToString(to);

  if (params.length > 0) {
    mailto += '?' + params.join('&');
  }

  return /*#__PURE__*/_react.default.createElement("a", {
    className: "email-link",
    href: mailto,
    rel: "noopener noreferrer"
  }, _react.default.Children.count(children) > 0 && children, _react.default.Children.count(children) < 1 && to, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "envelope-o"
  }));
};

var _default = EmailLink;
exports.default = _default;