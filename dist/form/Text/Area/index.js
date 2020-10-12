"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("..");

var _FormContext = _interopRequireDefault(require("../../../internal/FormCommon/FormContext"));

var _Print = _interopRequireDefault(require("../Print"));

var _Diff = _interopRequireDefault(require("../Diff"));

/**
 * Equivalent of `<textarea>`
 * 
 * Accepts all
 * [HTMLTextAreaElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea)
 * props.
 */
var Area = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$className;

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var _useContext2 = (0, _react.useContext)(_FormContext.default),
      isDiff = _useContext2.isDiff,
      isPrint = _useContext2.isPrint;

  var value = bind.value || props.defaultValue;
  var minLength = props.minLength,
      maxLength = props.maxLength;

  if (isDiff) {
    return /*#__PURE__*/_react.default.createElement(_Diff.default, {
      value: typeof value === 'string' ? value : undefined,
      prevValue: typeof bind.initialValue === 'string' ? bind.initialValue : undefined
    });
  }

  if (isPrint) {
    return /*#__PURE__*/_react.default.createElement(_Print.default, {
      value: typeof value === 'string' ? value : ''
    });
  }

  var classNames = 'form-control ' + ((_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : '') + (bind.error ? ' is-invalid' : '') + (bind.success ? ' is-valid' : '');
  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("textarea", (0, _extends2.default)({
    ref: ref
  }, props, {
    id: bind.id,
    name: bind.name || props.name,
    defaultValue: value,
    className: classNames,
    "aria-describedBy": "".concat(bind.id, "-help"),
    onChange: function onChange(e) {
      bind.value = e.currentTarget.value;
      if (props.onChange) props.onChange(e);
    },
    readOnly: bind.readOnly || props.readOnly
  })), typeof value === 'string' && minLength && value.length < minLength && /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-muted"
  }, "".concat(minLength, " characters required \u2013 ").concat(minLength - value.length, " more needed")), typeof value === 'string' && maxLength && /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-muted"
  }, "".concat(value.length, " of ").concat(maxLength, " character limit")));
});

var _default = Area;
exports.default = _default;