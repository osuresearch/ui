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
 * Even MORE filters to show (contains a collapsible set of groups).
 * 
 * We suggest you only have one `<Filters.More>` at the end of your filter list.
 */
var More = function More(_ref) {
  var children = _ref.children;

  var _useState = (0, _react.useState)(false),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      more = _useState2[0],
      setMore = _useState2[1];

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-more"
  }, more && children, /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-link filters-more-toggle",
    onClick: function onClick() {
      return setMore(!more);
    }
  }, more && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Show Less ", /*#__PURE__*/_react.default.createElement(_.Icon, {
    name: "chevron-up"
  })), !more && /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, "Show More ", /*#__PURE__*/_react.default.createElement(_.Icon, {
    name: "chevron-down"
  }))));
};

var _default = More;
exports.default = _default;