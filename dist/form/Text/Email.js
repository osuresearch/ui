"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Email = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _ = require(".");

/**
 * Email input field with automatic validation for invalid email addresses
 */
var Email = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$className;

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var value = bind.value || props.defaultValue;
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

  return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    ref: ref
  }, props, {
    type: "text",
    id: bind.id,
    name: bind.name || props.name,
    defaultValue: value,
    className: classNames,
    onChange: function onChange(e) {
      bind.value = e.currentTarget.value;
      if (props.onChange) props.onChange(e);
    },
    onBlur: nativeOnBlur,
    readOnly: bind.readOnly || props.readOnly,
    required: bind.required || props.required
  }));
});

exports.Email = Email;