"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _Diff = _interopRequireDefault(require("../Diff"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Email input field with automatic validation for invalid email addresses
 * 
 * Accepts all
 * [HTMLInputElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email)
 * props.
 */
var Email = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$className;

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var defaultValue = bind.value || props.defaultValue;
  var value = bind.controlled && typeof bind.value === 'string' ? bind.value : undefined;
  var readOnly = bind.readOnly || props.readOnly;
  var required = bind.required || props.required;

  if (bind.diff) {
    return /*#__PURE__*/_react.default.createElement(_Diff.default, {
      value: typeof value === 'string' ? value : undefined,
      prevValue: typeof bind.initialValue === 'string' ? bind.initialValue : undefined
    });
  }

  var classNames = 'form-control ' + ((_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : '') + (bind.error ? ' is-invalid' : '') + (bind.success ? ' is-valid' : '');
  /** SIMPLE email validation. Updates the bind's error state on invalid email */

  var nativeOnBlur = function nativeOnBlur(e) {
    if (!bind.value) {
      if (props.required) {
        bind.error = 'You must specify an email address';
      }

      return;
    }

    if (!/[^@]+@[^\.]+\..+/g.test(bind.value)) {
      bind.error = 'Invalid email';
    } else {
      bind.error = '';
    }
  };

  var inputProps = _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    type: "text",
    id: bind.id,
    name: bind.name || props.name,
    defaultValue: defaultValue,
    className: classNames,
    'aria-describedby': "".concat(bind.id, "-help"),
    onChange: function onChange(e) {
      bind.value = e.currentTarget.value;
      if (props.onChange) props.onChange(e);
    },
    onBlur: nativeOnBlur,
    readOnly: readOnly,
    "aria-disabled": readOnly,
    "aria-required": required,
    "aria-invalid": bind.error ? true : false
  }); // Assign a value to the input if it is controlled


  if (bind.controlled) {
    inputProps.value = value;
  }

  return /*#__PURE__*/_react.default.createElement("input", inputProps);
});

var _default = Email;
exports.default = _default;