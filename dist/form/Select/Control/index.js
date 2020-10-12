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

var _Utility = require("../../../internal/FormCommon/Utility");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

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

  var classNames = "form-control custom-select ".concat(bind.error && 'is-invalid', " ").concat(bind.success && 'is-valid', " ").concat(props.className ? props.className : '');
  var value = bind.value || props.defaultValue || props.value;
  var required = bind.required || props.required; // Display Read Only as readOnly text input

  if (bind.readOnly) {
    return /*#__PURE__*/_react.default.createElement(_Utility.Print, {
      id: bind.id,
      name: bind.name || props.name,
      value: value
    });
  }

  if (bind.diff) {
    // Let the Option component handle the diff
    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, props.children);
  }

  var selectProps = _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    id: bind.id,
    name: bind.name || props.name,
    className: classNames,
    defaultValue: value,
    "aria-describedby": "".concat(bind.id, "-help"),
    onChange: function onChange(e) {
      bind.value = e.currentTarget.value;
      if (props.onChange) props.onChange(e);
    },
    'aria-required': required,
    "aria-invalid": bind.error ? true : false
  }); // Assign a value to the select if it is controlled


  if (bind.controlled) {
    selectProps.value = value;
  }

  return /*#__PURE__*/_react.default.createElement("select", selectProps, props.children);
});

var _default = Control;
exports.default = _default;