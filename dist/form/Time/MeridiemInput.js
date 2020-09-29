"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var MeridiemInput = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      meridiem = _ref.meridiem,
      setMeridiem = _ref.setMeridiem,
      handleClick = _ref.handleClick,
      hourRef = _ref.hourRef,
      minutesRef = _ref.minutesRef,
      required = _ref.required,
      readOnly = _ref.readOnly;

  var handleKeyDown = function handleKeyDown(e) {
    var _hourRef$current, _minutesRef$current;

    var key = e.key;
    var _ref2 = e.target,
        value = _ref2.value,
        readOnly = _ref2.readOnly;

    switch (key) {
      /* Clear field on Delete/Backspace */
      case 'Delete':
      case 'Backspace':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        setMeridiem('');
        break;

      case 'ArrowRight':
        // AM/PM to Hour input
        hourRef === null || hourRef === void 0 ? void 0 : (_hourRef$current = hourRef.current) === null || _hourRef$current === void 0 ? void 0 : _hourRef$current.select();
        break;

      case 'ArrowLeft':
        // AM/PM to Minutes input
        minutesRef === null || minutesRef === void 0 ? void 0 : (_minutesRef$current = minutesRef.current) === null || _minutesRef$current === void 0 ? void 0 : _minutesRef$current.select();
        break;

      case 'ArrowDown':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        setMeridiem(value === 'AM' ? 'PM' : 'AM');
        break;

      case 'ArrowUp':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        setMeridiem(value === 'AM' ? 'PM' : 'AM');
        break;

      case 'a':
      case 'A':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        setMeridiem('AM');
        break;

      case 'p':
      case 'P':
        if (readOnly) {
          e.preventDefault();
          return;
        }

        setMeridiem('PM');
        break;

      default:
        break;
    }
  };

  var handleKeyUp = function handleKeyUp(e) {
    /* Reselect value on arrow key up */
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'ArrowLeft') e.target.select();
  };

  return /*#__PURE__*/_react.default.createElement("input", {
    ref: ref,
    id: id + '-meridiem',
    "aria-label": "AM or PM",
    type: "text",
    name: "am-pm",
    placeholder: "--",
    "aria-describedby": 'meridiem-description-' + id,
    value: meridiem,
    onClick: handleClick,
    onKeyUp: handleKeyUp,
    onKeyDown: handleKeyDown,
    required: required,
    readOnly: readOnly
  });
});

var _default = MeridiemInput;
exports.default = _default;