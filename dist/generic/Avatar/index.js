"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

/**
 * Fallback (pixel.gif) for when someone does not have an OPIC.
 */
var FALLBACK_URL = 'https://orapps.osu.edu/assets/img/pixel.gif';
/**
 * Colors assigned to initials when someone does not have an OPIC or we disable OPIC
 */

var THEME_COLORS = ['#586a81', '#bb0000', '#6a6f24', '#846622', '#427067', '#442369', '#851e5e'];

var Avatar = function Avatar(_ref) {
  var name = _ref.name,
      username = _ref.username,
      _ref$useOPIC = _ref.useOPIC,
      useOPIC = _ref$useOPIC === void 0 ? true : _ref$useOPIC,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 50 : _ref$size;
  var index = (name.charCodeAt(0) - 65) % THEME_COLORS.length;
  return /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar",
    "aria-hidden": "true",
    style: {
      backgroundColor: THEME_COLORS[index],
      width: size,
      height: size
    }
  }, useOPIC && /*#__PURE__*/_react.default.createElement("img", {
    className: "avatar-opic",
    src: "https://opic.osu.edu/".concat(username, "?width=").concat(size, "&default=").concat(FALLBACK_URL)
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "avatar-initials",
    style: {
      fontSize: size / 2.25 + 'px',
      lineHeight: size + 'px'
    }
  }, name[0].toUpperCase(), username[0].toUpperCase()));
};

var _default = Avatar;
exports.default = _default;