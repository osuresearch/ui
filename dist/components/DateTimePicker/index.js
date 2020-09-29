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

var _TimeField = _interopRequireDefault(require("../TimeField"));

// @ts-ignore

/**
 * Provides a date picker and time input for a datetime field.
 *
 * This is a wrapper around [react-datepicker](https://reactdatepicker.com) and [TimeField](#timefield).
 * 
 * For Date-only fields, use [DatePicker](#datepicker).
 * For Time-only fields, use [TimeField](#timefield).
 */
var DateTimePicker = function DateTimePicker(_ref) {
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
    className: "input-group datetimepicker"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-prefix"
  }, /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-calendar",
    "aria-hidden": "true"
  }), /*#__PURE__*/_react.default.createElement("i", {
    className: "fa fa-clock-o",
    "aria-hidden": "true"
  })), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, {
    id: id,
    selected: date,
    className: 'form-control datetime ' + (className ? className : ''),
    onChange: handleChange,
    filterDate: filterDate,
    minDate: minDate,
    maxDate: maxDate // @ts-ignore
    ,
    timeInputLabel: /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: id + '-time'
    }, "Time"),
    showTimeInput: true,
    customTimeInput: /*#__PURE__*/_react.default.createElement(_TimeField.default, {
      id: id + '-time'
    }),
    dateFormat: "MM/dd/yyyy h:mm aa",
    readOnly: readOnly,
    disabled: disabled
  }));
};

var _default = DateTimePicker;
exports.default = _default;