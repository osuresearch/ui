"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Input = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _react = _interopRequireWildcard(require("react"));

var _ = require(".");

var _FormContext = _interopRequireDefault(require("../../internal/FormCommon/FormContext"));

var _Print = _interopRequireDefault(require("./Print"));

var _Diff = _interopRequireDefault(require("./Diff"));

var Input = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$className;

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var _useContext2 = (0, _react.useContext)(_FormContext.default),
      isDiff = _useContext2.isDiff,
      isPrint = _useContext2.isPrint;

  var value = bind.value || props.defaultValue;

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
    readOnly: bind.readOnly || props.readOnly,
    required: bind.required || props.required
  }));
});

exports.Input = Input;