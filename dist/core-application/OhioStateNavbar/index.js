"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

/**
 * Ohio State brand navbar
 */
var OhioStateNavbar = function OhioStateNavbar() {
  return /*#__PURE__*/_react.default.createElement("nav", {
    className: "osu-navbar",
    "aria-label": "Ohio State nav bar"
  }, /*#__PURE__*/_react.default.createElement("div", {
    className: "osu-navbar-info"
  }, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://osu.edu",
    title: "The Ohio State University"
  }, "The Ohio State University")), /*#__PURE__*/_react.default.createElement("div", {
    className: "osu-navbar-links"
  }, /*#__PURE__*/_react.default.createElement("ul", null, /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.osu.edu/help.php",
    className: "osu-navbar-help"
  }, "Help")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://buckeyelink.osu.edu/",
    className: "osu-navbar-buckeyelink"
  }, "BuckeyeLink")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.osu.edu/map/",
    className: "osu-navbar-map"
  }, "Map")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.osu.edu/findpeople.php",
    className: "osu-navbar-findpeople"
  }, "Find People")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://email.osu.edu/",
    className: "osu-navbar-webmail"
  }, "Webmail")), /*#__PURE__*/_react.default.createElement("li", null, /*#__PURE__*/_react.default.createElement("a", {
    href: "https://www.osu.edu/search/",
    className: "osu-navbar-search"
  }, "Search Ohio State")))));
};

var _default = OhioStateNavbar;
exports.default = _default;