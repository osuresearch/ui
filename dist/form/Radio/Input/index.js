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
 * Styled equivalent of `<input type="radio"/>`
 * 
 * Additional accepted props:
 *  * [`radio` input attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio#Additional_attributes)
 *  * [React event handlers](https://reactjs.org/docs/events.html#supported-events)
 *  * All common [`<input>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input) attributes
 */
var Input = /*#__PURE__*/_react.default.forwardRef(function (props, ref) {
  var _props$className;

  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var _useContext2 = (0, _react.useContext)(_FormContext.default),
      isDiff = _useContext2.isDiff,
      isPrint = _useContext2.isPrint;

  var checked = props.checked || props.defaultValue === '' + bind.value || undefined;
  var value = bind.value || props.defaultValue || bind.id; // If printing, just return the current value

  if (isPrint) {
    return /*#__PURE__*/_react.default.createElement(_Print.Print, null, checked && /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-check-square-o",
      "aria-label": "Radio button was selected,,"
    }), !checked && /*#__PURE__*/_react.default.createElement("i", {
      className: "fa fa-square-o",
      "aria-label": "Radio button was not selected,,"
    }), "\xA0 ", bind.instructions);
  }

  if (isDiff) {
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
  return /*#__PURE__*/_react.default.createElement("input", (0, _extends2.default)({
    ref: ref
  }, props, {
    type: "radio",
    id: bind.id,
    name: bind.name || props.name,
    defaultChecked: checked,
    defaultValue: value,
    className: classNames,
    "aria-describedBy": "".concat(bind.id, "-help"),
    onChange: function onChange(e) {
      bind.value = e.currentTarget.value;
      if (props.onChange) props.onChange(e);
    },
    readOnly: bind.readOnly || props.readOnly
  }));
});

var _default = Input;
exports.default = _default;