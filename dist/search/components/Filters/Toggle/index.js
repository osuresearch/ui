"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _2 = require("../../..");

var _3 = require("../../../..");

/**
 * Single checkbox with custom formatting support
 */
var Toggle = function Toggle(_ref) {
  var name = _ref.name,
      title = _ref.title,
      _ref$id = _ref.id,
      id = _ref$id === void 0 ? name : _ref$id,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? true : _ref$value,
      children = _ref.children;
  var ctx = (0, _react.useContext)(_.Context);
  var filter = ctx.getFilter(title);

  var onToggle = function onToggle(checked) {
    if (checked) {
      ctx.addFilter((0, _2.term)(name, value, title));
    } else {
      ctx.deleteFilter(title);
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-toggle"
  }, /*#__PURE__*/_react.default.createElement(_3.Checkbox, {
    id: id,
    onChange: function onChange(checked) {
      return onToggle(checked);
    }
  }, /*#__PURE__*/_react.default.createElement(_3.Checkbox.Input, {
    checked: filter !== undefined
  }), /*#__PURE__*/_react.default.createElement(_3.Checkbox.Label, null, children)));
};

var _default = Toggle;
exports.default = _default;