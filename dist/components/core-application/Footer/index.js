"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

/**
 * Office of Research brand footer with help and support information
 */
var Footer = function Footer(_ref) {
  var _ref$department = _ref.department,
      department = _ref$department === void 0 ? 'Office of Research' : _ref$department,
      _ref$website = _ref.website,
      website = _ref$website === void 0 ? 'https://research.osu.edu' : _ref$website,
      _ref$address = _ref.address,
      address = _ref$address === void 0 ? '1960 Kenny Road | Columbus, OH 43210' : _ref$address,
      _ref$contact = _ref.contact,
      contact = _ref$contact === void 0 ? 'https://research.osu.edu/contact' : _ref$contact,
      _ref$accessibilityCon = _ref.accessibilityContact,
      accessibilityContact = _ref$accessibilityCon === void 0 ? 'mailto:oraccessibility@osu.edu' : _ref$accessibilityCon;
  return /*#__PURE__*/_react.default.createElement("footer", null, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "http://www.osu.edu/",
    className: "wordmark"
  }, /*#__PURE__*/_react.default.createElement("img", {
    src: "https://orapps.osu.edu/assets/img/osu-footer-wordmark.png",
    alt: "The Ohio State University",
    title: "The Ohio State University home page"
  }))), /*#__PURE__*/_react.default.createElement("li", null, "\xA9 ", new Date().getFullYear(), ", The Ohio State University - ", /*#__PURE__*/_react.default.createElement("a", {
    href: website,
    target: "_blank",
    rel: "noopener noreferrer"
  }, department)), /*#__PURE__*/_react.default.createElement("li", {
    className: "hidden-xs-down"
  }, address, " | ", /*#__PURE__*/_react.default.createElement("a", {
    href: contact,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Contact")), /*#__PURE__*/_react.default.createElement("li", null, "If you have a disability and experience difficulty accessing this content, please contact the ", /*#__PURE__*/_react.default.createElement("a", {
    href: accessibilityContact
  }, "Accessibility Coordinator"))));
};

var _default = Footer;
exports.default = _default;