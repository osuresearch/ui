"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _slicedToArray2 = _interopRequireDefault(require("@babel/runtime/helpers/slicedToArray"));

var _react = _interopRequireWildcard(require("react"));

var _useSearch2 = _interopRequireDefault(require("../../../hooks/useSearch"));

var _PrefixIcon = _interopRequireDefault(require("./PrefixIcon"));

var _Icon = _interopRequireDefault(require("../../../../components/Icon"));

var AutoComplete = /*#__PURE__*/_react.default.forwardRef(function (_ref, ref) {
  var provider = _ref.provider,
      name = _ref.name,
      defaultValue = _ref.defaultValue,
      onChange = _ref.onChange,
      onFocus = _ref.onFocus,
      onBlur = _ref.onBlur,
      readOnly = _ref.readOnly;

  var _useSearch = (0, _useSearch2.default)(provider),
      setTerms = _useSearch.setTerms,
      terms = _useSearch.terms;

  var _useState = (0, _react.useState)(defaultValue),
      _useState2 = (0, _slicedToArray2.default)(_useState, 2),
      value = _useState2[0],
      setValue = _useState2[1];

  var _useState3 = (0, _react.useState)(false),
      _useState4 = (0, _slicedToArray2.default)(_useState3, 2),
      lockSearchInput = _useState4[0],
      setLockSearchInput = _useState4[1];

  var input = (0, _react.useRef)(null);
  (0, _react.useEffect)(function () {
    if ((value === null || value === void 0 ? void 0 : value.value) && !lockSearchInput) {
      setLockSearchInput(true);
    }
  }, [lockSearchInput, value, defaultValue]);
  (0, _react.useImperativeHandle)(ref, function () {
    return {
      reset: function reset() {
        return _reset();
      },
      clear: function clear() {
        return _clear();
      },
      set: function set(display, value) {
        setTerms('');

        _set(display, value);
      }
    };
  });
  /**
   * Reset the search to what was supplied in the `defaultValue` prop
   */

  var _reset = function _reset() {
    return setValue(defaultValue);
  };
  /**
   * Clear the current search field and results.
   *
   * This will also unlock the search field to accept new
   * input from the user if it was previously locked.
   * 
   */


  var _clear = function _clear() {
    var _input$current;

    setValue({
      display: '',
      value: undefined
    });
    setLockSearchInput(false); // Ensure the input gets focus after the search is cleared

    (_input$current = input.current) === null || _input$current === void 0 ? void 0 : _input$current.focus();
  };
  /**
   * Sets the selected search value
   * 
   * @param {string} display A string that represents the full value that will be displayed in the search input
   * @param {any} value The complete value object
   * 
   */


  var _set = function _set(display, value) {
    setValue({
      display: display,
      value: value
    });
    if (onChange) onChange(value);
  };

  var classNames = 'form-control search-input';

  if (value === null || value === void 0 ? void 0 : value.display) {
    classNames += ' search-input-has-value';
  }

  return /*#__PURE__*/_react.default.createElement("div", {
    className: "input-group search"
  }, /*#__PURE__*/_react.default.createElement(_PrefixIcon.default, {
    searching: false,
    error: false
  }), /*#__PURE__*/_react.default.createElement("input", {
    id: name,
    name: name,
    type: "text",
    className: classNames,
    value: terms || (value === null || value === void 0 ? void 0 : value.display),
    autoComplete: "off",
    "aria-autocomplete": "list",
    "aria-haspopup": "true",
    "aria-owns": name + '-results',
    readOnly: lockSearchInput || readOnly,
    ref: input,
    onChange: function onChange(e) {
      return setTerms(e.target.value);
    },
    onFocus: onFocus,
    onBlur: onBlur
  }), (value === null || value === void 0 ? void 0 : value.display) && !readOnly && /*#__PURE__*/_react.default.createElement("button", {
    className: "btn btn-link search-clear",
    type: "button",
    "aria-label": "clear selection",
    onClick: _clear
  }, /*#__PURE__*/_react.default.createElement(_Icon.default, {
    name: "close"
  })));
});

var _default = AutoComplete;
exports.default = _default;