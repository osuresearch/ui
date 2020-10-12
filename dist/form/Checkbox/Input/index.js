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

var _Print = require("../../../internal/FormCommon/Utility/Print");

var _Diff = require("../../../internal/FormCommon/Utility/Diff");

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

  var _useContext2 = (0, _react.useContext)(_FormContext.default),
      isDiff = _useContext2.isDiff,
      isPrint = _useContext2.isPrint;

  var checked = bind.value || props.defaultChecked || false; // If printing, just return the current value

  if (isPrint) {
    return /*#__PURE__*/_react.default.createElement(_Print.Print, null, checked && /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-check-square-o",
      "aria-label": "Checkbox was checked,,"
    }), !checked && /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-square-o",
      "aria-label": "Checkbox was not checked,,"
    }), "\xA0 ", bind.instructions);
  }

  if (isDiff) {
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
  return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    ref: ref
  }, props, {
    type: "checkbox",
    id: bind.id,
    name: bind.name || props.name,
    className: classNames,
    defaultChecked: checked,
    onChange: function onChange(e) {
      bind.value = e.currentTarget.checked;
      if (props.onChange) props.onChange(e);
    },
    readOnly: bind.readOnly || props.readOnly,
    "aria-describedBy": "".concat(bind.id, "-help")
  }));
});

var _default = Input;
exports.default = _default;