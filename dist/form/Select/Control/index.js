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

/**
 * A control container for `<Select.Option>` children.
 * 
 * Accepts all 
 * [HTMLSelectElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/select)
 * props.
 */
var Control = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var _useContext2 = (0, _react.useContext)(_FormContext.default),
      isDiff = _useContext2.isDiff,
      isPrint = _useContext2.isPrint;

  var classNames = "form-control custom-select ".concat(bind.error && 'is-invalid', " ").concat(bind.success && 'is-valid', " ").concat(props.className && props.className);
  var defaultValue = bind.value || props.defaultValue;

  if (isDiff || isPrint || bind.readOnly) {
    // Let the Option component handle the diff/print/readOnly rendering
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.children);
  }

  return /*#__PURE__*/_react.default.createElement("select", (0, _extends2.default)({
    ref: ref
  }, props, {
    id: bind.id,
    name: bind.name || props.name,
    className: classNames,
    defaultValue: defaultValue,
    "aria-describedBy": "".concat(bind.id, "-help"),
    onChange: function onChange(e) {
      bind.value = e.currentTarget.value;
      if (props.onChange) props.onChange(e);
    }
  }), props.children);
});

var _default = Control;
exports.default = _default;