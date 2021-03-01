"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

/**
 * Default implementation for a single result from `Search`.
 *
 * If you want to customize the result renderer, you need to
 * create your own variation of this component.
 *
 * @deprecated Use the `Lookup` form component. Will be removed in `@ORIS/ui^5.0`
 */
var SearchResult = function SearchResult(_ref) {
  var resource = _ref.resource,
      onSelect = _ref.onSelect;
  return /*#__PURE__*/_react.default.createElement("button", {
    className: "dropdown-item",
    type: "button",
    onClick: function onClick() {
      return onSelect(resource.id, resource.attributes.name);
    }
  }, resource.attributes.name);
};

var _default = SearchResult;
exports.default = _default;