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

require("../../../internal/FormCommon/style.scss");

/**
 * An option nested in a `<Select.Control>`
 * 
 * Requires *either* a `value` or `optionsBind` prop.
 * 
 * Accepts all 
 * [HTMLOptionElement](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/option)
 * props.
 */
var Option = function Option(props) {
  var _useContext = (0, _react.useContext)(_.Context),
      bind = _useContext.bind;

  var _useContext2 = (0, _react.useContext)(_FormContext.default),
      isDiff = _useContext2.isDiff,
      isPrint = _useContext2.isPrint;

  if (props.optionsBind) {
    if (isPrint || bind.readOnly) {
      return /*#__PURE__*/_react.default.createElement(_Print.Print, null, props.optionsBind.value[bind.value]);
    }

    if (isDiff) {
      return /*#__PURE__*/_react.default.createElement(_Diff.Diff, {
        removed: !(bind.initialValue in props.optionsBind.value) ? props.optionsBind.initialValue[bind.initialValue] : props.optionsBind.value[bind.initialValue],
        added: props.optionsBind.value[bind.value]
      });
    }

    return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, Object.keys(props.optionsBind.value).map(function (key) {
      return /*#__PURE__*/_react.default.createElement("option", (0, _extends2.default)({}, props, {
        key: key,
        value: key
      }), props.optionsBind.value[key]);
    }));
  }

  return /*#__PURE__*/_react.default.createElement("option", props, props.children);
};

var _default = Option;
exports.default = _default;