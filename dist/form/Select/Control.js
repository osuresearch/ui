"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Control = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireWildcard(require("react"));

var _ = require("./");

var _FormContext = _interopRequireDefault(require("../../internal/FormCommon/FormContext"));

;

var Control = function Control(_ref) {
  var children = _ref.children,
      props = (0, _objectWithoutProperties2.default)(_ref, ["children"]);

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var _useContext2 = (0, _react.useContext)(_FormContext.default),
      isDiff = _useContext2.isDiff,
      isPrint = _useContext2.isPrint;

  var classNames = "form-control custom-select ".concat(bind.error && 'is-invalid', " ").concat(bind.success && 'is-valid', " ").concat(props.className && props.className);
  var defaultValue = bind.value || props.defaultValue;

  if (isDiff || isPrint || bind.readOnly) {
    // Let the Option component handle the diff/print/readOnly rendering
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, children);
  }

  return /*#__PURE__*/_react.default.createElement("select", (0, _extends2.default)({}, props, {
    id: bind.id,
    name: bind.name || props.name,
    className: classNames,
    required: bind.required || props.required,
    defaultValue: defaultValue,
    onChange: function onChange(e) {
      bind.value = e.currentTarget.value;
      if (props.onChange) props.onChange(e);
    }
  }), children);
};

exports.Control = Control;