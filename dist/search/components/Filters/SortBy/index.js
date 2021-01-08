"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _2 = require("../../../..");

/**
 * Sort options for a search.
 *
 * Provide multiple `Sort` rules for the user to pick from.
 */
var SortBy = function SortBy(_ref) {
  var options = _ref.options,
      title = _ref.title,
      name = _ref.name,
      size = _ref.size;
  var ctx = (0, _react.useContext)(_.Context);

  var onChange = function onChange(e) {
    var selected = options[parseInt(e.target.value)];
    ctx.setSort(selected);
  };

  if (!title) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "text-danger"
    }, "Title property not defined");
  }

  return /*#__PURE__*/_react.default.createElement(_2.Select, {
    id: name
  }, /*#__PURE__*/_react.default.createElement(_2.Select.Label, {
    className: "sr-only"
  }, title), /*#__PURE__*/_react.default.createElement(_2.Select.Control, {
    onChange: onChange,
    className: size && "form-control-".concat(size)
  }, /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_2.Select.Option, {
    disabled: true,
    selected: ctx.sort === undefined
  }, title), options.map(function (opt, index) {
    var _ctx$sort;

    return /*#__PURE__*/_react.default.createElement(_2.Select.Option, {
      key: index,
      selected: opt.name === ((_ctx$sort = ctx.sort) === null || _ctx$sort === void 0 ? void 0 : _ctx$sort.name),
      value: index
    }, opt.name);
  }))));
};

var _default = SortBy;
exports.default = _default;