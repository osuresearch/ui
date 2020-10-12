"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _Common = require("../Common");

var _ = require("..");

var _2 = require("../../..");

/**
 * Single checkbox with custom formatting support
 */
var Toggle = function Toggle(_ref) {
  var name = _ref.name,
      title = _ref.title,
      children = _ref.children;
  var ctx = (0, _react.useContext)(_.Context);
  var filter = ctx.getFilter(title);

  var onToggle = function onToggle(checked) {
    if (checked) {
      ctx.addFilter((0, _2.term)(name, true, title));
    } else {
      ctx.deleteFilter(title);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-toggle"
  }, /*#__PURE__*/_react.default.createElement(_Common.YetAnotherCheckboxWrapper, {
    name: name,
    checked: filter !== undefined,
    onClick: onToggle
  }, children));
};

var _default = Toggle;
exports.default = _default;