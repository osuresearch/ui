"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _ = require("../../..");

var _2 = require("..");

var _3 = require("../../../..");

/**
 * Radioset of options where the user may only pick one.
 *
 * Each option is represented as a `Term` filter.
 */
var OneOf = function OneOf(_ref) {
  var name = _ref.name,
      title = _ref.title,
      options = _ref.options;
  var ctx = (0, _react.useContext)(_2.Context); // Find an active filter matching the option set

  var names = Object.values(options);
  var active = ctx.filters.find(function (filter) {
    return typeof filter.name === 'string' ? names.indexOf(filter.name) > -1 : false;
  });

  var _onChange = function onChange(key, value) {
    if (active) {
      ctx.deleteFilter(active.name);
    }

    if (key) {
      ctx.addFilter((0, _.term)(name, key, value));
    }
  };

  if (!title) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "text-danger"
    }, "Title property not defined");
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "filters-one-of"
  }, /*#__PURE__*/_react.default.createElement("fieldset", null, /*#__PURE__*/_react.default.createElement("legend", {
    className: "sr-only"
  }, title), Object.keys(options).map(function (key) {
    var id = "".concat(name, "-").concat(key);
    var value = active === null || active === void 0 ? void 0 : active.term[name];
    return /*#__PURE__*/_react.default.createElement(_3.Radio, {
      id: id,
      name: name
    }, /*#__PURE__*/_react.default.createElement(_3.Radio.Input, {
      checked: key === value,
      onChange: function onChange() {
        return _onChange(key, options[key]);
      }
    }), /*#__PURE__*/_react.default.createElement(_3.Radio.Label, null, options[key]));
  })), /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-link",
    onClick: function onClick() {
      return _onChange();
    }
  }, "Clear"));
};

var _default = OneOf;
exports.default = _default;