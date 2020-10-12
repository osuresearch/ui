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
 * Enumeration of options that get combined together into a single `AnyOf` filter.
 * 
 * Only supports strings for keys.
 */
var AnyOf = function AnyOf(_ref) {
  var name = _ref.name,
      options = _ref.options,
      _ref$minimumOptionsFo = _ref.minimumOptionsForClearButton,
      minimumOptionsForClearButton = _ref$minimumOptionsFo === void 0 ? 5 : _ref$minimumOptionsFo;
  var ctx = (0, _react.useContext)(_2.Context);
  var filter = ctx.getFilter(name);
  var values = [];

  if (filter) {
    var field = Object.keys(filter.anyOf)[0];
    values = filter.anyOf[field];
  }

  var onToggle = function onToggle(entry, checked) {
    var updated = values.filter(function (v) {
      return v !== entry;
    });

    if (checked) {
      updated.push(entry);
    }

    if (updated.length < 1) {
      ctx.deleteFilter(name);
    } else {
      ctx.addFilter((0, _.anyOf)(name, updated, name));
    }
  };

  var onClear = function onClear() {
    ctx.deleteFilter(name);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-any-of"
  }, options.map(function (entry) {
    return /*#__PURE__*/_react.default.createElement(_Common.YetAnotherCheckboxWrapper, {
      name: "".concat(name, "-").concat(entry),
      checked: values.indexOf(entry) >= 0,
      onClick: function onClick(checked) {
        return onToggle(entry, checked);
      }
    }, entry);
  }), options.length >= minimumOptionsForClearButton && /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-link",
    onClick: onClear
  }, "Clear"));
};

var _default = AnyOf;
exports.default = _default;