"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _2 = require("../../..");

var _3 = require("../../../..");

/**
 * Match an exact value for a given field.
 *
 * The display name of the filter will be in the form of `{prefix}: "{value}"`.
 * For example: `Protocol: "2019H0023"`
 */
var Match = function Match(_ref) {
  var name = _ref.name,
      prefix = _ref.prefix,
      placeholder = _ref.placeholder,
      title = _ref.title,
      _ref$inputTitle = _ref.inputTitle,
      inputTitle = _ref$inputTitle === void 0 ? 'Search by keyword' : _ref$inputTitle;
  var ctx = (0, _react.useContext)(_.Context);

  var _useState = (0, _react.useState)(''),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1]; // title + ': ' causes pills to also display the term value


  var filter = ctx.getFilter(prefix + ':');
  var currentValue = (filter === null || filter === void 0 ? void 0 : filter.term[name]) || ''; // Update self when an external entity modifies the filter

  (0, _react.useEffect)(function () {
    return setValue(currentValue);
  }, [currentValue]);

  var updateFilter = function updateFilter(newValue) {
    if (newValue.length < 1) {
      ctx.deleteFilter(prefix + ':');
    } else {
      ctx.addFilter((0, _2.term)(name, newValue, prefix + ':'));
    }
  };

  if (!title) {
    return /*#__PURE__*/_react.default.createElement("span", {
      className: "text-danger"
    }, "Title property not defined");
  }

  return /*#__PURE__*/_react.default.createElement(_3.Text, {
    id: name
  }, /*#__PURE__*/_react.default.createElement(_3.Text.Label, {
    className: "sr-only"
  }, title), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group filters-terms"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-prefix"
  }, /*#__PURE__*/_react.default.createElement(_3.Icon, {
    name: "search"
  })), /*#__PURE__*/_react.default.createElement(_3.Text.Input, {
    title: inputTitle,
    placeholder: placeholder,
    value: value,
    onChange: function onChange(e) {
      return setValue(e.currentTarget.value);
    },
    onKeyUp: function onKeyUp(e) {
      return e.key === 'Enter' && updateFilter(value);
    }
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group-append"
  }, /*#__PURE__*/_react.default.createElement("button", {
    type: "button",
    className: "btn btn-outline-secondary",
    onClick: function onClick() {
      return updateFilter(value);
    }
  }, "Search"))));
};

var _default = Match;
exports.default = _default;