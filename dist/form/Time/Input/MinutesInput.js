"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _helpers = require("../helpers");

/* eslint-disable jsx-a11y/no-redundant-roles */
var MinutesInput = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      minutes = _ref.minutes,
      setMinutes = _ref.setMinutes,
      handleClick = _ref.handleClick,
      hourRef = _ref.hourRef,
      meridiemRef = _ref.meridiemRef,
      readOnly = _ref.readOnly,
      required = _ref.required,
      invalid = _ref.invalid;

  var handleKeyDown = function handleKeyDown(e) {
    var _meridiemRef$current, _hourRef$current;

    var key = e.key;
    var _ref2 = e.target,
        value = _ref2.value,
        min = _ref2.min,
        max = _ref2.max,
        readOnly = _ref2.readOnly;
    /* Prevent non-numeric characters from being input for hour/minutes */

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

        setMinutes('');
        break;

      case 'ArrowRight':
        // Minutes to AM/PM input
        meridiemRef === null || meridiemRef === void 0 ? void 0 : (_meridiemRef$current = meridiemRef.current) === null || _meridiemRef$current === void 0 ? void 0 : _meridiemRef$current.select();
        break;

      case 'ArrowLeft':
        // Minutes to Hour input
        hourRef === null || hourRef === void 0 ? void 0 : (_hourRef$current = hourRef.current) === null || _hourRef$current === void 0 ? void 0 : _hourRef$current.select();
        break;

      case 'ArrowDown':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        if (value <= min) {
          setMinutes('59');
          e.preventDefault();
        }

        break;

      case 'ArrowUp':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        if (value === max || value === '') {
          setMinutes('00');
          e.preventDefault();
        }

        break;

      case 'Home':
        // Spinbutton behavior: https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
        if (readOnly) {
          e.preventDefault();
          return;
        }

        setMinutes('00');
        e.preventDefault();
        break;

      case 'End':
        // Spinbutton behavior: https://www.w3.org/TR/wai-aria-practices-1.1/#spinbutton
        if (readOnly) {
          e.preventDefault();
          return;
        }

        setMinutes('59');
        e.preventDefault();
        break;

      default:
        break;
    }
  };

  var handleKeyUp = function handleKeyUp(e) {
    /* Reselect value on arrow key up */
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') e.target.select();
  };

  var handleKeyPress = function handleKeyPress(e) {
    var key = e.key;
    /* Change input to next field when key is greater than the highest possible first digit of the minute */

    if (/[6-9]/.test(key)) {
      var _meridiemRef$current2;

      meridiemRef === null || meridiemRef === void 0 ? void 0 : (_meridiemRef$current2 = meridiemRef.current) === null || _meridiemRef$current2 === void 0 ? void 0 : _meridiemRef$current2.select();
    }
  };

  var handleMinuteChange = function handleMinuteChange(e) {
    var value = (0, _helpers.addLeadingZero)(e.target.value);

    if (value.length === 2) {
      /* Two-digit stepping */
      setMinutes(value);
    } else if (value.length > 2) {
      var _meridiemRef$current3;

      /* Two-digit typing, i.e. the value is going to be three digits */
      // Select AM/PM
      meridiemRef === null || meridiemRef === void 0 ? void 0 : (_meridiemRef$current3 = meridiemRef.current) === null || _meridiemRef$current3 === void 0 ? void 0 : _meridiemRef$current3.select();
      setMinutes(value.slice(-2));
    }
  };

  return /*#__PURE__*/_react.default.createElement("input", {
    ref: ref,
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
    readOnly: readOnly,
    "aria-required": required,
    "aria-invalid": invalid
  });
});

var _default = MinutesInput;
exports.default = _default;