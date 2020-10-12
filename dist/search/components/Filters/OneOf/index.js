"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("../../..");

var _Common = require("../Common");

var _2 = require("..");

/**
 * Radioset (or dropdown) of options where the user may only pick one.
 * 
 * Each option is represented as a `Term` filter.
 */
var OneOf = function OneOf(_ref) {
  var name = _ref.name,
      options = _ref.options;
  var ctx = (0, _react.useContext)(_2.Context); // Find an active filter matching the option set

  var names = Object.values(options);
  var active = ctx.filters.find(function (filter) {
    return filter.name ? names.indexOf(filter.name) > -1 : false;
  });

  var onChange = function onChange(key, value) {
    if (active) {
      ctx.deleteFilter(active.name);
    }

    if (key) {
      ctx.addFilter((0, _.term)(name, key, value));
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-one-of"
  }, /*#__PURE__*/_react.default.createElement(_Common.YetAnotherRadioSetWrapper, {
    name: name,
    options: options,
    value: active === null || active === void 0 ? void 0 : active.term[name],
    onChange: onChange
  }), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-link",
    onClick: function onClick() {
      return onChange();
    }
  }, "Clear"));
};

var _default = OneOf;
exports.default = _default;