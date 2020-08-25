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
var Email = function Email(props) {
  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var classNames = 'form-control ' + (bind.error ? ' is-invalid' : '');

  var nativeOnChange = function nativeOnChange(e) {
    bind.value = e.currentTarget.value;
  };
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

  return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({}, props, {
    type: "text",
    id: bind.id,
    name: bind.name,
    readOnly: bind.readOnly,
    value: bind.value || '',
    className: classNames,
    onChange: nativeOnChange,
    onBlur: nativeOnBlur
  }));
};

exports.Email = Email;