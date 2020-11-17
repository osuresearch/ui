"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _Utility = require("../../../../internal/FormCommon/Utility");

var _helpers = require("../helpers");

var _HourInput = _interopRequireDefault(require("./HourInput"));

var _MinutesInput = _interopRequireDefault(require("./MinutesInput"));

var _MeridiemInput = _interopRequireDefault(require("./MeridiemInput"));

var _SRDescriptions = _interopRequireDefault(require("./SRDescriptions"));

var Input = function Input(props) {
  // Most commonly used props
  var defaultValue = props.defaultValue,
      value = props.value,
      onChange = props.onChange;

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var _useState = (0, _react.useState)((0, _helpers.getHourValue)(defaultValue)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      hour = _useState2[0],
      setHour = _useState2[1];

  var _useState3 = (0, _react.useState)((0, _helpers.getMinuteValue)(defaultValue)),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      minutes = _useState4[0],
      setMinutes = _useState4[1];

  var _useState5 = (0, _react.useState)((0, _helpers.getMeridiemValue)(defaultValue)),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      meridiem = _useState6[0],
      setMeridiem = _useState6[1];

  var hourRef = (0, _react.useRef)(null);
  var minutesRef = (0, _react.useRef)(null);
  var meridiemRef = (0, _react.useRef)(null);
  var makeNewTime = (0, _react.useCallback)(function () {
    var newTime;

    if (hour && minutes && meridiem) {
      var hourInt = parseInt(hour);
      newTime = (meridiem === 'AM' ? hourInt : hourInt === 12 ? 12 : hourInt + 12).toString() + ':' + minutes;
    }

    return newTime;
  }, [hour, minutes, meridiem]);
  (0, _react.useEffect)(function () {
    var newTime = makeNewTime(); // Fire onChange handler IFF there's a time and the 
    // time does not differ from the driving `value` prop

    if (hour && minutes && meridiem && newTime && newTime !== value && onChange) {
      onChange(newTime);
    }
  }, [hour, minutes, meridiem, value, onChange, makeNewTime]); // Detect when the parent component updates the controlling value
  // and update internal states - without firing onChange

  (0, _react.useEffect)(function () {
    if (value) {
      setHour((0, _helpers.getHourValue)(value));
      setMinutes((0, _helpers.getMinuteValue)(value));
      setMeridiem((0, _helpers.getMeridiemValue)(value));
    }
  }, [value]); // Select the input text

  var handleClick = function handleClick(e) {
    return e.target.select();
  }; // Callback onBlur when the user exits the component
  // https://gist.github.com/pstoica/4323d3e6e37e8a23dd59


  var handleInternalBlur = function handleInternalBlur(e) {
    var currentTarget = e.currentTarget; // Check the newly focused element in the next tick of the event loop

    setTimeout(function () {
      // Check if the new activeElement is a child of the original container
      if (!currentTarget.contains(document.activeElement)) {
        props.onBlur && props.onBlur();
      }
    }, 0);
  };

  var name = bind.name || props.name;
  var readOnly = bind.readOnly || props.readOnly;
  var required = bind.required || props.required;
  var classNames = "input-group ".concat(props.className ? props.className : '', " ").concat(props.className ? props.className : '', " ").concat(bind.error && 'is-invalid', " ").concat(bind.success && 'is-valid', " ").concat(readOnly ? 'readonly' : '');
  return /*#__PURE__*/_react.default.createElement("div", {
    className: classNames,
    onBlur: handleInternalBlur
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "input-group-prefix"
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fa fa-clock-o",
    "aria-hidden": "true"
  })), readOnly && /*#__PURE__*/_react.default.createElement(_Utility.Print, {
    id: props.id || bind.id,
    name: name,
    value: hour && minutes && meridiem && "".concat(hour, ":").concat(minutes, " ").concat(meridiem)
  }), !readOnly && /*#__PURE__*/_react.default.createElement("div", {
    className: "form-control"
  }, /*#__PURE__*/_react.default.createElement(_HourInput.default, {
    ref: hourRef,
    id: props.id || bind.id,
    hour: hour,
    setHour: setHour,
    setMeridiem: setMeridiem,
    handleClick: handleClick,
    minutesRef: minutesRef,
    meridiemRef: meridiemRef,
    readOnly: readOnly,
    required: required,
    invalid: bind.error ? true : false
  }), /*#__PURE__*/_react.default.createElement("span", null, ":"), /*#__PURE__*/_react.default.createElement(_MinutesInput.default, {
    ref: minutesRef,
    id: props.id || bind.id,
    minutes: minutes,
    setMinutes: setMinutes,
    handleClick: handleClick,
    hourRef: hourRef,
    meridiemRef: meridiemRef,
    readOnly: readOnly,
    required: required,
    invalid: bind.error ? true : false
  }), /*#__PURE__*/_react.default.createElement(_MeridiemInput.default, {
    ref: meridiemRef,
    id: props.id || bind.id,
    meridiem: meridiem,
    setMeridiem: setMeridiem,
    handleClick: handleClick,
    hourRef: hourRef,
    minutesRef: minutesRef,
    readOnly: readOnly,
    required: required,
    invalid: bind.error ? true : false
  })), /*#__PURE__*/_react.default.createElement(_SRDescriptions.default, {
    readOnly: readOnly,
    id: props.id || bind.id,
    hour: hour,
    minutes: minutes,
    meridiem: meridiem
  }));
};

exports.Input = Input;