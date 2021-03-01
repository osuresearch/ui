"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

/**
 * Search result component for looking up people in the University.
 *
 * Includes their username alongside each result for better identifying
 * the correct result when multiple people with the same name are returned.
 *
 * @deprecated Use the `Lookup` form component. Will be removed in `@ORIS/ui^5.0`
 */
var PersonSearchResult = function PersonSearchResult(_ref) {
  var resource = _ref.resource,
      onSelect = _ref.onSelect;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "dropdown-item",
    type: "button",
    onClick: function onClick() {
      return onSelect(resource.id, resource.attributes.name);
    }
  }, resource.attributes.name, /*#__PURE__*/_react.default.createElement("small", {
    className: "text-muted pull-right pl-2"
  }, "(", resource.attributes.username, ")"));
};

var _default = PersonSearchResult;
exports.default = _default;