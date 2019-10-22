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
  return _react.default.createElement("nav", {
    className: "osu-navbar",
    "aria-label": "Ohio State nav bar"
  }, _react.default.createElement("div", {
    className: "osu-navbar-info"
  }, _react.default.createElement("a", {
    href: "https://osu.edu",
    title: "The Ohio State University"
  }, "The Ohio State University")), _react.default.createElement("div", {
    className: "osu-navbar-links"
  }, _react.default.createElement("ul", null, _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "https://www.osu.edu/help.php",
    className: "osu-navbar-help"
  }, "Help")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "https://buckeyelink.osu.edu/",
    className: "osu-navbar-buckeyelink"
  }, "BuckeyeLink")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "https://www.osu.edu/map/",
    className: "osu-navbar-map"
  }, "Map")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "https://www.osu.edu/findpeople.php",
    className: "osu-navbar-findpeople"
  }, "Find People")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "https://email.osu.edu/",
    className: "osu-navbar-webmail"
  }, "Webmail")), _react.default.createElement("li", null, _react.default.createElement("a", {
    href: "https://www.osu.edu/search/",
    className: "osu-navbar-search"
  }, "Search Ohio State")))));
};

var _default = OhioStateNavbar;
exports.default = _default;