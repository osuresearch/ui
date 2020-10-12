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

var _Diff = require("../../../internal/FormCommon/Utility/Diff");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * Styled equivalent of `<input type="radio"/>`
 * 
 * Additional accepted props:
 *  * [`radio` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Additional_attributes)
 *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
 *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
 */
var Input = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _ref, _props$className;

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var defaultChecked = props.checked || props.defaultChecked || props.defaultValue === '' + bind.value || undefined;
  var checked = (_ref = props.defaultValue === '' + bind.value) !== null && _ref !== void 0 ? _ref : false;
  var defaultValue = bind.value || props.defaultValue || bind.id;
  var value = bind.value || bind.id;
  var readOnly = bind.readOnly || props.readOnly;
  var required = bind.required || props.required;

  if (bind.diff) {
    var wasChecked = props.value === '' + bind.initialValue;
    return /*#__PURE__*/_react.default.createElement(_Diff.Diff, {
      removed: wasChecked && !checked ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-square-o",
        "aria-label": "Radio button was not selected,,"
      }), "\xA0 ", bind.instructions) : undefined,
      added: !wasChecked && checked ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-check-square-o",
        "aria-label": "Radio button was selected,,"
      }), "\xA0 ", bind.instructions) : undefined
    });
  }

  var classNames = 'custom-control-input ' + ((_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : '') + (bind.error ? ' is-invalid' : '') + (bind.success ? ' is-valid' : '');

  var inputProps = _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    type: 'radio',
    id: bind.id,
    name: bind.name || props.name,
    defaultChecked: defaultChecked,
    defaultValue: defaultValue,
    className: classNames,
    "aria-describedby": "".concat(bind.id, "-help"),
    onClick: function onClick(e) {
      if (readOnly) {
        return e.preventDefault();
      }
    },
    onChange: function onChange(e) {
      bind.value = e.currentTarget.value;
      if (props.onChange) props.onChange(e);
    },
    readOnly: readOnly,
    "aria-disabled": readOnly,
    "aria-required": required,
    "aria-invalid": bind.error ? true : false
  });

  if (bind.controlled) {
    inputProps.checked = checked;
    inputProps.value = value;
  }

  return /*#__PURE__*/_react.default.createElement("input", inputProps);
});

var _default = Input;
exports.default = _default;