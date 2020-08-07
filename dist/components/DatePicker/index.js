"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

// @ts-ignore

/**
 * Provides a calendar date picker for a date field.
 *
 * This is a wrapper around [react-datepicker](https://reactdatepicker.com)
 * 
 * For Date & Time fields, use [DateTimePicker](#datetimepicker). 
 * For Time fields, use [TimeField](#timefield).
 */
var DatePicker = function DatePicker(_ref) {
  var _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? null : _ref$defaultValue,
      onChange = _ref.onChange,
      filterDate = _ref.filterDate,
      minDate = _ref.minDate,
      maxDate = _ref.maxDate,
      id = _ref.id,
      className = _ref.className,
      readOnly = _ref.readOnly,
      disabled = _ref.disabled;

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      date = _useState2[0],
      setDate = _useState2[1];

  var handleChange = function handleChange(newDate) {
    setDate(newDate);
    onChange(newDate);
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group datepicker"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-prefix"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-calendar",
    "aria-hidden": "true"
  })), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    id: id,
    selected: date,
    className: 'form-control date ' + (className ? className : ''),
    onChange: handleChange,
    filterDate: filterDate,
    minDate: minDate,
    maxDate: maxDate,
    dateFormat: "MM/dd/yyyy",
    readOnly: readOnly,
    disabled: disabled
  }));
};

var _default = DatePicker;
exports.default = _default;