"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

/**
 * Provides a dropdown for the logged in user to update their profile or logout.
 *
 * Typically rendered within the `Navbar` of an application.
 */
var Profile = function Profile(props) {
  return _react.default.createElement("div", {
    className: "profile dropdown"
  }, _react.default.createElement("a", {
    href: "#",
    className: "dropdown-toggle",
    id: "profile-dropdown",
    "data-toggle": "dropdown",
    "aria-haspopup": "true",
    "aria-expanded": "false"
  }, props.username), _react.default.createElement("div", {
    className: "dropdown-menu dropdown-menu-right",
    "aria-labelledby": "profile-dropdown"
  }, _react.default.createElement("a", {
    className: "dropdown-item",
    href: props.editProfileUrl,
    target: "_blank",
    rel: "noopener noreferrer"
  }, "My Profile"), props.children, _react.default.createElement("div", {
    className: "dropdown-divider"
  }), _react.default.createElement("a", {
    className: "dropdown-item profile-logout",
    href: props.shibbolethLogoutUrl
  }, "Logout")));
};

Profile.propTypes = {
  /**
   * Name.# to display in the UI
   */
  username: _propTypes.default.string.isRequired,

  /**
   * URL for complete Shibboleth logout
   */
  shibbolethLogoutUrl: _propTypes.default.string.isRequired,

  /**
   * URL for the user to edit their research profile
   */
  editProfileUrl: _propTypes.default.string.isRequired,

  /**
   * Additional list items to add to the dropdown.
   *
   * Must be anchors or buttons with class "dropdown-item".
   * See: https://getbootstrap.com/docs/4.0/components/dropdowns/
   */
  children: _propTypes.default.oneOfType([_propTypes.default.arrayOf(_propTypes.default.node), _propTypes.default.object])
};
Profile.defaultProps = {
  shibbolethLogoutUrl: '/Shibboleth.sso/Logout?return=https://webauth.service.ohio-state.edu/idp/profile/Logout',
  editProfileUrl: '/register'
};
var _default = Profile;
exports.default = _default;