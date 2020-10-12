"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("../../../..");

/**
 * A titled and collapsible set of one or more filters
 */
var Group = function Group(_ref) {
  var title = _ref.title,
      _ref$open = _ref.open,
      open = _ref$open === void 0 ? false : _ref$open,
      children = _ref.children;

  var _useState = (0, _react.useState)(!open),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      collapsed = _useState2[0],
      setCollapsed = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-group"
  }, /*#__PURE__*/_react.default.createElement("button", {
    className: "filters-group-title",
    onClick: function onClick() {
      return setCollapsed(!collapsed);
    }
  }, title, /*#__PURE__*/_react.default.createElement(_.Icon, {
    name: collapsed ? 'angle-down' : 'angle-up'
  })), !collapsed && /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-group-filters"
  }, children));
};

var _default = Group;
exports.default = _default;