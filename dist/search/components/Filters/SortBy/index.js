"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

/**
 * Sort options for a search.
 * 
 * Provide multiple `Sort` rules for the user to pick from.
 */
var SortBy = function SortBy(_ref) {
  var options = _ref.options;
  var ctx = (0, _react.useContext)(_.Context);

  var onChange = function onChange(e) {
    var selected = options[parseInt(e.target.value)];
    ctx.setSort(selected);
  };

  return /*#__PURE__*/_react.default.createElement("select", {
    className: "custom-select custom-select-sm filters-sort",
    onChange: onChange
  }, /*#__PURE__*/_react.default.createElement("option", {
    disabled: true,
    selected: ctx.sort === undefined
  }, "Sort by"), options.map(function (opt, index) {
    var _ctx$sort;

    return /*#__PURE__*/_react.default.createElement("option", {
      key: index,
      selected: opt.name === ((_ctx$sort = ctx.sort) === null || _ctx$sort === void 0 ? void 0 : _ctx$sort.name),
      value: index
    }, opt.name);
  }));
};

var _default = SortBy;
exports.default = _default;