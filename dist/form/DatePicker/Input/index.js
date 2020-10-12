"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _ = require("../");

var _FormContext = _interopRequireDefault(require("../../../internal/FormCommon/FormContext"));

var _Print = require("../../../internal/FormCommon/Utility/Print");

var _Diff = require("../../../internal/FormCommon/Utility/Diff");

var _Time = _interopRequireDefault(require("../../Time"));

var _DatePrefix = _interopRequireDefault(require("./DatePrefix"));

var _DateTimePrefix = _interopRequireDefault(require("./DateTimePrefix"));

/**
 * Dropdown to select a date and time.
 * 
 * This component will accept *most* props supported by [react-datepicker](https://reactdatepicker.com/)
 * with the exception of the following that fail to meet accessibility standards:
 * 
 * ```ts
 * type DisabledReactDatePickerProps = 
 * 'customTimeInput' | 'timeInputLabel' | 'disabledKeyboardNavigation'
 *  | 'showMonthYearPicker' | 'showMonthYearDropdown' | 'monthsShown'
 *  | 'withPortal' | 'showQuarterYearPicker' | 'showTimeSelect'
 *  | 'showTimeSelectOnly' | 'todayButton' | 'showYearPicker'
 *  | 'onChange' | 'selected'
 *  ```
 * 
 * If you wish to use one of these, please submit a merge request with a patch that resolves the issues.
 */
var Input = function Input(props) {
  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var _useContext2 = (0, _react.useContext)(_FormContext.default),
      isDiff = _useContext2.isDiff,
      isPrint = _useContext2.isPrint;

  var selected = bind.value || props.value;
  var initial = bind.initialValue || undefined;
  var name = bind.name || props.name;
  var readOnly = bind.readOnly || props.readOnly;
  var classNames = "input-group datepicker ".concat(props.showTimeInput && 'datetimepicker', " ").concat(props.className ? props.className : '', " ").concat(bind.error ? 'is-invalid' : '', " ").concat(bind.success ? 'is-valid' : '');
  var dateFormat = props.dateFormat || props.showTimeInput ? 'MM/dd/yyyy h:mm aa' : 'MM/dd/yyyy'; // Transform selected date to ISO timestamp

  var handleChange = function handleChange(date) {
    var newSelected = date ? date.toISOString() : '';

    if (props.onChange) {
      props.onChange(newSelected);
    } else {
      bind.value = newSelected;
    }
  };

  var ref = (0, _react.useRef)(null);

  var handleFocus = function handleFocus() {
    if (ref) {
      var _ref$current;

      // Add screen reader instructions onFocus. This
      // includes the instructions included in this
      // component, as well as any text in
      // `<DatePicker.Help>`
      // @ts-ignore
      (_ref$current = ref.current) === null || _ref$current === void 0 ? void 0 : _ref$current.input.setAttribute('aria-describedby', "sr-instructions ".concat(bind.id, "-help"));
    }
  };

  var formatter = function formatter(timestamp) {
    if (typeof timestamp === 'undefined') return undefined;
    var date = new Date(timestamp);
    var formatted = date.toLocaleDateString("en-US");

    if (props.showTimeInput) {
      formatted += ' ' + date.toLocaleTimeString("en-US", {
        hour: '2-digit',
        minute: '2-digit'
      });
    }

    return formatted;
  };

  if (isPrint) {
    return /*#__PURE__*/_react.default.createElement(_Print.Print, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "input-group-prefix"
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-calendar",
      "aria-hidden": "true"
    })), formatter(selected));
  }

  if (isDiff) {
    if (selected !== initial) {
      return /*#__PURE__*/_react.default.createElement(_Diff.Diff, {
        removed: formatter(initial),
        added: formatter(selected)
      });
    } // No change - render as a basic single value print


    return /*#__PURE__*/_react.default.createElement(_Print.Print, null, /*#__PURE__*/_react.default.createElement("span", {
      className: "input-group-prefix"
    }, /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-calendar",
      "aria-hidden": "true"
    })), formatter(selected));
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames
  }, !props.showTimeInput && /*#__PURE__*/_react.default.createElement(_DatePrefix.default, null), props.showTimeInput && /*#__PURE__*/_react.default.createElement(_DateTimePrefix.default, null), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    id: bind.id,
    selected: selected ? new Date(selected) : null,
    value: selected && formatter(selected),
    className: 'form-control date',
    onChange: handleChange,
    onFocus: handleFocus,
    shouldCloseOnSelect: !props.showTimeInput // @ts-ignore
    ,
    timeInputLabel: /*#__PURE__*/_react.default.createElement("label", {
      htmlFor: "".concat(bind.id, "-time")
    }, "Time"),
    customTimeInput: /*#__PURE__*/_react.default.createElement(_Time.default.Input, {
      id: "".concat(bind.id, "-time")
    }),
    dateFormat: dateFormat,
    readOnly: readOnly
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "keyboard-notice"
  }, /*#__PURE__*/_react.default.createElement("small", null, /*#__PURE__*/_react.default.createElement("em", null, "Keyboard users: Exit this dialog with the ", /*#__PURE__*/_react.default.createElement("code", null, "esc"), " key"))), /*#__PURE__*/_react.default.createElement("div", {
    id: "sr-instructions",
    className: "sr-only"
  }, "A calendar widget ", props.showTimeInput && 'with a time input', " is open. To interact with the calendar, press the up or down arrow keys. ", props.showTimeInput && 'To navigate to the time input, press the tab key.', " To exit, press the escape key,,")));
};

var _default = Input;
exports.default = _default;