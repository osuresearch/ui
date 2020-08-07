"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

/* eslint-disable jsx-a11y/no-redundant-roles */
function addLeadingZero(value) {
  return value.length === 1 ? "0" + value : value;
}

function getHourValue(value) {
  if (!value.length) return '';
  var parts = value.split(':').map(Number);
  return addLeadingZero((parts[0] <= 12 ? parts[0] : parts[0] - 12).toString());
}

function getMinuteValue(value) {
  if (!value.length) return '';
  var parts = value.split(':').map(Number);
  return addLeadingZero(parts[1].toString());
}

function getMeridiemValue(value) {
  if (!value.length) return '';
  var parts = value.split(':').map(Number);
  return parts[0] < 12 ? 'AM' : 'PM';
}
/**
 * Provides a time input for a time field.
 *
 * This component replicates the `<input type='time' />` Firefox/Chrome element
 * to work in all browsers.
 * 
 * The component expects/returns an `hour:minutes` string in 24-hour time format.
 * 
 * For Date fields, use [DatePicker](#datepicker). 
 * For Datetime fields, use [DateTimePicker](#datetimepicker).
 * 
 * Still to-do: Allow minimum and maximum times
 */


var TimeField = function TimeField(_ref) {
  var onChange = _ref.onChange,
      _ref$defaultValue = _ref.defaultValue,
      defaultValue = _ref$defaultValue === void 0 ? '' : _ref$defaultValue,
      _ref$value = _ref.value,
      value = _ref$value === void 0 ? '' : _ref$value,
      id = _ref.id,
      className = _ref.className,
      readOnly = _ref.readOnly,
      required = _ref.required;

  var _useState = (0, _react.useState)(getHourValue(defaultValue)),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      hour = _useState2[0],
      setHour = _useState2[1];

  var hourRef = (0, _react.useRef)(null);

  var _useState3 = (0, _react.useState)(getMinuteValue(defaultValue)),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      minutes = _useState4[0],
      setMinutes = _useState4[1];

  var minutesRef = (0, _react.useRef)(null);

  var _useState5 = (0, _react.useState)(getMeridiemValue(defaultValue)),
      _useState6 = (0, _slicedToArray2.default)(_useState5, 2),
      amPm = _useState6[0],
      setAmPm = _useState6[1];

  var amPmRef = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    var hourInt = parseInt(hour);
    var newTime = (amPm === 'AM' ? hourInt : hourInt === 12 ? 12 : hourInt + 12).toString() + ':' + minutes; // Fire onChange handler IFF there's a time and the 
    // time does not differ from the driving `value` prop

    if (hour && minutes && amPm && newTime !== value && onChange) {
      onChange(newTime);
    }
  }, [hour, minutes, amPm, value, onChange]); // Detect when the parent component updates the controlling value
  // and update internal states - without firing onChange

  (0, _react.useEffect)(function () {
    setHour(getHourValue(value));
    setMinutes(getMinuteValue(value));
    setAmPm(getMeridiemValue(value));
  }, [value]); // Select the input text

  var handleClick = function handleClick(e) {
    return e.target.select();
  };

  var handleKeyDown = function handleKeyDown(e) {
    var key = e.key;
    var _ref2 = e.target,
        name = _ref2.name,
        value = _ref2.value,
        min = _ref2.min,
        max = _ref2.max,
        readOnly = _ref2.readOnly;
    /* Prevent non-numeric characters from being input for hour/minutes */

    if (key.length === 1 && /\D/.test(key) && name !== 'am-pm') {
      e.preventDefault();
      return;
    }

    switch (key) {
      /* Clear field on Delete/Backspace */
      case 'Delete':
      case 'Backspace':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        name === 'hour' && setHour('');
        name === 'minute' && setMinutes('');
        name === 'am-pm' && setAmPm('');
        break;

      case 'ArrowRight':
        // Hour To Minutes input
        if (name === 'hour') {
          var _minutesRef$current;

          minutesRef === null || minutesRef === void 0 ? void 0 : (_minutesRef$current = minutesRef.current) === null || _minutesRef$current === void 0 ? void 0 : _minutesRef$current.select();
        } // Minutes to AM/PM input


        if (name === 'minute') {
          var _amPmRef$current;

          amPmRef === null || amPmRef === void 0 ? void 0 : (_amPmRef$current = amPmRef.current) === null || _amPmRef$current === void 0 ? void 0 : _amPmRef$current.select();
        } // AM/PM to Hour input


        if (name === 'am-pm') {
          var _hourRef$current;

          hourRef === null || hourRef === void 0 ? void 0 : (_hourRef$current = hourRef.current) === null || _hourRef$current === void 0 ? void 0 : _hourRef$current.select();
        }

        break;

      case 'ArrowLeft':
        // Hour to AM/PM input
        if (name === 'hour') {
          var _amPmRef$current2;

          amPmRef === null || amPmRef === void 0 ? void 0 : (_amPmRef$current2 = amPmRef.current) === null || _amPmRef$current2 === void 0 ? void 0 : _amPmRef$current2.select();
        } // Minutes to Hour input


        if (name === 'minute') {
          var _hourRef$current2;

          hourRef === null || hourRef === void 0 ? void 0 : (_hourRef$current2 = hourRef.current) === null || _hourRef$current2 === void 0 ? void 0 : _hourRef$current2.select();
        } // AM/PM to Minutes input


        if (name === 'am-pm') {
          var _minutesRef$current2;

          minutesRef === null || minutesRef === void 0 ? void 0 : (_minutesRef$current2 = minutesRef.current) === null || _minutesRef$current2 === void 0 ? void 0 : _minutesRef$current2.select();
        }

        break;

      case 'ArrowDown':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        name === 'am-pm' && setAmPm(value === 'AM' ? 'PM' : 'AM');

        if (value <= min) {
          name === 'hour' && setHour('12');
          name === 'minute' && setMinutes('59');
          e.preventDefault();
        }

        break;

      case 'ArrowUp':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        name === 'am-pm' && setAmPm(value === 'AM' ? 'PM' : 'AM');

        if (value === max || value === '') {
          name === 'hour' && setHour('01');
          name === 'minute' && setMinutes('00');
          e.preventDefault();
        }

        break;

      case 'Home':
        // Spinbutton behavior: https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
        if (readOnly) {
          e.preventDefault();
          return;
        }

        name === 'hour' && setHour('01');
        name === 'minute' && setMinutes('00');
        e.preventDefault();
        break;

      case 'End':
        // Spinbutton behavior: https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
        if (readOnly) {
          e.preventDefault();
          return;
        }

        name === 'hour' && setHour('12');
        name === 'minute' && setMinutes('59');
        e.preventDefault();
        break;

      case 'a':
      case 'A':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        setAmPm('AM');
        break;

      case 'p':
      case 'P':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        setAmPm('PM');
        break;

      default:
        break;
    }
  };

  var handleKeyUp = function handleKeyUp(e) {
    /* Reselect value on arrow key up */
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') e.target.select();
    /* Set hour to 12 if the value is double zeros when the user tabs/arrows away from the field */

    if (e.key === 'ArrowRight' || e.key === 'ArrowLeft' || e.key === 'Tab') {
      hour === '00' && setHour('12');
    }
  };

  var handleKeyPress = function handleKeyPress(e) {
    var key = e.key;
    var _ref3 = e.target,
        name = _ref3.name;
    /* Change input to next field when key is greater than the highest possible first digit of the hour/minute */

    if (name === "hour" && /[3-9]/.test(key)) {
      var _minutesRef$current3;

      minutesRef === null || minutesRef === void 0 ? void 0 : (_minutesRef$current3 = minutesRef.current) === null || _minutesRef$current3 === void 0 ? void 0 : _minutesRef$current3.select();
    }

    if (name === 'minute' && /[6-9]/.test(key)) {
      var _amPmRef$current3;

      amPmRef === null || amPmRef === void 0 ? void 0 : (_amPmRef$current3 = amPmRef.current) === null || _amPmRef$current3 === void 0 ? void 0 : _amPmRef$current3.select();
    }
  };

  var handleHourChange = function handleHourChange(e) {
    var value = addLeadingZero(e.target.value);

    if (value.length === 2) {
      /* Two-digit stepping */
      setHour(value);
    } else if (value.length > 2) {
      var _minutesRef$current4;

      /* Two-digit typing, i.e. the value is going to be three digits */
      var intValue = parseInt(value); // Select the minutes input

      minutesRef === null || minutesRef === void 0 ? void 0 : (_minutesRef$current4 = minutesRef.current) === null || _minutesRef$current4 === void 0 ? void 0 : _minutesRef$current4.select(); // Convert military time values to 12h time

      if (intValue >= 13 && intValue <= 23) {
        setAmPm('PM');
        setHour(addLeadingZero((intValue - 12).toString()));
      } else if (intValue === 0) {
        setHour('12');
      } else if (intValue <= 12) {
        // Standard time, 11 or 12
        setHour(value.slice(-2));
      } else if (intValue > 23) {
        // If someone inputs something like 29
        setHour('02');
      }
    }
  };

  var handleMinuteChange = function handleMinuteChange(e) {
    var value = addLeadingZero(e.target.value);

    if (value.length === 2) {
      /* Two-digit stepping */
      setMinutes(value);
    } else if (value.length > 2) {
      var _amPmRef$current4;

      /* Two-digit typing, i.e. the value is going to be three digits */
      // Select AM/PM
      amPmRef === null || amPmRef === void 0 ? void 0 : (_amPmRef$current4 = amPmRef.current) === null || _amPmRef$current4 === void 0 ? void 0 : _amPmRef$current4.select();
      setMinutes(value.slice(-2));
    }
  };

  return /*#__PURE__*/_react.default.createElement("div", {
    className: 'time-field form-control ' + (className ? className : '') + (readOnly ? 'readonly' : '')
  }, /*#__PURE__*/_react.default.createElement("span", {
    className: "fa fa-clock-o",
    "aria-hidden": "true"
  }), /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, ",,,Hour (HH)"), " ", /*#__PURE__*/_react.default.createElement("input", {
    ref: hourRef,
    id: id,
    type: "number",
    name: "hour",
    min: "01",
    max: "12",
    step: "1",
    placeholder: "--",
    role: "textbox" // Linter is mad about this; it fixes VoiceOver bug
    ,
    "aria-describedby": 'hours-description-' + id,
    value: hour,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    onKeyPress: handleKeyPress,
    onChange: handleHourChange,
    required: required,
    readOnly: readOnly
  })), /*#__PURE__*/_react.default.createElement("span", null, ":"), /*#__PURE__*/_react.default.createElement("input", {
    ref: minutesRef,
    id: id + '-minutes',
    "aria-label": "Minutes (MM)",
    type: "number",
    name: "minute",
    min: "00",
    max: "59",
    step: "1",
    placeholder: "--",
    role: "textbox" // Linter is mad about this; it fixes VoiceOver bug
    ,
    "aria-describedby": 'minutes-description-' + id,
    value: minutes,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    onKeyPress: handleKeyPress,
    onChange: handleMinuteChange,
    required: required,
    readOnly: readOnly
  }), /*#__PURE__*/_react.default.createElement("input", {
    ref: amPmRef,
    id: id + '-meridiem',
    "aria-label": "AM or PM",
    type: "text",
    name: "am-pm",
    placeholder: "--",
    "aria-describedby": 'ampm-description-' + id,
    value: amPm,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    required: required,
    readOnly: readOnly
  }), /*#__PURE__*/_react.default.createElement("div", {
    id: 'hours-description-' + id,
    className: "sr-only"
  }, readOnly && /*#__PURE__*/_react.default.createElement("span", null, "This field is disabled. "), !hour && /*#__PURE__*/_react.default.createElement("span", null, "You have not yet selected an hour. "), hour && /*#__PURE__*/_react.default.createElement("span", null, hour, " hour selected. "), minutes && /*#__PURE__*/_react.default.createElement("span", null, minutes, " minutes selected. "), amPm && /*#__PURE__*/_react.default.createElement("span", null, amPm, " selected. "), !readOnly && /*#__PURE__*/_react.default.createElement("span", null, "To increment the hour, press the up arrow. To decrement, press the down arrow. Tab or press the right arrow to move to the minutes selector.")), /*#__PURE__*/_react.default.createElement("div", {
    id: 'minutes-description-' + id,
    className: "sr-only"
  }, readOnly && /*#__PURE__*/_react.default.createElement("span", null, "This field is disabled. "), !minutes && /*#__PURE__*/_react.default.createElement("span", null, "You have not yet selected minutes. "), minutes && /*#__PURE__*/_react.default.createElement("span", null, minutes, " minutes selected. "), hour && /*#__PURE__*/_react.default.createElement("span", null, hour, " hour selected. "), amPm && /*#__PURE__*/_react.default.createElement("span", null, amPm, " selected. "), !readOnly && /*#__PURE__*/_react.default.createElement("span", null, "To increment the minutes, press the up arrow. To decrement, press the down arrow. Tab or press the right arrow to move to the AM/PM selector. Press the left arrow to move to the hour selector.")), /*#__PURE__*/_react.default.createElement("div", {
    id: 'ampm-description-' + id,
    className: "sr-only"
  }, readOnly && /*#__PURE__*/_react.default.createElement("span", null, "This field is disabled. "), !amPm && /*#__PURE__*/_react.default.createElement("span", null, "You have not yet selected AM or PM. "), amPm && /*#__PURE__*/_react.default.createElement("span", null, amPm, " selected. "), hour && /*#__PURE__*/_react.default.createElement("span", null, hour, " hour selected. "), minutes && /*#__PURE__*/_react.default.createElement("span", null, minutes, " minutes selected. "), !readOnly && /*#__PURE__*/_react.default.createElement("span", null, "To select ", amPm === 'AM' ? 'PM' : 'AM', ", press the up or down arrow. Press the right arrow to return to the hour selector. Press the left arrow to return to the minutes selector.")));
};

var _default = /*#__PURE__*/(0, _react.memo)(TimeField);

exports.default = _default;