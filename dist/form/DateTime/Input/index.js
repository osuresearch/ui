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

var _ = require("..");

var _dayjs = _interopRequireDefault(require("dayjs"));

var _Diff = require("../../../internal/FormCommon/Utility/Diff");

var _Time = _interopRequireDefault(require("../../Time"));

var _DatePrefix = _interopRequireDefault(require("./DatePrefix"));

var _DateTimePrefix = _interopRequireDefault(require("./DateTimePrefix"));

/**
 * Input and popup calendar to select a date (and optionally time).
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
 *  ```
 * 
 * If you wish to use one of these, please submit a merge request with a patch that resolves the issues.
 */
var Input = function Input(props) {
  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var selected = bind.value || props.value;
  var initial = bind.initialValue || undefined;
  var name = bind.name || props.name;
  var readOnly = bind.readOnly || props.readOnly;
  var classNames = "input-group ".concat(props.showTimeInput && 'datetimepicker', " ").concat(props.className ? props.className : '', " ").concat(bind.error ? 'is-invalid' : '', " ").concat(bind.success ? 'is-valid' : '');
  var dateFormat = props.dateFormat || props.showTimeInput ? 'MM/dd/yyyy h:mm aa' : 'MM/dd/yyyy'; // Transform selected date to appropriate return value

  var handleChange = function handleChange(date) {
    // Default - return as `Y-m-d`, e.g. `2011-05-23`
    var newSelected = date ? (0, _dayjs.default)(date).format('YYYY-MM-DD') : ''; // If the time input is included, return it as an ISO8601 datetime string

    if (props.showTimeInput) {
      newSelected = date ? (0, _dayjs.default)(date).toISOString() : '';
    }

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
    if (typeof timestamp === 'undefined') return undefined; // let formatted = date.toLocaleDateString("en-US");

    var formatted = (0, _dayjs.default)(timestamp).format('MM/DD/YYYY');

    if (props.showTimeInput) {
      formatted = (0, _dayjs.default)(timestamp).format('MM/DD/YYYY hh:mm A');
    }

    return formatted;
  };

  if (bind.diff) {
    if (selected !== initial) {
      return /*#__PURE__*/_react.default.createElement(_Diff.Diff, {
        removed: formatter(initial),
        added: formatter(selected)
      });
    }
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames
  }, !props.showTimeInput && /*#__PURE__*/_react.default.createElement(_DatePrefix.default, null), props.showTimeInput && /*#__PURE__*/_react.default.createElement(_DateTimePrefix.default, null), /*#__PURE__*/_react.default.createElement(_reactDatepicker.default, (0, _extends2.default)({
    ref: ref
  }, props, {
    id: bind.id,
    selected: selected ? (0, _dayjs.default)(selected).toDate() : null,
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
    readOnly: readOnly,
    "aria-disabled": readOnly
  }), /*#__PURE__*/_react.default.createElement("div", {
    className: "keyboard-notice"
  }, /*#__PURE__*/_react.default.createElement("small", null, /*#__PURE__*/_react.default.createElement("em", null, "Keyboard users: Exit this dialog with the ", /*#__PURE__*/_react.default.createElement("code", null, "esc"), " key"))), /*#__PURE__*/_react.default.createElement("div", {
    id: "sr-instructions",
    className: "sr-only"
  }, "A calendar widget ", props.showTimeInput && 'with a time input', " is open. To interact with the calendar, press the up or down arrow keys. ", props.showTimeInput && 'To navigate to the time input, press the tab key.', " To exit, press the escape key,,")));
};

var _default = Input;
exports.default = _default;