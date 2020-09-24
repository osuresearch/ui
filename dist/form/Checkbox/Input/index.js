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

var _Print = require("../../../internal/FormCommon/Utility/Print");

var _Diff = require("../../../internal/FormCommon/Utility/Diff");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/**
 * `<Checkbox.Input />` sub-component. 
 * 
 * Accepts all 
 * [HTMLInputElement attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/checkbox)
 * as props.
 */
var Input = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$className;

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var defaultChecked = bind.value || props.defaultChecked || false;
  var checked = bind.value ? bind.value : false;
  var readOnly = bind.readOnly || props.readOnly; // If readOnly, display as print

  if (readOnly) {
    return /*#__PURE__*/_react.default.createElement(_Print.Print, null, checked && /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-check-square-o",
      "aria-label": "Checkbox was checked,,"
    }), !checked && /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-square-o",
      "aria-label": "Checkbox was not checked,,"
    }), "\xA0 ", bind.instructions);
  } // Diff mode


  if (bind.diff) {
    var wasChecked = bind.initialValue === true;
    return /*#__PURE__*/_react.default.createElement(_Diff.Diff, {
      removed: wasChecked && !checked ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-square-o",
        "aria-label": "Checkbox was not checked,,"
      }), "\xA0 ", bind.instructions) : undefined,
      added: !wasChecked && checked ? /*#__PURE__*/_react.default.createElement("span", null, /*#__PURE__*/_react.default.createElement("i", {
        className: "fa fa-check-square-o",
        "aria-label": "Checkbox was checked,,"
      }), "\xA0 ", bind.instructions) : undefined
    });
  }

  var classNames = 'custom-control-input ' + ((_props$className = props.className) !== null && _props$className !== void 0 ? _props$className : '') + (bind.error ? ' is-invalid' : '') + (bind.success ? ' is-valid' : '');

  var inputProps = _objectSpread(_objectSpread({
    ref: ref
  }, props), {}, {
    type: 'checkbox',
    id: bind.id,
    name: bind.name || props.name,
    className: classNames,
    defaultChecked: defaultChecked,
    onChange: function onChange(e) {
      bind.value = e.currentTarget.checked;
      if (props.onChange) props.onChange(e);
    },
    "aria-describedby": "".concat(bind.id, "-help")
  });

  if (bind.controlled) {
    inputProps.checked = checked;
  }

  return /*#__PURE__*/_react.default.createElement("input", inputProps);
});

var _default = Input;
exports.default = _default;