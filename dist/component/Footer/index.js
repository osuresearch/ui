"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Office of Research brand footer with help and support information
 */
var Footer = function Footer(props) {
  return _react.default.createElement("footer", null, _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "http://www.osu.edu/",
    className: "wordmark"
  }, _react.default.createElement("img", {
    src: "https://orapps.osu.edu/assets/img/osu-footer-wordmark.png",
    alt: "The Ohio State University",
    title: "The Ohio State University home page"
  }))), _react.default.createElement("li", null, "\xA9 ", new Date().getFullYear(), ", The Ohio State University - ", _react.default.createElement("a", {
    href: props.website,
    target: "_blank",
    rel: "noopener noreferrer"
  }, props.department)), _react.default.createElement("li", {
    className: "hidden-xs-down"
  }, props.address, " | ", _react.default.createElement("a", {
    href: props.contact,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Contact")), _react.default.createElement("li", null, "If you have trouble accessing this page and need to request an alternate format, contact the ", _react.default.createElement("a", {
    href: "https://orapps.osu.edu/webmaster",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "webmaster"), ".")));
};

Footer.propTypes = {
  department: _propTypes.default.string.isRequired,
  website: _propTypes.default.string.isRequired,
  address: _propTypes.default.string.isRequired,
  contact: _propTypes.default.string.isRequired
};
Footer.defaultProps = {
  department: 'Office of Research',
  website: 'https://research.osu.edu',
  address: '1960 Kenny Road | Columbus, OH 43210',
  contact: 'https://research.osu.edu/contact'
};
var _default = Footer;
exports.default = _default;