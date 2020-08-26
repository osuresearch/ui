"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("../");

var _FormContext = _interopRequireDefault(require("../../../internal/FormCommon/FormContext"));

var _Components = require("../../../internal/FormCommon/Components");

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _Time = _interopRequireDefault(require("../../Time"));

var _DatePrefix = _interopRequireDefault(require("./DatePrefix"));

var _DateTimePrefix = _interopRequireDefault(require("./DateTimePrefix"));

var Input = /*#__PURE__*/_react.default.forwardRef(function (allprops, ref) {
  // Remove props that we don't want the developer to be
  // accidentally use because of accessibility issues
  // TODO - fix the MonthYear picker (that will be useful)
  var customTimeInput = allprops.customTimeInput,
      timeInputLabel = allprops.timeInputLabel,
      disabledKeyboardNavigation = allprops.disabledKeyboardNavigation,
      showMonthYearPicker = allprops.showMonthYearPicker,
      showMonthYearDropdown = allprops.showMonthYearDropdown,
      monthsShown = allprops.monthsShown,
      withPortal = allprops.withPortal,
      showQuarterYearPicker = allprops.showQuarterYearPicker,
      showTimeSelect = allprops.showTimeSelect,
      showTimeSelectOnly = allprops.showTimeSelectOnly,
      todayButton = allprops.todayButton,
      showYearPicker = allprops.showYearPicker,
      props = (0, _objectWithoutProperties2.default)(allprops, ["customTimeInput", "timeInputLabel", "disabledKeyboardNavigation", "showMonthYearPicker", "showMonthYearDropdown", "monthsShown", "withPortal", "showQuarterYearPicker", "showTimeSelect", "showTimeSelectOnly", "todayButton", "showYearPicker"]);

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var _useContext2 = (0, _react.useContext)(_FormContext.default),
      isDiff = _useContext2.isDiff,
      isPrint = _useContext2.isPrint;

  var _useState = (0, _react.useState)(bind.value || props.selected),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      selected = _useState2[0],
      setSelected = _useState2[1];

  var initial = bind.initialValue || undefined;
  var name = bind.name || props.name;
  var readOnly = bind.readOnly || props.readOnly;
  var classNames = "input-group datepicker ".concat(props.showTimeInput && 'datetimepicker', " ").concat(props.className ? props.className : '', " ").concat(bind.error ? 'is-invalid' : '', " ").concat(bind.success ? 'is-valid' : '');
  var dateFormat = props.dateFormat || props.showTimeInput ? 'MM/dd/yyyy h:mm aa' : 'MM/dd/yyyy'; // Transform selected date to ISO timestamp

  var handleChange = function handleChange(date) {
    var newSelected = date ? date.toISOString() : '';
    setSelected(newSelected);

    if (props.onChange) {
      props.onChange(newSelected);
    } else {
      bind.value = newSelected;
    }
  };

  var formatter = function formatter(timestamp) {
    if (typeof timestamp === 'undefined') return undefined;
    var date = new Date(timestamp);
    var formatted = date.toLocaleDateString("en-US");

    if (props.showTimeInput) {
      formatted += ' ' + date.toLocaleTimeString("en-US");
    }

    return formatted;
  };

  if (isPrint) {
    return /*#__PURE__*/_react.default.createElement(_Components.Print, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "input-group-prefix"
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-calendar",
      "aria-hidden": "true"
    })), formatter(selected));
  }

  if (isDiff) {
    if (selected !== initial) {
      return /*#__PURE__*/_react.default.createElement(_Components.Diff, {
        removed: formatter(initial),
        added: formatter(selected)
      });
    } // No change - render as a basic single value print


    return /*#__PURE__*/_react.default.createElement(_Components.Print, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "input-group-prefix"
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-calendar",
      "aria-hidden": "true"
    })), formatter(selected));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames
  }, !props.showTimeInput && /*#__PURE__*/_react.default.createElement(_DatePrefix.default, null), props.showTimeInput && /*#__PURE__*/_react.default.createElement(_DateTimePrefix.default, null), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, (0, _extends2.default)({}, props, {
    id: bind.id,
    selected: selected ? new Date(selected) : null,
    className: 'form-control date',
    onChange: handleChange,
    shouldCloseOnSelect: !props.showTimeInput // @ts-ignore
    ,
    timeInputLabel: /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "".concat(bind.id, "-time")
    }, "Time"),
    customTimeInput: /*#__PURE__*/_react.default.createElement(_Time.default.Input, {
      id: "".concat(bind.id, "-time")
    }),
    dateFormat: dateFormat,
    readOnly: readOnly,
    required: bind.required || props.required
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "keyboard-notice"
  }, /*#__PURE__*/_react.default.createElement("small", null, /*#__PURE__*/_react.default.createElement("em", null, "Keyboard users: Exit this dialog with the ", /*#__PURE__*/_react.default.createElement("code", null, "esc"), " key")))), /*#__PURE__*/_react.default.createElement("input", {
    type: "hidden",
    ref: ref,
    name: name,
    value: selected && selected,
    disabled: readOnly
  }));
});

var _default = Input;
exports.default = _default;