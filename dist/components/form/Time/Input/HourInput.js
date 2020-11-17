"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _helpers = require("../helpers");

/* eslint-disable jsx-a11y/no-redundant-roles */
var HourInput = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      hour = _ref.hour,
      setHour = _ref.setHour,
      setMeridiem = _ref.setMeridiem,
      handleClick = _ref.handleClick,
      minutesRef = _ref.minutesRef,
      meridiemRef = _ref.meridiemRef,
      readOnly = _ref.readOnly,
      required = _ref.required,
      invalid = _ref.invalid;

  var handleKeyDown = function handleKeyDown(e) {
    var _minutesRef$current, _meridiemRef$current;

    var key = e.key;
    var _ref2 = e.target,
        value = _ref2.value,
        min = _ref2.min,
        max = _ref2.max,
        readOnly = _ref2.readOnly;
    /* Prevent non-numeric characters from being input */

    if (key.length === 1 && /\D/.test(key)) {
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

        setHour('');
        break;

      case 'ArrowRight':
        minutesRef === null || minutesRef === void 0 ? void 0 : (_minutesRef$current = minutesRef.current) === null || _minutesRef$current === void 0 ? void 0 : _minutesRef$current.select();
        break;

      case 'ArrowLeft':
        meridiemRef === null || meridiemRef === void 0 ? void 0 : (_meridiemRef$current = meridiemRef.current) === null || _meridiemRef$current === void 0 ? void 0 : _meridiemRef$current.select();
        break;

      case 'ArrowDown':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        if (value <= min) {
          setHour('12');
          e.preventDefault();
        }

        break;

      case 'ArrowUp':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        if (value === max || value === '') {
          setHour('01');
          e.preventDefault();
        }

        break;

      case 'Home':
        // Spinbutton behavior: https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
        if (readOnly) {
          e.preventDefault();
          return;
        }

        setHour('01');
        e.preventDefault();
        break;

      case 'End':
        // Spinbutton behavior: https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
        if (readOnly) {
          e.preventDefault();
          return;
        }

        setHour('12');
        e.preventDefault();
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
    /* Change input to next field when key is greater than the highest possible first digit of the hour/minute */

    if (/[3-9]/.test(key)) {
      var _minutesRef$current2;

      minutesRef === null || minutesRef === void 0 ? void 0 : (_minutesRef$current2 = minutesRef.current) === null || _minutesRef$current2 === void 0 ? void 0 : _minutesRef$current2.select();
    }
  };

  var handleHourChange = function handleHourChange(e) {
    var value = (0, _helpers.addLeadingZero)(e.target.value);

    if (value.length === 2) {
      /* Two-digit stepping */
      setHour(value);
    } else if (value.length > 2) {
      var _minutesRef$current3;

      /* Two-digit typing, i.e. the value is going to be three digits */
      var intValue = parseInt(value); // Select the minutes input

      minutesRef === null || minutesRef === void 0 ? void 0 : (_minutesRef$current3 = minutesRef.current) === null || _minutesRef$current3 === void 0 ? void 0 : _minutesRef$current3.select(); // Convert military time values to 12h time

      if (intValue >= 13 && intValue <= 23) {
        setMeridiem('PM');
        setHour((0, _helpers.addLeadingZero)((intValue - 12).toString()));
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

  return /*#__PURE__*/_react.default.createElement("label", null, /*#__PURE__*/_react.default.createElement("span", {
    className: "sr-only"
  }, ",,,Hour (HH)"), " ", /*#__PURE__*/_react.default.createElement("input", {
    ref: ref,
    id: id,
    type: "number",
    name: "hour",
    min: "01",
    max: "12",
    step: "1",
    placeholder: "--",
    role: "textbox" // Linter is mad about this; it fixes VoiceOver bug
    ,
    "aria-describedby": "".concat(id, "-help hours-description-").concat(id),
    value: hour,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    onKeyPress: handleKeyPress,
    onChange: handleHourChange,
    readOnly: readOnly,
    "aria-required": required,
    "aria-invalid": invalid
  }));
});

var _default = HourInput;
exports.default = _default;