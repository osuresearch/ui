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

  var defaultValue = bind.value || props.defaultValue;
  var value = bind.controlled && typeof bind.value === 'string' ? bind.value : undefined;
  var minLength = props.minLength,
      maxLength = props.maxLength;
  var readOnly = bind.readOnly || props.readOnly;
  var required = bind.required || props.required;

  if (bind.diff) {
    return /*#__PURE__*/_react.default.createElement(_Diff.default, {
      value: typeof value === 'string' ? value : undefined,
      prevValue: typeof bind.initialValue === 'string' ? bind.initialValue : undefined
    });
  }

  var classNames = 'form-control ' + ((_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : '') + (bind.error ? ' is-invalid' : '') + (bind.success ? ' is-valid' : '');

  var textAreaProps = _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    id: bind.id,
    name: bind.name || props.name,
    defaultValue: defaultValue,
    className: classNames,
    'aria-describedby': "".concat(bind.id, "-help"),
    onChange: function onChange(e) {
      bind.value = e.currentTarget.value;

      if (props.onChange && !readOnly) {
        props.onChange(e);
      }
    },
    readOnly: readOnly,
    "aria-disabled": readOnly,
    "aria-required": required,
    "aria-invalid": bind.error ? true : false
  });

  if (bind.controlled) {
    textAreaProps.value = value;
  }

  return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement("textarea", textAreaProps), typeof value === 'string' && minLength && value.length < minLength && /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-muted"
  }, "".concat(minLength, " characters required \u2013 ").concat(minLength - value.length, " more needed")), typeof value === 'string' && maxLength && /*#__PURE__*/_react.default.createElement("div", {
    className: "small text-muted"
  }, "".concat(value.length, " of ").concat(maxLength, " character limit")));
});

var _default = Area;
exports.default = _default;